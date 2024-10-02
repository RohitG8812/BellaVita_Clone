import React from 'react'
import Cruelty from "../assets/icons/cruelty.svg"
import FragranceForward from "../assets/icons/fragranceForward.svg"
import AffordableLuxury from "../assets/icons/affordableLuxury.svg"
import GenderNeutral from "../assets/icons/genderNeutral.svg"
import { Link } from 'react-router-dom'

function WhyBellavita() {
    const suggestions = [
        { img: Cruelty, name: "CRUELTY FREE", description: "Kindness in every bottle: Our commitment to cruelty-free Products." },
        { img: FragranceForward, name: "FRAGRANCE FORWARD", description: "Luxurious & imported perfume oils in every product" },
        { img: AffordableLuxury, name: "AFFORDABLE LUXURY", description: "Offering Premium Quality and Elegance at a Reasonable Price" },
        { img: GenderNeutral, name: "GENDER NEUTRAL", description: "Elevate your self-care routine with bath, body and personal care for all" },
    ]
    return (
        <div className='mainDiv'>
            <div className="SectionHeading">
                WHY BELLAVITA?
            </div>
            <div className="whyBellaVitaSuggestionMap">
                {suggestions.map((suggestion, index) => (
                    <div className="wbMain" key={index}>
                        <div className="cdImgBanner wbImgIcon">
                            <div className="cdBannerImgMain">
                                <img src={suggestion.img} alt="" className='wbimage' />
                            </div>
                        </div>
                        <div className="cdBannerName wbSuggName">
                            <span>{suggestion.name}</span>
                        </div>
                        <div className="wBDescription">
                            <span>{suggestion.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyBellavita