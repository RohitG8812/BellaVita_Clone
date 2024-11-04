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
import Gender from "../assets/icons/gender.svg"
import Cleanses from "../assets/icons/cleanses.svg"
import All_skin from "../assets/icons/all_skin.svg"
import Fragrant from "../assets/icons/fragrant.svg"
import DiscountIcon from "../assets/icons/discount.svg"
import OfferIcon from "../assets/icons/offer.svg"
import FragrenceFinderNew from '../assets/Banner/FragrenceFinderMini.jpeg'
import LipStickFinderNew from '../assets/Banner/PerfumeBoxMini.jpeg'

const Benefits = [
    { name: "All Skin Types", img: All_skin },
    { name: "Cleanses & Nourishes", img: Cleanses },
    { name: "Gender Neutral", img: Gender },
    { name: "Fragrant", img: Fragrant },
]

const descriptionTextStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
}

const Offers = [
    { name: "6 FOR ₹999", code: "Self Love Kit", desc: "Any 1 Perfume + 6 Bestsellers for ₹999 only." },
    { name: "3 FOR ₹1298", code: "Ultimate Perfume Box", desc: "Get any 3 Perfumes for just ₹1298 only." },
    { name: "HDFC5", code: "HDFC5", desc: "Get 5% OFF on HDFC Credit and Debit cards" },
]

function Product() {
    const { id } = useParams()
    const product = Products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [loader, setLoader] = useState(true)
    const [productImgModalOpen, setProductImgModalOpen] = useState(false)
    const [openDescriptions, setOpenDescriptions] = useState(false)

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
                                    <p className='ppPageName'>{product.name}</p>
                                    <p className='ppPageVariant'>{product.variant}</p>
                                    <p className='ppPageVariant' style={{ marginBottom: "10px" }}>
                                        Category: <span style={{ color: "green" }}>{product.category}</span>
                                    </p>
                                </div>
                                <div className='productRatingAndShare'>
                                    <div className="ProductRatingReviews">
                                        <div className='productRating productRatingProductPage'>
                                            <img src={RatingLogo} alt="Rating" />
                                            <p>{product.rating}</p>
                                        </div>
                                        <span className='middleArrow'>|</span>
                                        <div className='productReviews productReviewsProductPage'>
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
                                        <div className="cartQuantityBtn cartQuantityBtnProductPage">
                                            <img src={MinusBtn} alt="" />
                                            <span className='itemQuantity'>{1}</span>
                                            <img src={PlusBtn} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ppAddToCartBtn filterBtn">
                                    Add To Cart
                                </div>
                                <div className="ppBenefitsSection">
                                    {Benefits.map((benefit, index) => {
                                        return <div className='benefitSingle'>
                                            <img src={benefit.img} alt="" />
                                            <span>{benefit.name}</span>
                                        </div>
                                    })}
                                </div>
                                <div className="ppDescriptionAndReadMoreBtn">
                                    <div className='ppDescription' style={openDescriptions ? null : descriptionTextStyle}>
                                        <p className='productPageDescriptionText'>{product.description}</p>
                                        <p className='ppDescriptionNotes' ><h5 className='notesHeading'>Notes — </h5> {product.note}</p>
                                        <p className='expanded'>.</p>
                                    </div>
                                    <button onClick={() => setOpenDescriptions(!openDescriptions)} className='readMoreReadLessBtn sortBtn'>{openDescriptions ? "Read Less" : "Read More"}</button>
                                </div>
                                <div>
                                    <div className='ppExclusiveOfferHeading'>
                                        <img src={OfferIcon} alt="" />
                                        <span>Exclusive Offers</span>
                                    </div>
                                    <div className="ppExclusiveOffers">
                                        {Offers.map((offer, index) => {
                                            return <div className='offerSinglePP'>
                                                <div className='offerSingleIconName'>
                                                    <img src={DiscountIcon} alt="" />
                                                    <span>{offer.name}</span>
                                                </div>
                                                <span className='offerSingleDesc'>{offer.desc}</span>
                                                <span className='offerSingleCode'>{offer.code}</span>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="ppBannerSection">
                                    <img src={FragrenceFinderNew} alt="Banner" />
                                    <img src={LipStickFinderNew} alt="Banner" />
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