import React from 'react'
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

function SideBarContent() {
    const navigate = useNavigate()

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
        { name: "Crazy Deals 🔥", src: CrazyDeals },
        { name: "Shop All", src: ShopAll },
        { name: "Bestsellers", src: BestSellers },
        { name: "Perfumes", src: Perfumes, rightArrow: RightArrow },
        { name: "Bath & Body", src: BathBody, banner: newLaunchBanner, rightArrow: RightArrow },
        { name: "Makeup", src: Makeup },
        { name: "SkinCare", src: SkinCare, rightArrow: RightArrow },
        { name: "Special Giftings", src: SpecialGift, rightArrow: RightArrow },
        { name: "Fragrance Finder", src: Fragrance },
    ]

    return (
        <div className='sideBarContent'>
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
            <div className="menuOptions">
                {sideBarOptions().map((opt, index) => (
                    <div className="menuOption">
                        <div className="menuBanner" onClick={goToNewProducts}>
                            {opt.banner ? (<div>
                                <img src={opt.banner} alt="SidebarBanner" />
                            </div>) : ""}
                        </div>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBarContent


//     < div className = "bottomText" >
//         <p><span className='black-bold-text'>Made with</span> ❤️ <span className='black-bold-text'>By</span> <span className="yellowText">Rohit</span></p>
// </div >