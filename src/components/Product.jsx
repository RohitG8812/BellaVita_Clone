import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Products from '../JSON/Products';
import Layout from '../Layout/Layout';
import "../css/productPage.css"
import NotFound from "../assets/icons/404.jpg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import RatingLogo from "../assets/icons/star.svg"
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
import downArrow from "../assets/icons/down.svg"
import Ambergris from "../assets/Notes/Perfumes/ambergis.avif"
import Jasmine from "../assets/Notes/Perfumes/jasmine.avif"
import Lavender from "../assets/Notes/Perfumes/lavender.avif"
import Lemon from "../assets/Notes/Perfumes/lemon.avif"
import Freesia from "../assets/Notes/BathBody/freesia.avif"
import PinkPepper from "../assets/Notes/BathBody/pinkPepper.avif"
import Argon from "../assets/Notes/Makeup/argon.avif"
import Bergamot from "../assets/Notes/Makeup/bergamot.avif"
import Moss from "../assets/Notes/Makeup/moss.webp"
import Sage from "../assets/Notes/Makeup/sage.avif"
import Caramel from "../assets/Notes/GiftSets/caramel.avif"
import Musk from "../assets/Notes/GiftSets/musk.avif"
import OUD from "../assets/Notes/GiftSets/oud.avif"
import Vetiver from "../assets/Notes/GiftSets/vetiver.avif"
import FirstPurchaseImg from "../assets/Banner/first.webp"
import FirstPurchaseImgMini from "../assets/Banner/firstMini.webp"
import BestPairedProducts from '../JSON/BestPairedProducts';
import Star from "../assets/icons/star.svg"
import PairedProducts from '../pages/PairedProducts';
import Reviews from '../JSON/Reviews';


const PerfumesNotes = [
    { name: "AMBERGRIS", img: Ambergris, desc: "It has the ability to enhance and fixes the fragrance. It adds a warm and complex character to the perfume, contributing to the longevity and depth." },
    { name: "JASMINE", img: Jasmine, desc: "Adds a sensual and enchanting floral scent that adds a touch of romance and luxury to the fragrance." },
    { name: "LAVENDER", img: Lavender, desc: "Adds a sense of freshness to the scent. Keeps you at peace and calms the vibe." },
    { name: "LEMON", img: Lemon, desc: "It offers a fresh and invigorating scent that provides an immediate burst of vitality and freshness to the fragrance." },
]

const BathBodyNotes = [
    { name: "FREESIA", img: Freesia, desc: "Its floral and airy aroma carries a sense of lightness and purity, adding an aura of freshness and grace to the fragrance." },
    { name: "LAVENDER", img: Lavender, desc: "Adds a sense of freshness to the scent. Keeps you at peace and calms the vibe." },
    { name: "JASMINE", img: Jasmine, desc: "Adds a sensual and enchanting floral scent that adds a touch of romance and luxury to the fragrance." },
    { name: "PINK PEPPER", img: PinkPepper, desc: "It infuses the fragrance with an intriguing and modern twist and adds depth to the scent compositions." },
]

const MakeupNotes = [
    { name: "BERGAMOT", img: Bergamot, desc: "It serves as a vibrant note, adding a zesty and invigorating quality to the fragrance." },
    { name: "ARGAN OIL", img: Argon, desc: "Deeply moisturises and nourishes the skin, helping to improve its elasticity and smoothness." },
    { name: "MOSS", img: Moss, desc: "It provides depth and complexity, evoking the serene essence of the forest floor." },
    { name: "SAGE", img: Sage, desc: "It imparts a clean, earthy, and aromatic scent and contributes a sense of natural freshness and sophistication to the fragrance." },
]

const GiftSetsNotes = [
    { name: "CARAMEL", img: Caramel, desc: "Its warm aroma adds a sense of comfort and decadence to the fragrance" },
    { name: "MUSK", img: Musk, desc: "It helps to add depth, sensuality, and longevity to the fragrance." },
    { name: "OUD", img: OUD, desc: "It lends the fragrance an opulent and mystical quality, often associated with luxury and spiritual depth." },
    { name: "VETIVER", img: Vetiver, desc: "Its deep and complex scent evokes the tranquility of a lush forest, adds a sense of depth and refinement to the fragrance" },
]

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
    const { addToCart } = useContext(CartContext)
    const product = Products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState(0)
    const [loader, setLoader] = useState(true)
    const [productImgModalOpen, setProductImgModalOpen] = useState(false)
    const [openDescriptions, setOpenDescriptions] = useState(false)
    const [btnLoader, setBtnLoader] = useState(null)
    const [miniImg, setMiniImg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 751) {
                setMiniImg(true);
            } else {
                setMiniImg(false)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

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

    const handleProductClick = (product) => {
        const formattedName = product.name.replace(/\s+/g, '-');
        navigate(`/collection/shopAll/${product.id}/${formattedName}`)
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
                                        TYPE: <span style={{ color: "green" }}>{product.category}</span>
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
                                        <div className='ppAccordionNoteMapping'>
                                            {(product.category === "perfumes"
                                                ? PerfumesNotes
                                                : product.category === "bathBody"
                                                    ? BathBodyNotes
                                                    : product.category === "makeup"
                                                        ? MakeupNotes
                                                        : product.productType === "comboProducts"
                                                            ? GiftSetsNotes
                                                            : PerfumesNotes
                                            ).map((note, index) => {
                                                return <div className='noteMapSingle' key={index}>
                                                    <img src={note.img} alt="" />
                                                    <p className='noteMapSingleName'>{note.name}</p>
                                                    <p className='noteMapSingleDescription'>{note.desc}</p>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(4)}>
                                        <p>FAQs</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 4 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 4 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside ppAccordionOtherInfo'>
                                            <span>
                                                <p style={{ color: "#000" }}>How long does a perfume usually last?</p>
                                                Our perfumes typically last up to 8 hours, and are made especially for the Indian climate.
                                            </span>

                                            <span>
                                                <p style={{ color: "#000" }}>Do our perfumes contain Alcohol?</p>
                                                NO is the straightforward response to that.Alcohol used in perfumes is not the same alcohol used for consumption directly.The alcohol used in perfumes is known as perfumers alcohol. It cannot be bought in liquor stores and is not meant for drinking.So it is okay for us to apply! Use freely and carry your fragrance.
                                            </span>

                                            <span>
                                                <p style={{ color: "#000" }}>Are Perfumes made in India?</p>
                                                Yes,Our Perfumes are made in India .We imported perfume oils from france and bottled in India
                                            </span>

                                            <span>
                                                <p style={{ color: "#000" }}>How should I keep/store my Perfume?</p>
                                                Yes, it does matter where you keep your perfume. It is advisable to keep perfume out of direct sunlight and extremely hot or cold temperatures. This increases the shelf life and maintains the quality of the perfume.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(5)}>
                                        <p>IS THIS YOUR FIRST BELLA VITA PURCHASE?</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 5 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 5 ? 'show' : 'hide'}`}>
                                        <p className='ppAccordionInside ppAccordionOtherInfo'>
                                            <span>
                                                We’ve all had the experience of seeing ads that promise the world, bought it, and realised it wasn’t quite as advertised. That's no good. We at BELLAVITA take a different approach before launching any perfume:
                                            </span>
                                            <span>
                                                <span style={{ color: "#000", fontWeight: "550" }}>In-Depth Consumer Research:</span> Each of our perfumes is backed by hundreds of days of comprehensive consumer research, tailoring scents to meet the genuine needs and preferences of the Indian consumer while keeping in mind the Indian climate.
                                            </span>
                                            <span>
                                                <span style={{ color: "#000", fontWeight: "550" }}>Superior Ingredients:</span> We source our premium ingredients from France, Spain, and Italy, known world-over for their quality and uniqueness in fragrance.
                                            </span>
                                            <span>
                                                <span style={{ color: "#000", fontWeight: "550" }}>Proven Longevity:</span> Our perfumes are designed to last, offering 8 to 10 hours of enduring scent, ensuring you stay fresh throughout the day.
                                            </span>
                                            <span className='firstPurchase'>
                                                <span style={{ color: "#000", fontWeight: "550" }}>IFRA Certification:</span> Commitment to safety and quality is paramount and so all our perfumes are IFRA-certified, meeting rigorous international standards, making them to safe to use on skin.
                                            </span>
                                            <span className='firstPurchaseImg'>
                                                <img src={miniImg ? FirstPurchaseImgMini : FirstPurchaseImg} alt="" />
                                            </span>
                                            <span>
                                                Still not convinced? If you’re still not sure of what you are looking for, you can try our perfume trial pack, which offers you the chance to try out our 10 perfumes at just 349!
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="ppFirstAccordion">
                                    <div className="ppFooterHeading750" onClick={() => handleClick(6)}>
                                        <p>Other Information</p>
                                        <img src={downArrow} alt="" className={`ppRightArrowTopFooter ${activeIndex === 6 ? 'ppRotate-arrow' : ''}`} />
                                    </div>
                                    <div className={`ppFooter750pxCatItems ${activeIndex === 6 ? 'show' : 'hide'}`}>
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
                            </div>
                            <div className="BestPairedWithSection ">
                                <p className='BestPairedWithSectionHeading'>BEST PAIRED WITH</p>
                                <div className='categoryCard'>
                                    {(product.category === "perfumes" ?
                                        BestPairedProducts.perfumes
                                        : product.category === "bathBody"
                                            ? BestPairedProducts.bathBody
                                            : product.category === "makeup"
                                                ? BestPairedProducts.makeup
                                                : BestPairedProducts.perfumes
                                    ).map((pairedProduct, index) => {
                                        return <PairedProducts pairedProduct={pairedProduct} handleProductClick={handleProductClick} handleAddProductToCart={handleAddProductToCart} btnLoader={btnLoader} />
                                    })
                                    }
                                </div>
                            </div>
                            <div className='BestPairedWithSection customerReviewsSection'>
                                <p className='BestPairedWithSectionHeading customerReviewsSectionHeading'>Customer Reviews</p>
                                <div className='customerReviews'>
                                    <div className="ratingAndAddReview">
                                        <div className='ratingAndReviewsCount'>
                                            <div className="fiveStar">
                                                <img src={Star} alt="" className='mainStarRatingReviews' />
                                                <img src={Star} alt="" className='mainStarRatingReviews' />
                                                <img src={Star} alt="" className='mainStarRatingReviews' />
                                                <img src={Star} alt="" className='mainStarRatingReviews' />
                                                <img src={Star} alt="" className='mainStarRatingReviews' />
                                            </div>
                                            <p>Based On {product.numOfReviews}</p>
                                        </div>
                                        <button className='sortBtn writeReviewBtn'>
                                            Write a review
                                        </button>
                                    </div>
                                    <div className="filterViaRatingPP">
                                        
                                    </div>
                                    {Reviews.map((review, index) => {
                                        return <div className='customerReviewsMapping'>
                                            {/* {[...Array(5)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src={i < review.stars ? Star : ReviewsLogo}
                                                        alt={i < review.stars ? "filled star" : "outlined star"}
                                                    />
                                                ))} */}
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="BestPairedWithSection ">
                                <p className='BestPairedWithSectionHeading'>RECENTLY VIEWED</p>
                                <div className='categoryCard'>
                                    {(product.category === "perfumes" ?
                                        BestPairedProducts.perfumes
                                        : product.category === "bathBody"
                                            ? BestPairedProducts.bathBody
                                            : product.category === "makeup"
                                                ? BestPairedProducts.makeup
                                                : BestPairedProducts.perfumes
                                    ).map((pairedProduct, index) => {
                                        return <PairedProducts pairedProduct={pairedProduct} handleProductClick={handleProductClick} handleAddProductToCart={handleAddProductToCart} btnLoader={btnLoader} />
                                    })
                                    }
                                </div>
                            </div>
                            <div className="BestPairedWithSection ">
                                <p className='BestPairedWithSectionHeading'>YOU MAY ALSO LIKE</p>
                                <div className='categoryCard'>
                                    {(product.category === "perfumes" ?
                                        BestPairedProducts.perfumes
                                        : product.category === "bathBody"
                                            ? BestPairedProducts.bathBody
                                            : product.category === "makeup"
                                                ? BestPairedProducts.makeup
                                                : BestPairedProducts.perfumes
                                    ).map((pairedProduct, index) => {
                                        return <PairedProducts pairedProduct={pairedProduct} handleProductClick={handleProductClick} handleAddProductToCart={handleAddProductToCart} btnLoader={btnLoader} />
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product