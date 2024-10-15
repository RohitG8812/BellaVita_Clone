import React, { useEffect, useRef, useState } from 'react'
import CartIcon from "../assets/icons/cart12.png"
import ProfileIcon from '../assets/icons/profile.svg'
import BrandLogo from "../assets/logo.svg"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import "../css/Search.css"
import Search from './Search'
import Products from "../JSON/Products.js"

const perfumes = ["All Perfumes", "Men", "Women", "Unisex", "Oud Collection", "Attars", "Little Luxuries"]
const bathBody = ["Shower Gel", "Body Mist", "Body Parfum", "Body Lotion", "Travel Kit"]
const SkinCare = ["All SkinCare", "Face Wash", "Lip Cate", "Skin Essential Combos"]
const Gifting = [{ name: "Gift Sets" }, { name: "Perfume Combos" }]

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [defaultNavbar, setDefaultNavbar] = useState(true);
    const [inputBoxActive, setInputBoxActive] = useState(false)
    const [value, setValue] = useState("")
    const [inputValueLength, setInputValueLength] = useState(false)
    const location = useLocation();
    const yAxisRef = useRef(window.scrollY);

    const brandLogoCLick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll < 100) {
                setShowNavbar(false);
            } else {
                if (yAxisRef.current > currentScroll) {
                    setShowNavbar(true); // Scrolling up, show the navbar
                } else {
                    setShowNavbar(false); // Scrolling down, hide the navbar
                }
            }
            yAxisRef.current = currentScroll;
        };
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate()

    const handleOpenPerfumes = () => {
        navigate("/collection/perfumes")
    }
    const handleOpenBathBody = () => {
        navigate("/collection/bathBody")
    }
    const handleOpenGiftSets = () => {
        navigate("/collection/giftSets")
    }
    const handleOpenPerfumeCombos = () => {
        navigate("/collection/perfumesSets")
    }

    const handleInputChange = (e) => {
        let value = e.target.value
        setValue(value)
        if (value === "") {
            setInputValueLength(false)
        } else {
            setInputValueLength(true)
        }
        // console.log(value)
    }

    const handleInputValueRemove = () => {
        setValue("")
        setInputValueLength(false)
    }

    const handleSubmitInput = (e) => {
        e.preventDefault()
        const inputText = value.toLowerCase()
        console.log(inputText)
        const searchProducts = Products.filter((item) =>
            item.name.toLowerCase().includes(inputText) ||
            item.category.toLowerCase().includes(inputText) ||
            item.variantM.toLowerCase().includes(inputText)
        );
        console.log(searchProducts)
        navigate(`/collection/searchProducts?query=${encodeURIComponent(inputText)}`, {
            state: { searchResults: searchProducts } // pass the parameter to the searchResultPage
        });
        setInputBoxActive(false)
        // setValue('')
    }

    const handleOutsideClick = () => {
        setInputBoxActive(false);
    };
    return (
        <div style={{ position: showNavbar ? "fixed" : "", top: showNavbar ? 0 : "", display: (showNavbar ? "block" : "none" || defaultNavbar ? "block" : "none"), }}
            className={`mainNavbar ${location.pathname === "/" && "mainHover"} 
        ${location.pathname === "/" ? sidebarOpen ? "sidebarOpenHover" : "" : ""} 
        ${showNavbar ? "liElements sidebarOpenHover" : ""}
        ${location.pathname === "/" ? "" : "liElements"}`}>
            <div className="topNav">
                <div className="searchBar">
                    <>
                        <div className="hamburgMenu">
                            <SideNavbar setSidebarOpen={setSidebarOpen} />
                        </div>
                        <form className="form" onSubmit={handleSubmitInput}>
                            <button>
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <input
                                className="input inputBoxNavbar"
                                placeholder="Search"
                                required=""
                                value={value}
                                onChange={handleInputChange}
                                type="text"
                                onClick={() => setInputBoxActive(true)} />
                            <button className="reset" type="reset" onClick={handleInputValueRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </form>
                    </>
                    <div className="searchContentMain" style={{ display: inputBoxActive ? "block" : "none" }}>
                        <Search
                            inputBoxActive={inputBoxActive}
                            inputValueLength={inputValueLength}
                        />
                    </div>
                </div>
                <div className="brandLogo">
                    <Link to="/"><img src={BrandLogo} alt="BrandLogo" className='logo' onClick={brandLogoCLick} /></Link>
                </div>
                <div className="Nav_icons">
                    <Link to="/account"><img src={ProfileIcon} alt="Profile" className='navIcon profileIcon' /></Link>
                    <Link to=""><img src={CartIcon} alt="Cart" className='navIcon' /></Link>
                </div>
            </div>

            {/* for disable backGround when inputBox Active */}
            {inputBoxActive && (
                <div className="overlay overLayNavbar" onClick={() => {
                    if (inputBoxActive) handleOutsideClick();
                }}></div>)}

            <div className="searchBarBig">
                <>
                    <form className="formLower" onSubmit={handleSubmitInput}>
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <input
                            className="input inputBoxNavbar"
                            placeholder="Search For Your Favorite Product "
                            required=""
                            type="text"
                            value={value}
                            onChange={handleInputChange}
                            onClick={() => setInputBoxActive(true)}
                        />
                        <button className="reset" type="reset" onClick={handleInputValueRemove}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                </>
                <div className="searchContentMainMini" style={{ display: inputBoxActive ? "block" : "none" }}>
                    <Search
                        inputBoxActive={inputBoxActive}
                        inputValueLength={inputValueLength}
                    />
                </div>
            </div>
            <div className={`bottom ${location.pathname === "/" ? "" : "bottom-Slide"}`}>
                <nav>
                    <ul className='bottomSlider2'>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/bogo">BOGO</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/crazyDeals">Crazy Deals</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/shopAll">Shop All</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/bestSellers">BestSellers</NavLink>
                        </li>
                        <li className='navBarHoverMenu'>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/perfumes">Perfumes</NavLink>
                            <div className="onHoverMenu">
                                {perfumes.map((items, index) => {
                                    return <div className="onHoverMenuOpt" key={index}>
                                        <li onClick={handleOpenPerfumes}>{items}</li>
                                    </div>
                                })}
                            </div>
                        </li>
                        <li className='navBarHoverMenu'>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/bathBody">Bath & Body</NavLink>
                            <div className="onHoverMenu">
                                {bathBody.map((items, index) => {
                                    return <div className="onHoverMenuOpt" key={index}>
                                        <li onClick={handleOpenBathBody}>{items}</li>
                                    </div>
                                })}
                            </div>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/makeup">Makeup</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/newArrivals">New Arrivals</NavLink>
                        </li>
                        <li className='navBarHoverMenu'>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/skincare">SkinCare</NavLink>
                            <div className="onHoverMenu">
                                {SkinCare.map((items, index) => {
                                    return <div className="onHoverMenuOpt" key={index}>
                                        <li onClick={handleOpenBathBody}>{items}</li>
                                    </div>
                                })}
                            </div>
                        </li>
                        <li className='navBarHoverMenu'>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/giftSets">Gifting</NavLink>
                            <div className="onHoverMenu">
                                {Gifting.map((items, index) => {
                                    return <div className="onHoverMenuOpt" key={index}>
                                        <li onClick={items.name === "Gift Sets" ? handleOpenGiftSets : handleOpenPerfumeCombos}>{items.name}</li>
                                    </div>
                                })}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar