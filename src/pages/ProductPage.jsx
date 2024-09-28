import React, { useState } from 'react'
import "../css/productCard.css"
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import PlusArrow from "../assets/icons/plus.svg"
import DownArrow from "../assets/icons/downr.svg"
import FilterLogo from "../assets/icons/filter.svg"

function ProductPage({ product, heading, handleProductClick }) {
    return (
        <div className="mainContent">
            <span className='productCardHeading'>{heading}</span>
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
    )
}

export default ProductPage