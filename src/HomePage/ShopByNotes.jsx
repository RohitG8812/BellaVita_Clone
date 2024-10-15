import React from 'react'
import Rose from "../assets/Banner/HomePageBanner/notes/rose.webp"
import Citrusy from "../assets/Banner/HomePageBanner/notes/citrusy.webp"
import WHiteFloral from "../assets/Banner/HomePageBanner/notes/whiteFloral.webp"
import Aquatic from "../assets/Banner/HomePageBanner/notes/aquatic.webp"
import Musk from "../assets/Banner/HomePageBanner/notes/musk.webp"
import Spicy from "../assets/Banner/HomePageBanner/notes/spicy.webp"
import Woody from "../assets/Banner/HomePageBanner/notes/woody.webp"
import { Link } from 'react-router-dom'

function ShopByNotes() {
    const Notes = [
        { img: Rose, name: "Rose", to: '/collection/rose' },
        { img: Citrusy, name: "Citrusy", to: '/collection/citrusy' },
        { img: WHiteFloral, name: "White Floral", to: '/collection/white-floral' },
        { img: Aquatic, name: "Aquatic", to: '/collection/aquatic' },
        { img: Musk, name: "Musk", to: '/collection/musk' },
        { img: Spicy, name: "Spicy", to: '/collection/spicy' },
        { img: Woody, name: "Woody", to: '/collection/woody' },
    ]
    return (
        <div className='mainDiv'>
            <div className="shopByNotesMain">
                <div className="SectionHeading">
                    SHOP BY NOTES
                </div>
                <div className="shopByNotesBannerMap">
                    {Notes.map((banner, index) => (
                        <Link to={`${banner.to}`} key={index}>
                            <div className="sbnBannerMain" key={index}>
                                <div className="cdImgBanner">
                                    <div className="cdBannerImgMain">
                                        <img src={banner.img} alt="" className='cdBannerImg' />
                                    </div>
                                </div>
                                <div className="cdBannerName">
                                    <span>{banner.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopByNotes