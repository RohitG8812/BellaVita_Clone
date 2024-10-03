import React, { useEffect, useRef } from 'react'
import Bottom1 from "../assets/Banner/Bottom/Bottom1.webp"
import Bottom2 from "../assets/Banner/Bottom/Bottom2.webp"
import Bottom3 from "../assets/Banner/Bottom/Bottom3.webp"
import Bottom4 from "../assets/Banner/Bottom/Bottom4.webp"
import Bottom5 from "../assets/Banner/Bottom/Bottom5.webp"
import IDiva from "../assets/Banner/Bottom/iDiva.webp"
import PinkVilla from "../assets/Banner/Bottom/pinkVilla.avif"
import BWBusiness from "../assets/Banner/Bottom/bwBusiness.avif"
import HT from "../assets/Banner/Bottom/ht.avif"
import Elle from "../assets/Banner/Bottom/elle.webp"
import ANI from "../assets/Banner/Bottom/ani.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function ImageMapping() {
    const Top = [Bottom1, Bottom2, Bottom3, Bottom4, Bottom5]

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            // Add event listener to pause the animation on hover
            slider.addEventListener("mouseover", () => {
                slider.style.animationPlayState = 'paused';
            });

            // Resume the animation on mouse leave
            slider.addEventListener("mouseleave", () => {
                slider.style.animationPlayState = 'running';
            });
        }

        return () => {
            // Cleanup event listeners
            if (slider) {
                slider.removeEventListener("mouseover", () => { });
                slider.removeEventListener("mouseleave", () => { });
            }
        };
    }, []);

    const Bottom = [IDiva, PinkVilla, BWBusiness, HT, Elle, ANI]

    return (
        <div className='imageMapping'>
            <div className="topImageMapping">
                {Top.map((topImg) => {
                    return <div className="topSingleMapImg">
                        <img src={topImg} alt="Img" />
                    </div>
                })}
            </div>
            <div className="bottomMapSliderMain">
                <div className="bottomMapSlider" ref={sliderRef}>
                    {Bottom.concat(Bottom).map((bottomImg, index) => ( // Double the array for smooth animation
                        <div className="bottomSingleMapImg" key={index}>
                            <img src={bottomImg} alt="Bottom Image" className={`${index === 2 ? "mmf" : ""}  ${index === 8 ? "mmf" : ""}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageMapping