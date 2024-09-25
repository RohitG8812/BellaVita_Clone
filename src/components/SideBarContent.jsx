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

    const sideBarOptions = () => [
        { name: "Crazy Deals", src: CrazyDeals}
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
        </div>
    )
}

export default SideBarContent