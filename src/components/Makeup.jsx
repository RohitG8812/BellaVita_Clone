import React, { useContext, useEffect, useState } from 'react'
import "../css/productCard.css"
import { useNavigate } from 'react-router-dom'
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'
import ProductPage from '../pages/ProductPage';
import MakeupBanner from "../assets/Banner/productBanner/makeupBanner.webp"
import MakeupBannerMini from "../assets/Banner/productBanner/makeupBannerMini.webp"
import { RecentlyViewedContext } from '../context/RecentlyViewedContext'

function Makeup() {
    const [makeup] = useState(Products.filter(product => product.category === 'makeup'))
    const [smallBanner, setSmallBanner] = useState(false);
    const { addRecentlyViewed } = useContext(RecentlyViewedContext)


    const makeupCategoryFilter = [
        { value: "comboProducts", label: "Makeup Set" },
        { value: "lipstickSet", label: "Lipstick Set" },
        { value: "kajal+eyeliner", label: "Kajal + Eyeliner" },
        { value: "luxury", label: "Luxury" },
    ]

    const makeupProductType = [
        { value: "lipstick", label: "Lipstick" },
        { value: "makeupKit", label: "Makeup Kit" },
        { value: "eyeliner", label: "Eyeliner" },
    ]

    const navigate = useNavigate()
    const handleProductClick = (product) => {
        addRecentlyViewed(product)
        const formattedName = product.name.replace(/\s+/g, '-');
        navigate(`/collection/makeup/${product.id}/${formattedName}`)
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
                        <img src={smallBanner ? MakeupBannerMini : MakeupBanner} alt="Banner" />
                    </div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="hide">
                        <ProductPage
                            product={makeup}
                            heading={"Makeup"}
                            handleProductClick={handleProductClick}
                            productTypeFilter={makeupProductType}
                            categoryFilter={makeupCategoryFilter}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Makeup