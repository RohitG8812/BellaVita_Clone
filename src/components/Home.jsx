import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import FrontBanner from '../assets/Banner/front1.webp'
import FrontBanner2 from '../assets/Banner/front2.webp'
import FrontBanner3 from '../assets/Banner/front3.webp'
import FrontBannerSm from '../assets/Banner/front1mini.webp'
import FrontBanner2Sm from '../assets/Banner/front2mini.webp'
import FrontBanner3Sm from '../assets/Banner/front3mini.webp'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Perfumes from "../components/Perfumes"


function Home() {
    const [currentBannerIdx, setCurrentBannerIdx] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [smallSize, setSmallSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 751) {
                setSmallSize(true);
            } else {
                setSmallSize(false)
            }
        };

        handleResize(); // Check on initial render

        window.addEventListener('resize', handleResize); // Add resize event listener
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
        };
    }, []);

    console.log("Small Size:", smallSize);


    const banners = [FrontBanner, FrontBanner2, FrontBanner3]

    const bannersSm = [FrontBannerSm, FrontBanner2Sm, FrontBanner3Sm]

    const handleBannerChange = (index) => {
        setIsSliding(true);
        setTimeout(() => {
            setCurrentBannerIdx(index);
            setIsSliding(false);
        }, 0);
    };

    return (
        <Layout>
            <div className='homeMain'>
                <div className="topBanner">
                    <Link to="/collection/makeup"><img src={(smallSize ? bannersSm : banners)[currentBannerIdx]} alt="Banner" className={`BannerImage fade-in ${isSliding ? 'slide-in' : ""}`} /></Link>
                    <div className="btn">
                        {(smallSize ? bannersSm : banners).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleBannerChange(index)}
                                className={`roundBtn ${index === currentBannerIdx ? 'active' : ""}`}
                            >
                            </button>
                        ))}
                    </div>
                    <div className="make" style={{marginTop: "50px"}}>
                        <Perfumes />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Home