import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import "../css/home.css"
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
import FirstBanner from "../assets/Banner/HomePageBanner/homeBanner1.webp"
import FirstBannerMini from "../assets/Banner/HomePageBanner/homeBanner1Mini.webp"
import BestSellerNewArrival from '../HomePage/BestSellerNewArrival'
import LuxuryCategories from '../HomePage/LuxuryCategories'
import LuxePerfumes from '../HomePage/LuxePerfumes'
import CrazyDealsHome from '../HomePage/CrazyDealsHome'
import ShopByNotes from '../HomePage/ShopByNotes'
import WhyBellavita from '../HomePage/WhyBellavita'
import AppDownloadBanner from "../assets/Banner/HomePageBanner/appDownload.webp"
import AppDownloadBannerMini from "../assets/Banner/HomePageBanner/appDownloadMini.webp"
import BellaCashBanner from "../assets/Banner/HomePageBanner/bellaCash.webp"
import BellaCashBannerMini from "../assets/Banner/HomePageBanner/bellaCashMini.webp"
import ReviewSlider from '../HomePage/ReviewSlider'
import ImageMapping from '../HomePage/ImageMapping'
import FragrenceFinderNew from '../assets/Banner/HomePageBanner/fragrenceFinderNew.webp'
import LipStickFinderNew from '../assets/Banner/HomePageBanner/lipstickFinderNew.webp'
import toast from 'react-hot-toast'
import { CartContext } from '../context/CartContext'


function Home() {
    const { addToCart } = useContext(CartContext);
    const [currentBannerIdx, setCurrentBannerIdx] = useState(1);
    const [isSliding, setIsSliding] = useState(false);
    const [smallSize, setSmallSize] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

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

    const handleAddToCart = (product) => {
        try {
            setBtnLoader(product.id);
            addToCart(product); // add the product using the context
            setTimeout(() => {
                setBtnLoader(null);
                toast.success('Product added to Cart');
            }, 1000);
        } catch (error) {
            toast.error(error.message);
            setBtnLoader(null);
        }
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
                    <BestSellerNewArrival handleAddToCart={handleAddToCart} btnLoader={btnLoader} />
                    <div className="firstBanner">
                        <Link to="/collection/bogo"> <img src={smallSize ? FirstBannerMini : FirstBanner} alt="" /></Link>
                    </div>
                    <LuxuryCategories />
                    <LuxePerfumes handleAddToCart={handleAddToCart} btnLoader={btnLoader} />
                    <CrazyDealsHome />
                    <ShopByNotes />
                    <div className="secondBanner firstBanner">
                        <div >
                            <Link to='/collection/perfumes'><img src={FragrenceFinderNew} alt="" /></Link>
                        </div>
                        <div>
                            <Link to='/collection/makeup'><img src={LipStickFinderNew} alt="" /></Link>
                        </div>
                    </div>
                    <WhyBellavita />
                    <div className="thirdBanner firstBanner">
                        <Link to='https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps&hl=en'>
                            <img src={smallSize ? AppDownloadBannerMini : AppDownloadBanner} alt="AppDownloadBanner" />
                        </Link>
                    </div>
                    <div className="bellaCashBanner firstBanner">
                        <Link to='/pages/bellaCash'>
                            <img src={smallSize ? BellaCashBannerMini : BellaCashBanner} alt="AppDownloadBanner" />
                        </Link>
                    </div>
                    <ReviewSlider />
                    <ImageMapping />
                </div>
            </div>
        </Layout >
    )
}

export default Home