import React, { useEffect, useRef, useState } from 'react'
import ProfileIcon from '../assets/icons/profile.svg'
import { Link, useNavigate } from 'react-router-dom'
import MyOrder from "../assets/icons/myOrder.svg"
import TrackOrder from "../assets/icons/trackOrder.svg"
import CrazyDeals from "../assets/icons/crazyDeals.svg"
import ShopAll from "../assets/icons/shopAll.svg"
import BestSellers from "../assets/icons/bestSeller.svg"
import Perfumes from "../assets/icons/perfumes.svg"
import newLaunchBanner from "../assets/icons/new-launch-banner.jpg"
import BathBody from "../assets/icons/bathBody.svg"
import Makeup from "../assets/icons/makeup.svg"
import SkinCare from "../assets/icons/skinCare.svg"
import SpecialGift from "../assets/icons/specialGift.svg"
import Fragrance from "../assets/icons/fragrance.svg"
import downArrow from "../assets/icons/down.svg"
import Bogo from "../assets/icons/bogo.svg"
import "../css/home.css"

function SideBarContent() {
    const navigate = useNavigate()
    const topOptionsRef = useRef(null);
    const menuOptionsRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState('auto');

    useEffect(() => {
        const updateMenuHeight = () => {
            if (topOptionsRef.current && menuOptionsRef.current) {
                const topOptionsHeight = topOptionsRef.current.offsetHeight;
                const windowHeight = window.innerHeight;
                const calculatedMenuHeight = windowHeight - topOptionsHeight;
                setMenuHeight(`${calculatedMenuHeight}px`);
            }
        };

        // Update height on initial render
        updateMenuHeight();

        // Update height when the window is resized
        window.addEventListener('resize', updateMenuHeight);
        return () => window.removeEventListener('resize', updateMenuHeight);
    }, []);

    const playStoreLink = () => {
        window.open('https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps&hl=en', '_blank')
    }

    const goToAccount = () => {
        navigate('/account/orders')
    }

    const goToNewProducts = () => {
        navigate('/collection/newArrivals')
    }

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const sideBarOptions = () => [
        { name: "My Account", src: ProfileIcon, navigate: '/account' },
        { name: "BOGO", src: Bogo, navigate: '/collection/bogo' },
        { name: "Crazy Deals 🔥", src: CrazyDeals, navigate: '/collection/crazyDeals' },
        { name: "Shop All", src: ShopAll, navigate: '/collection/shopAll' },
        { name: "Bestsellers", src: BestSellers, navigate: '/collection/bestSellers' },
        { name: "Perfumes", src: Perfumes, banner: newLaunchBanner, downArrow: downArrow, navigateTo: '/collection/perfumes', subMenu: ["All Perfumes", "Men", "Women", "Unisex", "Oud Collection", "Attars", "Little Luxuries"] },
        { name: "Bath & Body", src: BathBody, downArrow: downArrow, navigateTo: '/collection/bathBody', subMenu: ["Shower Gel", "Body Mist", "Body Parfum", "Body Lotion", "Travel Kit"] },
        { name: "Makeup", src: Makeup, navigate: '/collection/makeup' },
        { name: "SkinCare", src: SkinCare, downArrow: downArrow, navigateTo: '/collection/skincare', subMenu: ["All SkinCare", "Face Wash", "Lip Cate", "Skin Essential Combos"] },
        { name: "Special Giftings", src: SpecialGift, downArrow: downArrow, navigateTo: '/collection/giftSets', subMenu: ["Gift Sets", "Perfume Combos"] },
        { name: "Fragrance Finder", src: Fragrance, navigate: '/pages/fragranceFinder' },
    ]

    return (
        <div className='sideBarContent'>
            <div className="topOptions" ref={topOptionsRef}>
                <div className="installApp" onClick={playStoreLink}>
                    <div className="profileLogo">
                        <img src={ProfileIcon} alt="" className="appProfileLogo" />
                    </div>
                    <div className="appText">
                        <div className="topText">
                            <span className="yellowText">
                                Use <span className="black-bold">99%</span> of your <span className="black-bold">Cashback</span>
                            </span> &nbsp;
                        </div>
                        <div className="botText">
                            <span className='underlineText'>To Redeem</span> <span className='DownloadBtn'>Download App</span>
                        </div>
                    </div>
                </div>
                <div className="myOrderTrackOrder">
                    <button className='myOrder' onClick={goToAccount}><img src={MyOrder} alt="My-Order" className='myOrderImg' />My Order</button>
                    <button className='trackOrder' onClick={goToAccount}><img src={TrackOrder} alt="Track-Order" className='myOrderImg' />Track Order</button>
                </div>
            </div>
            <div className="menuOptions" ref={menuOptionsRef} style={{ height: menuHeight }}>
                {sideBarOptions().map((opt, index) => (
                    <div className="menuOption" key={index}>
                        <div className="menuBanner" onClick={goToNewProducts}>
                            {opt.banner ? (<div>
                                <img src={opt.banner} alt="SidebarBanner" />
                            </div>) : ""}
                        </div>
                        <Link to={opt.navigate}>
                            <div className="menuOptionContent" onClick={() => handleClick(index)}>
                                <div className="left">
                                    <div className="menuOptLogo" key={index}>
                                        <img src={opt.src} alt="SidebarIcons" className={index === 0 ? "profileIconRounded" : ""} />
                                    </div>
                                    <div className="menuOptName">
                                        {opt.name}
                                    </div>
                                </div>
                                <div className="right">
                                    {opt.downArrow ? (<div>
                                        <img src={opt.downArrow} alt="Right Arrow" className={`rightArrowTopFooter downArrowIndexCss ${activeIndex === index ? 'rotate-arrow' : ''}`} />
                                    </div>) : ""}
                                </div>
                            </div>
                            {opt.subMenu && Array.isArray(opt.subMenu) && opt.name && (
                                <div className={`footer750pxCatItems sideBarSubMenuLiIndexCss ${activeIndex === index ? 'show' : 'hide'}`}>
                                    <ul>
                                        {opt.subMenu.map((item, subIndex) => (
                                            <Link to={opt.navigateTo} >
                                                <li key={subIndex}>{item}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default SideBarContent


//     < div className = "bottomText" >
//         <p><span className='black-bold-text'>Made with</span> ❤️ <span className='black-bold-text'>By</span> <span className="yellowText">Rohit</span></p>
// </div >