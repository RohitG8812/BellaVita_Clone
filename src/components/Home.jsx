import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import FrontBanner from '../assets/Banner/fNew.webp'
import FrontBanner2 from '../assets/Banner/fNew3.webp'
import FrontBanner3 from '../assets/Banner/fNew2.webp'
import FrontBanner4 from '../assets/Banner/fNew4.webp'
import FrontBannerSm from '../assets/Banner/fNewMini.webp'
import FrontBanner2Sm from '../assets/Banner/fNewMini3.webp'
import FrontBanner3Sm from '../assets/Banner/fNewMini2.webp'
import FrontBanner4Sm from '../assets/Banner/fNewMini4.webp'
import BottomBanner from '../assets/Banner/bottomBanner.webp'
import BottomBannerMini from '../assets/Banner/bottomBannerMini.webp'
import { Link, Outlet } from 'react-router-dom'
import Perfumes from "../components/Perfumes"
import BestSellerNewArrivals from './BestSellerNewArrivals'


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
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const banners = [FrontBanner, FrontBanner2, FrontBanner3, FrontBanner4]

    const bannersSm = [FrontBannerSm, FrontBanner2Sm, FrontBanner3Sm, FrontBanner4Sm]

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
                    <Link to="/collection/bogo"><img src={(smallSize ? bannersSm : banners)[currentBannerIdx]} alt="Banner" className={`BannerImage fade-in ${isSliding ? 'slide-in' : ""}`} /></Link>
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
                </div>
                <div className="buy1get1Banner">
                    <Link to="/collection/bogo"><img src={smallSize ? BottomBannerMini : BottomBanner} alt="" /></Link>
                </div>
                <div className="full-width">
                    <BestSellerNewArrivals />
                </div>
            </div>
        </Layout >
    )
}

export default Home