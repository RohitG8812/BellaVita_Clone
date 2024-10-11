import React, { useEffect, useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
import "../css/productCard.css"
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"
import ProductPage from '../pages/ProductPage';

const ShopAllCategoryFilter = [
    { value: "man", label: "Man" },
    { value: "women", label: "Women" },
    { value: "luxury", label: "Luxury" },
    { value: "comboProducts", label: "Gift Sets" },
    { value: "oud", label: "OUD" },
    { value: "forAll", label: "For All" },
]

const shopAllProductType = [
    { value: "Parfum", label: "Parfum" },
    { value: "Eau De Parfum", label: "Eau De Parfum" },
    { value: "ShowerGel", label: "Shower Gel" },
    { value: "BodyWash", label: "Body Wash" },
    { value: "BodyLotion", label: "Body Lotion" },
]

function ShopAll() {
    const [product, setProduct] = useState([]);
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

    useEffect(() => {
        const sortedProducts = [...Products].sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
        setProduct(sortedProducts);
    }, []);
    const navigate = useNavigate()

    const handleProductClick = (id) => {
        navigate(`/collection/shopAll/${id}`)
    }
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
                        <ProductPage
                            product={product}
                            heading={"Shop All Products"}
                            handleProductClick={handleProductClick}
                            categoryFilter={ShopAllCategoryFilter}
                            productTypeFilter={shopAllProductType}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ShopAll