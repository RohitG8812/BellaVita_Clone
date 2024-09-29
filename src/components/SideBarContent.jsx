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
import RightArrow from "../assets/icons/rightArrow.svg"
import Bogo from "../assets/icons/bogo.svg"

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
        navigate('/account')
    }

    const goToNewProducts = () => {
        navigate('/collection/newArrivals')
    }

    const sideBarOptions = () => [
        { name: "BOGO", src: Bogo, navigate: '/collection/bogo' },
        { name: "Crazy Deals 🔥", src: CrazyDeals, navigate: '/collection/crazyDeals' },
        { name: "Shop All", src: ShopAll, navigate: '/collection/shopAll' },
        { name: "Bestsellers", src: BestSellers, navigate: '/collection/bestSellers' },
        { name: "Perfumes", src: Perfumes, banner: newLaunchBanner, rightArrow: RightArrow, navigate: '/collection/perfumes' },
        { name: "Bath & Body", src: BathBody, rightArrow: RightArrow, navigate: '/collection/bathBody' },
        { name: "Makeup", src: Makeup, navigate: '/collection/makeup' },
        { name: "SkinCare", src: SkinCare, rightArrow: RightArrow, navigate: '/collection/skincare' },
        { name: "Special Giftings", src: SpecialGift, rightArrow: RightArrow, navigate: '/collection/giftSets' },
        { name: "Fragrance Finder", src: Fragrance, navigate: '/collection/perfumes' },
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
                            <div className="menuOptionContent">
                                <div className="left">
                                    <div className="menuOptLogo" key={index}>
                                        <img src={opt.src} alt="SidebarIcons" />
                                    </div>
                                    <div className="menuOptName">
                                        {opt.name}
                                    </div>
                                </div>
                                <div className="right">
                                    {opt.rightArrow ? (<div>
                                        <img src={opt.rightArrow} alt="Right Arrow" />
                                    </div>) : ""}
                                </div>
                            </div>
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