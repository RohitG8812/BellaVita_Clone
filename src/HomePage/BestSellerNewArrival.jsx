import React, { useEffect, useRef, useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom';
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import Loader from '../pages/Loader';


function BestSellerNewArrival({ handleAddToCart, btnLoader }) {
    const navigate = useNavigate()
    const [category, setCategory] = useState('bestSellers')
    const [actCategory, setActCategory] = useState(true)
    const perfumes = Products.filter(product => product.category === 'perfumes');
    const bath_Body = Products.filter(product => product.category === 'bathBody');
    const categoryCardRef = useRef();

    const changeCategory = (category) => {
        setActCategory(false)
        setCategory(category)
        setActCategory(true)
    }

    const handleProductClick = (product) => {
        const formattedName = product.name.replace(/\s+/g, '-');
        navigate(`/collection/${category}/${product.id}/${formattedName}`)
    }

    const viewAllProducts = (category) => {
        navigate(`/collection/${category}`)
    }

    useEffect(() => {
        if (categoryCardRef.current) {
            categoryCardRef.current.scrollTo({
                left: 0,
                behavior: 'auto'
            })
        }
    }, [category]);

    const products = (category === 'bestSellers') ? perfumes : bath_Body
    const displayProducts = products.slice(0, 8)
    return (
        <div className='mainDiv'>
            <div className={`categoryBtn`}>
                <button className={category === 'bestSellers' ? 'activeTab' : ''} onClick={() => changeCategory('bestSellers')}>BestSellers</button>
                <p className='middleArrowMain'>|</p>
                <button className={`newArrivalBtn ${category === 'newArrivals' ? 'activeTab' : ''}`} onClick={() => changeCategory('newArrivals')}>New Arrivals</button>
            </div>
            <div className="categoryCard" ref={categoryCardRef}>
                {displayProducts.map((product, index) => {
                    return <div className="card" key={product.id}>
                        <div className="cardImg" onClick={() => handleProductClick(product)}>
                            <div><img src={product.mainImg} alt="" className='cardImg2' /></div>
                            <div className="card-badge-bottom">
                                <span className="discountBadge">{product.discount} off</span>
                            </div>
                        </div>
                        <div className="card-badge">
                            <span className='bogoBadge'>Buy 1 get 1 Free</span>
                            <span className={`2ndBadge ${category === 'bestSellers' ? 'bestSellerBadgeHome' : 'newBadge'}`}>{category === 'bestSellers' ? "BestSeller" : "New"}</span>
                        </div>
                        <div className="cardBottomText">
                            <div className="topText">
                                <p className='cardProductVariant'>{product.variant}</p>
                                <p className='cardProductName' onClick={() => handleProductClick(product)}>{product.name}</p>
                                <div className="ratingReviews">
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
                                <div className="productPriceMain">
                                    <p className='discount cardProductPrice'><img src={GreenDownArrow} alt="" className='greenArrow' />{product.discount}</p>
                                    <p className="mrp cardProductPrice">{product.mrp}</p>
                                    <p className='cardProductPrice'>{product.price}</p>
                                </div>
                            </div>
                            <div className="addToCartBtn" onClick={() => handleAddToCart(product)}>
                                <button>{btnLoader === product.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="viewAll">
                <button onClick={() => viewAllProducts(category)}>View All</button>
            </div>
        </div>
    )
}

export default BestSellerNewArrival