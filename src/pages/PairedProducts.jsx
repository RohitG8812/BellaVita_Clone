import React from 'react'
import RatingLogo from "../assets/icons/star.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import Loader from './Loader'

function PairedProducts({ pairedProduct, handleProductClick, handleAddProductToCart, btnLoader }) {
    return (
        <div className="card" key={pairedProduct.id}>
            <div className="cardImg" onClick={() => handleProductClick(pairedProduct)}>
                <div><img src={pairedProduct.mainImg} alt="" className='cardImg2' /></div>
                <div className="card-badge-bottom">
                    <span className="discountBadge">{pairedProduct.discount} off</span>
                </div>
            </div>
            <div className="card-badge">
                <span className={`2ndBadge bestSellerBadgeHome `}>BestSeller</span>
            </div>
            <div className="cardBottomText">
                <div className="topText">
                    <p className='cardProductVariant'>{pairedProduct.variant}</p>
                    <p className='cardProductName' onClick={() => handleProductClick(pairedProduct)}>{pairedProduct.name}</p>
                    <div className="ratingReviews">
                        <div className='productRating'>
                            <img src={RatingLogo} alt="Rating" />
                            <p>{pairedProduct.rating}</p>
                        </div>
                        <span className='middleArrow'>|</span>
                        <div className='productReviews'>
                            <img src={ReviewsLogo} alt="Reviews" />
                            <p> {`(${pairedProduct.numOfReviews})`}</p>
                        </div>
                    </div>
                    <div className="productPriceMain">
                        <p className='discount cardProductPrice'><img src={GreenDownArrow} alt="" className='greenArrow' />{pairedProduct.discount}</p>
                        <p className="mrp cardProductPrice">{pairedProduct.mrp}</p>
                        <p className='cardProductPrice'>{pairedProduct.price}</p>
                    </div>
                </div>
                <div className="addToCartBtn" onClick={() => handleAddProductToCart(pairedProduct)}>
                    <button>{btnLoader === pairedProduct.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}</button>
                </div>
            </div>
        </div>
    )
}

export default PairedProducts