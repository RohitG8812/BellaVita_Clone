import React from 'react'
import Cosmetics from "../assets/Banner/HomePageBanner/cosmetics.webp"
import SkinCare from "../assets/Banner/HomePageBanner/skinCare.webp"
import LuxuryPerfumes from "../assets/Banner/HomePageBanner/luxuryPerfumes.webp"
import BathBody from "../assets/Banner/HomePageBanner/bathBody.webp"
import BodyDeos from "../assets/Banner/HomePageBanner/bodyDeos.webp"
import GiftSets from "../assets/Banner/HomePageBanner/giftSets.webp"
import { Link } from 'react-router-dom'

function LuxuryCategoryHomePage() {
    const LuxuryCategories = [
        { src: Cosmetics, to: '/collection/makeup' },
        { src: SkinCare, to: '/collection/skincare' },
        { src: LuxuryPerfumes, to: '/collection/perfumes' },
        { src: BathBody, to: '/collection/bathBody' },
        { src: BodyDeos, to: '/collection/perfumes' },
        { src: GiftSets, to: '/collection/giftSets' }
    ]
    return (
        <div className='mainDiv'>
            <div className="SectionHeading">
                Luxury Categories
            </div>
            <div className="luxuryCategoryMap">
                {LuxuryCategories.map((items, index) => {
                    return <div className="catCard">
                        <div className="cateImages" key={index}>
                            <Link to={items.to}><img src={items.src} alt="" className='luxuryCatImage' /></Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LuxuryCategoryHomePage