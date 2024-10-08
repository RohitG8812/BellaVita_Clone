import React, { useEffect, useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
import "../css/productCard.css"
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"
import ProductPage from '../pages/ProductPage';

const ShopAllCategoryFilter = [
    { value: "perfumes", label: "Perfumes" },
    { value: "bathBody", label: "Bath & Body" },
    { value: "makeup", label: "Makeup" },
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
                        <ProductPage product={product} heading={"Shop All Products"} handleProductClick={handleProductClick} categoryFilter={ShopAllCategoryFilter} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ShopAll