import React, { useEffect, useState } from 'react'
import "../css/productCard.css"
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import PlusArrow from "../assets/icons/plus.svg"
import DownArrow from "../assets/icons/downr.svg"
import ShopAllBanner from "../assets/Banner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/ShopAllBannerMini.webp"
import FilterLogo from "../assets/icons/filter.svg"

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
        navigate(`/collection/allProducts/${id}`)
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
                <div className='ShopAll'>
                    <div className="hide">
                        <div className="mainContent">
                            <span className='productCardHeading'>Shop All Products</span>
                            <div className="conditions">
                                <p>1. Add minimum 2 Eligible Products to your cart</p>
                                <p>2. BOGO Offer will be automatically applied at checkout</p>
                                <p>3. Same/Low priced product will be FREE</p>
                            </div>
                            <div className="filterAndProductCount">
                                <div className="filterAndSortBtn">
                                    <div className='filterBtn'>
                                        <span>Filter</span>
                                        <img src={PlusArrow} alt="Plus" className='plusIcon' />
                                    </div>
                                    <div className="sortBtn">
                                        <span className='sortText'>Sort</span>
                                        <img src={DownArrow} alt="Down" className='downIcon' />
                                    </div>
                                </div>
                                <div className="miniFilter">
                                    <div className="filterAndSortBtnMini">
                                        <img src={FilterLogo} alt="Filter" className='filterIcon' />
                                        <span>Filter and sort</span>
                                    </div>
                                </div>
                                <div className="productCount">
                                    <p>{product.length} Products</p>
                                </div>
                            </div>
                            <div className="productCardMain" >
                                {product.map((product, index) => {
                                    return <div className="productCard" key={product.id} onClick={() => handleProductClick(product.id)}>
                                        <div className="cardImg">
                                            <img src={product.mainImg} alt="" className='ProductCardImg' />
                                        </div>
                                        <div className="card-badge">
                                            <span className='bestSellerBadge'>BestSeller</span>
                                            <span className={"2ndBadge newBadge"}>New</span>
                                        </div>
                                        <div className="productsCardBottomText">
                                            <div className="topText">
                                                <p className='cardProductVariant'>{product.variant}</p>
                                                <p className='ProductCardName '>{product.name}</p>
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
                                                <p className='cardProductPrice'>{product.price}</p>
                                            </div>
                                            <div className="addToCartBtn">
                                                <button>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ShopAll