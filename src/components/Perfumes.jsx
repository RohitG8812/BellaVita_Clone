import React, { useState, useEffect } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
import "../css/productCard.css"
import BogoBanner from "../assets/Banner/productBanner/bogoBanner.webp"
import BogoBannerMini from "../assets/Banner/productBanner/bogoBannerMini.webp"
import ProductPage from '../pages/ProductPage';


const perfumesCategoryFilter = [
    { value: "man", label: "Man" },
    { value: "women", label: "Women" },
    { value: "luxury", label: "Luxury" },
    { value: "perfumeCombo", label: "Perfume Combo" },
    { value: "oud", label: "OUD" },
    { value: "forAll", label: "For All" },
]

const perfumesTypeFilter = [
    { value: "Eau De Parfum", label: "Eau De Parfum" },
    { value: "Eau De Parfum For Women", label: "Eau De Parfum Women" },
    { value: "Eau De Parfum For All", label: "Eau De Parfum For All" },
    { value: "Attar for All", label: "Attar for All" },
    { value: "Parfum", label: "Parfum" },
]


function Perfumes() {
    const [perfume] = useState(Products.filter(product => product.category === 'perfumes'));
    const [smallBanner, setSmallBanner] = useState(false);

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
    console.log(perfume)
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/collection/perfumes/${id}`)
    }
    return (
        <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                    <div className="shopAllBanner">
                        <img src={smallBanner ? BogoBannerMini : BogoBanner} alt="Banner" />
                    </div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="hide">
                        <ProductPage
                            product={perfume}
                            heading={"Perfumes"}
                            handleProductClick={handleProductClick}
                            categoryFilter={perfumesCategoryFilter}
                            productTypeFilter={perfumesTypeFilter}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Perfumes