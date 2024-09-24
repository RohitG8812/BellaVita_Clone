import React, { useRef, useState, useEffect } from 'react'
import LeftArrow from "../assets/icons/left.svg"
import RightArrow from "../assets/icons/right.svg"

function TopSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [
        "🎁FREE Gift on all PREPAID Orders", "Get any 3 100ml PERFUMES for ₹1298", "Get any 2 100ml PERFUMES for ₹949",
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Switch content every 1 second

        return () => clearInterval(intervalId); 
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    return (
        <div className="mainSlider">
            <div className='sliderContainer'>
                <button className='prevBtn' onClick={prevSlide}><img src={LeftArrow} alt="" className='arrow' /></button>

                <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => {
                        return <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            {slide}
                        </div>
                    })}
                </div>

                <button className='nextBtn' onClick={nextSlide}><img src={RightArrow} alt="" className='arrow'/></button>

            </div>
        </div>
    )
}

export default TopSlider