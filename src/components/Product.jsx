import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Products from '../JSON/Products';
import Layout from '../Layout/Layout';
import "../css/productPage.css"
import NotFound from "../assets/icons/404.jpg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import RatingLogo from "../assets/icons/rating.svg"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import PlusSearch from "../assets/icons/plusSearch.svg"
import ShareIcon from "../assets/icons/share.svg"
import ProductImageModal from '../pages/ProductImageModal';
import PlusBtn from "../assets/icons/plusL.svg"
import MinusBtn from "../assets/icons/minus.svg"

function Product() {
    const { id } = useParams()
    const product = Products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [loader, setLoader] = useState(true)
    const [productImgModalOpen, setProductImgModalOpen] = useState(false)

    const closeModal = () => setProductImgModalOpen(false);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1500);
    }, [])

    const handleImgClick = (index) => {
        setSelectedImg(index)
    }

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
                                <div className="productPageLeftSideMainImg">
                                    {loader ?
                                        <div className='productPageSpinnerLoader'><img src={SpinnerLoader} alt="" /></div>
                                        :
                                        <div className='productMainImgBorder'>
                                            <img src={product.mainImg[selectedImg]} alt="" />
                                            <div className="card-badge-bottom">
                                                <span className="discountBadge">{product.discount} off</span>
                                            </div>
                                            <div className="productCardZoomBtn" onClick={() => setProductImgModalOpen(true)} >
                                                <img src={PlusSearch} alt="" />
                                            </div>
                                        </div>
                                    }
                                </div>
                                {productImgModalOpen && <ProductImageModal closeModal={closeModal} product={product} />}
                                <div className="productPageLeftSideImgMapping">
                                    {product.mainImg.map((img, index) => {
                                        return <div className={`imgMappingSingleImg ${index === selectedImg ? "selectedImgBorder" : ""}`}>
                                            <img src={img} alt="" onClick={() => handleImgClick(index)} />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="rightSideSectionProductPage">
                                <div className="rightSideProductName">
                                    <h2>{product.name}</h2>
                                    <p className='ppPageVariant'>{product.variant}</p>
                                    <p className='ppPageVariant' style={{ marginBottom: "10px" }}>
                                        Category: <span style={{ color: "green" }}>{product.category}</span>
                                    </p>
                                </div>
                                <div className='productRatingAndShare'>
                                    <div className="ProductRatingReviews">
                                        <div className='productRating'>
                                            <img src={RatingLogo} alt="Rating" />
                                            <p>{product.rating}</p>
                                        </div>
                                        <span className='middleArrow'>|</span>
                                        <div className='productReviews'>
                                            <img src={ReviewsLogo} alt="Reviews" />
                                            <p> {`(${product.numOfReviews})`}</p>
                                        </div>
                                    </div>
                                    <div className="productPageShareIcon">
                                        <img src={ShareIcon} alt="" />
                                    </div>
                                </div>
                                <div className="pricingAndQuantity">
                                    <div className="pricingSectionProductPage">
                                        <div className="priceAndDiscountSection">
                                            <span className='productPageDiscountPercentage'>-{product.discount}</span>
                                            <span className='productPagePriceSection'>{product.price}</span>
                                        </div>
                                        <div className="productPageMrpSection">
                                            MRP: <span style={{ textDecoration: "line-through" }}>{product.mrp}</span>
                                        </div>
                                        <div className="inclusiveOfAllTaxes productPageMrpSection">
                                            Inclusive of all taxes
                                        </div>
                                    </div>
                                    <div className="productPageQuantitySection">
                                        <div className="cartQuantityBtn">
                                            <img src={MinusBtn} alt="" />
                                            <span className='itemQuantity'>{1}</span>
                                            <img src={PlusBtn} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ppAddToCartBtn filterBtn">
                                    Add To Cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* } */}
            </div>
        </Layout>
    )
}

export default Product