import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Products from '../JSON/Products';
import Layout from '../Layout/Layout';
import "../css/productPage.css"
import NotFound from "../assets/icons/404.jpg"

function Product() {
    const { id } = useParams()
    const product = Products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/collection/shopAll')
    }

    if (!product) {
        return <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                </div>
                <div className="ProductPageMain">
                    <div className="pageSectionMain">
                        <img src={NotFound} alt="" />
                        <span className='pageNotFoundText'>Product Not Found !</span>
                        <button className='sortBtn' onClick={handleNavigate}>Return To Shop</button>
                    </div>
                </div>
            </div>
        </Layout>
    }
    return (
        <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                    <div className="productPageMarqueeText">
                        <div className="innerMarqueeText">
                            <span>1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>ANY 3 PERFUMES @ ₹1298</span>
                            <span>🎁 FREE GIFT ON PREPAID ORDERS</span>
                            <span>1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>ANY 3 PERFUMES @ ₹1298</span>
                            <span>🎁 FREE GIFT ON PREPAID ORDERS</span>

                            <span>1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>ANY 3 PERFUMES @ ₹1298</span>
                            <span>🎁 FREE GIFT ON PREPAID ORDERS</span>
                            <span>1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>ANY 3 PERFUMES @ ₹1298</span>
                            <span>🎁 FREE GIFT ON PREPAID ORDERS</span>
                        </div>
                    </div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="singleProductPageMain">
                        <div className="singleProductPageMainTopSide">
                            <div className="leftSideSectionProductPage">
                                LeftSide
                            </div>
                            <div className="rightSideSectionProductPage">
                                RightSide
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product