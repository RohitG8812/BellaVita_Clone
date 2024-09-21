import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import FrontBanner from '../assets/Banner/front1.webp'
import FrontBanner2 from '../assets/Banner/front2.webp'
import FrontBanner3 from '../assets/Banner/front3.webp'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function Home() {
    const [currentBannerIdx, setCurrentBannerIdx] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const banners = [FrontBanner, FrontBanner2, FrontBanner3]

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
                    <Link ><img src={banners[currentBannerIdx]} alt="Banner" className={`BannerImage fade-in ${isSliding ? 'slide-in' : ""}`} /></Link>
                    <div className="btn">
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleBannerChange(index)}
                                className={`roundBtn ${index === currentBannerIdx ? 'active' : ""}`}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Home