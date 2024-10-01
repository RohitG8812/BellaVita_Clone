import React from 'react'
import Cosmetics from "../assets/Banner/HomePageBanner/cosmetics.webp"
import SkinCare from "../assets/Banner/HomePageBanner/skinCare.webp"
import LuxuryPerfumes from "../assets/Banner/HomePageBanner/luxuryPerfumes.webp"
import BathBody from "../assets/Banner/HomePageBanner/bathBody.webp"
import BodyDeos from "../assets/Banner/HomePageBanner/bodyDeos.webp"
import GiftSets from "../assets/Banner/HomePageBanner/giftSets.webp"
import { Link } from 'react-router-dom'

function LuxuryCategories() {
    const LuxuryCategories = [
        { src: Cosmetics, to: '/collection/makeup', name: "Cosmetics" },
        { src: SkinCare, to: '/collection/skincare', name: "Skin Care" },
        { src: LuxuryPerfumes, to: '/collection/perfumes', name: "Luxury Perfumes" },
        { src: BathBody, to: '/collection/bathBody', name: "Bath & Body" },
        { src: BodyDeos, to: '/collection/perfumes', name: "Body Deos" },
        { src: GiftSets, to: '/collection/giftSets', name: "Gift Sets" }
    ]
    return (
        <div className='mainDiv'>
            <div className="SectionHeading">
                Luxury Categories
            </div>
            <div className="luxuryCategoryMap">
                {LuxuryCategories.map((items, index) => {
                    return <div className="catMain" key={index}>
                        <div className="catCard">
                            <div className="cateImages" key={index}>
                                <Link to={items.to}><img src={items.src} alt="" className='luxuryCatImage' /></Link>
                            </div>
                        </div>
                        <div className="cateImageName">
                            <span className='cateNameHover'>{items.name}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LuxuryCategories