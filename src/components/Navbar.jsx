import React, { useEffect, useRef, useState } from 'react'
import CartIcon from "../assets/icons/cart12.png"
import ProfileIcon from '../assets/icons/profile.svg'
import BrandLogo from "../assets/logo.svg"
import { Link, NavLink, useLocation } from 'react-router-dom'
import SideNavbar from './SideNavbar'


function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [defaultNavbar, setDefaultNavbar] = useState(true);
    const location = useLocation();
    const yAxisRef = useRef(window.scrollY);

    const brandLogoCLick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Enables smooth scrolling
        });

    }

    useEffect(() => {
        // Scroll to the top of the page when the path changes
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // console.log("Current scroll:", currentScroll, "Previous yAxis:", yAxisRef.current);

            // Hide the navbar if scrolled below 200px, otherwise show it
            if (currentScroll < 100) {
                setShowNavbar(false);
            } else {
                // Show or hide the navbar based on scroll direction
                if (yAxisRef.current > currentScroll) {
                    setShowNavbar(true); // Scrolling up, show the navbar
                } else {
                    setShowNavbar(false); // Scrolling down, hide the navbar
                }
            }

            // Update yAxisRef to current scroll position
            yAxisRef.current = currentScroll;
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ${location.pathname === "/collection/shopAll" && "liElements"}`}>

    return (
        <div style={{ position: showNavbar ? "fixed" : "", top: showNavbar ? 0 : "", display: (showNavbar ? "block" : "none" || defaultNavbar ? "block" : "none"), }}
            className={`mainNavbar ${location.pathname === "/" && "mainHover"} 
        ${location.pathname === "/" ? sidebarOpen ? "sidebarOpenHover" : "" : ""} 
        ${showNavbar ? "liElements sidebarOpenHover" : ""}
        ${location.pathname === "/" ? "" : "liElements"}`}>

            <div className="topNav">
                <div className="searchBar">
                    <div className="hamburgMenu">
                        <SideNavbar setSidebarOpen={setSidebarOpen} />
                    </div>
                    <form className="form">
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <input className="input" placeholder="Search" required="" type="text" />
                        <button className="reset" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="brandLogo">
                    <Link to="/"><img src={BrandLogo} alt="BrandLogo" className='logo' onClick={brandLogoCLick} /></Link>
                </div>
                <div className="Nav_icons">
                    <Link to="/account"><img src={ProfileIcon} alt="Profile" className='navIcon profileIcon' /></Link>
                    <Link to=""><img src={CartIcon} alt="Cart" className='navIcon' /></Link>
                </div>
            </div>
            <div className="searchBarBig">
                <form className="formLower">
                    <button>
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" placeholder="Search For Your Favorite Product " required="" type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>
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
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/perfumes">Perfumes</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/bathBody">Bath & Body</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/makeup">Makeup</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/newArrivals">New Arrivals</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/skincare">SkinCare</NavLink>
                        </li>
                        <li>
                            <NavLink className={(e) => (e.isActive ? "navActive" : "")} to="/collection/giftSets">Gifting</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default Navbar