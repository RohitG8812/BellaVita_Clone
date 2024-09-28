import React, { useEffect, useState } from 'react'
import "../css/productCard.css"
import { useNavigate } from 'react-router-dom'
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'
import ProductPage from '../pages/ProductPage';
import ShopAllBanner from "../assets/Banner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/ShopAllBannerMini.webp"

function Makeup() {
    const [makeup] = useState(Products.filter(product => product.category === 'makeup'))
    const [smallBanner, setSmallBanner] = useState(false);
    console.log(makeup)
    const navigate = useNavigate()
    const handleProductClick = (id) => {
        navigate(`/collection/makeup/${id}`)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 751) {
                setSmallBanner(true);
            } else {
                setSmallBanner(false)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                    <div className="shopAllBanner">
                        <img src={smallBanner ? ShopAllBannerMini : ShopAllBanner} alt="Banner" />
                    </div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="hide">
                        <ProductPage product={makeup} heading={"Makeup"} handleProductClick={handleProductClick}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Makeup