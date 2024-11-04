import React, { useContext, useEffect, useState } from 'react'
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
import Loader from '../pages/Loader';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import rightArrow from "../assets/icons/rightArrow.svg"
import downArrow from "../assets/icons/down.svg"
import Fb from "../assets/icons/fb.svg"
import Twitter from "../assets/icons/twitter.svg"
import Pinterest from "../assets/icons/pinterest.svg"
import Insta from "../assets/icons/insta.svg"
import YT from "../assets/icons/yt.svg"

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

const Logos = [Fb, Twitter, Pinterest, Insta, YT]
const BestSellers = ["Ultimate Perfume Box", "Perfume Gift Set For Men", "Perfume Gift Set For Women", "Under Eye Cream for Dark Circles", "Perfume For Men", "Perfume For Women", "Unisex Perfume"]
const Information = ["Blogs", "Newsroom", "Terms & Conditions", "Privacy Policy", "Refund and Return", "Shipping Policy", "Bulk Order - GST Invoice"]
const Support = ["About Us", "Contact Us", "Order Tracking", "All Products", "FAQ", "Sitemap"]
const Contact = ["Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India", "+91-9311732440", "shop@bellavitaorganic.com", "Timing: 10:00 AM to 7:00 PM, Monday to Sunday"]

function Product() {
    const { id } = useParams()
    const { addToCart } = useContext(CartContext)
    const product = Products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [loader, setLoader] = useState(true)
    const [productImgModalOpen, setProductImgModalOpen] = useState(false)
    const [openDescriptions, setOpenDescriptions] = useState(false)
    const [btnLoader, setBtnLoader] = useState(null)

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const handleAddProductToCart = (product) => {
        try {
            setBtnLoader(product.id);
            setTimeout(() => {
                addToCart(product)
                toast.success("Product added to Cart")
                setBtnLoader(null)
            }, 1000)
        } catch (error) {
            setBtnLoader(null)
            toast.error(error.message)
        }
    }

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
                            <span>⚡ 1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>💝 ANY 3 PERFUMES @ ₹1298</span>
                            <span>💥 FREE GIFT ON PREPAID ORDERS</span>
                            <span>🎀 1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>💝 ANY 3 PERFUMES @ ₹1298</span>
                            <span>💥 FREE GIFT ON PREPAID ORDERS</span>

                            <span>🎀 1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>💝 ANY 3 PERFUMES @ ₹1298</span>
                            <span>💥 FREE GIFT ON PREPAID ORDERS</span>
                            <span>🎀 1 PERFUME + 5 SKINCARE PRODUCTS @ ₹999</span>
                            <span>💝 ANY 3 PERFUMES @ ₹1298</span>
                            <span>💥 FREE GIFT ON PREPAID ORDERS</span>
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
                                <div className="ppAddToCartBtn filterBtn" onClick={() => handleAddProductToCart(product)}>
                                    {btnLoader === product.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}
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
                        <div className="singleProductPageMainBottomSide">
                            <div className="ppAccordionMenu">
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(1)} >
                                        <p>key benefits</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 1 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 1 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside'>
                                            {product.keyBenefits.split(" - ").map((benefit, index) => (
                                                <span key={index}>
                                                    {index === 0 ? benefit : `- ${benefit}`}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(2)}>
                                        <p>How to use</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 2 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 2 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside'>
                                            {product.howToUse.split(" - ").map((benefit, index) => (
                                                <span key={index}>
                                                    {index === 0 ? benefit : `${benefit}`}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(3)}>
                                        <p>Perfume Notes</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 3 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 3 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside'>
                                            {product.note}
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(4)}>
                                        <p>Other Information</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 4 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 4 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside ppAccordionOtherInfo'>
                                            <span>
                                                <span style={{ color: "#000", fontWeight: "550" }}>Marketed By:</span> IDAM Natural Wellness Pvt. Ltd. 417, First Floor, Udyog Vihar Phase 3, Sector 20, Gurugram, 122008 Haryana, India
                                            </span>
                                            <span>
                                                <span style={{ color: "#000", fontWeight: "550" }}>Manufactured By:</span> Stella Industries Limited Old Khandsa Road, Sector-37, HSIIDC, Gurugram-122001, Haryana, India
                                            </span>
                                            <span style={{ color: "#000", fontWeight: "550" }}>
                                                Country of Origin: India
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(5)}>
                                        <p>FAQs</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 5 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 5 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside ppAccordionOtherInfo'>
                                            <span>
                                                How long does a perfume usually last?
                                                Our perfumes typically last up to 8 hours, and are made especially for the Indian climate.
                                            </span>

                                            <span>
                                                Do our perfumes contain Alcohol?
                                                NO is the straightforward response to that.Alcohol used in perfumes is not the same alcohol used for consumption directly.The alcohol used in perfumes is known as perfumers alcohol. It cannot be bought in liquor stores and is not meant for drinking.So it is okay for us to apply! Use freely and carry your fragrance.
                                            </span>

                                            <span>
                                                Are Perfumes made in India?
                                                Yes,Our Perfumes are made in India .We imported perfume oils from france and bottled in India
                                            </span>

                                            <span>
                                                How should I keep/store my Perfume?
                                                Yes, it does matter where you keep your perfume. It is advisable to keep perfume out of direct sunlight and extremely hot or cold temperatures. This increases the shelf life and maintains the quality of the perfume.
                                            </span>
                                        </p>
                                    </div>
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