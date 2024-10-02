import React from 'react'
import Rose from "../assets/Banner/HomePageBanner/notes/rose.webp"
import Citrusy from "../assets/Banner/HomePageBanner/notes/citrusy.webp"
import WHiteFloral from "../assets/Banner/HomePageBanner/notes/whiteFloral.webp"
import Aquatic from "../assets/Banner/HomePageBanner/notes/aquatic.webp"
import Musk from "../assets/Banner/HomePageBanner/notes/musk.webp"
import Spicy from "../assets/Banner/HomePageBanner/notes/spicy.webp"
import Woody from "../assets/Banner/HomePageBanner/notes/woody.webp"

function ReviewSlider() {
    const Notes = [
        { img: Rose, name: "Rose", to: '/collection/rose', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: Citrusy, name: "Citrusy", to: '/collection/citrusy', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: WHiteFloral, name: "White Floral", to: '/collection/white-floral', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: Aquatic, name: "Aquatic", to: '/collection/aquatic', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: Musk, name: "Musk", to: '/collection/musk', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: Spicy, name: "Spicy", to: '/collection/spicy', desc: "Amazing products! The quality and fragrance are unmatched." },
        { img: Woody, name: "Woody", to: '/collection/woody', desc: "Amazing products! The quality and fragrance are unmatched." },
    ]
    return (
        <div className='mainDiv'>
            <div className="reviewSlider">
                <div className="SectionHeading">
                    WHAT OUR CUSTOMERS HAVE TO SAY
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider