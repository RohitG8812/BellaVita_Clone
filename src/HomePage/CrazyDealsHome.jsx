import React from 'react'
import SelfLoveKit from "../assets/Banner/HomePageBanner/crazyDeals1.webp"
import BeautyMustHave from "../assets/Banner/HomePageBanner/crazyDeals2.webp"
import BadeMiya from "../assets/Banner/HomePageBanner/crazyDeals3.webp"
import { Link } from 'react-router-dom'

function CrazyDealsHome() {
    const Banners = [
        { img: SelfLoveKit, name: "SELF LOVE KIT" },
        { img: BeautyMustHave, name: "BEAUTY MUST HAVES" },
        { img: BadeMiya, name: "BADE MIYA CHHOTE MIYA" },
    ]

    return (
        <div className='mainDiv'>
            <div className="crazyDealsSectionMain">
                <div className="SectionHeading">
                    CRAZY DEALS
                </div>
                <div className="crazyDealsBannerMap">
                    {Banners.map((banner, index) => (
                        <Link to="/collection/crazyDeals" key={index}>
                            <div key={index} className={`cdBannerMain ${index === 2 ? "cdFullWidthBanner" : ""}`}>
                                <div className="cdImgBanner">
                                    <div className="cdBannerImgMain">
                                        <img src={banner.img} alt="" className='cdBannerImg' />
                                    </div>
                                </div>
                                <div className="cdBannerName">
                                    <span className='cateNameHover'>{banner.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CrazyDealsHome