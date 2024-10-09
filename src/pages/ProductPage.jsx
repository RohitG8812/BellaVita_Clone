import React, { useEffect, useState } from 'react'
import "../css/productCard.css"
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import PlusArrow from "../assets/icons/plus.svg"
import DownArrow from "../assets/icons/downr.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import FilterLogo from "../assets/icons/filter.svg"
import FIlter from '../components/FIlter'
import Loader from './Loader'

function ProductPage({ product, heading, handleProductClick, categoryFilter }) {
    const [filterMenuActive, setFilterMenuActive] = useState(false)
    const [filterItems, setFilterItems] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { value, checked } = e.target;
        setLoading(true)

        if (checked) {
            console.log("load")
            setTimeout(() => {
                setFilterItems([...filterItems, value])
                console.log(value)
                setLoading(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setFilterItems(filterItems.filter((category) => category !== value));
                console.log(value)
                setLoading(false)
            }, 1000)
        }
    }

    const handleCLearFilter = () => {
        {
            filterItems.length > 0 && console.log("CLicking CLearFilter")
            setLoading(true)
            setTimeout(() => {
                setFilterItems([])
                setLoading(false)
            }, 1000)
        }
    }

    const filterByPrice = (product) => {
        const productPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));

        if (filterItems.includes("0-500") && productPrice >= 1 && productPrice <= 500) {
            return true;
        }
        if (filterItems.includes("501-1000") && productPrice > 501 && productPrice <= 1000) {
            return true;
        }
        if (filterItems.includes("1001-1500") && productPrice > 1001 && productPrice <= 1500) {
            return true;
        }
        if (filterItems.includes("1501+") && productPrice > 1501 && productPrice <= 4000) {
            return true;
        }
        return false;
    };

    const filterByRating = (product) => {
        const productRating = product.rating

        if (filterItems.includes("1") && productRating >= 1 && productRating < 2) {
            return true
        }
        if (filterItems.includes("2") && productRating >= 2 && productRating < 3) {
            return true
        }
        if (filterItems.includes("3") && productRating >= 3 && productRating < 4) {
            return true
        }
        if (filterItems.includes("4") && productRating >= 4 && productRating < 5) {
            return true
        }
        if (filterItems.includes("5") && productRating >= 5) {
            return true
        }
        return false
    }

    const filteredProducts = product.filter((product) => {
        let matchesCategory = true;
        let matchesPrice = true;
        let matchesRating = true;
        let matchesVariant = true;

        if (filterItems.some((item) => categoryFilter.map(filter => filter.value).includes(item))) {
            matchesCategory = filterItems.includes(product.category);
        }

        if (filterItems.some((item) => ["0-500", "501-1000", "1001-1500", "1501+"].includes(item))) {
            matchesPrice = filterByPrice(product);
        }

        if (filterItems.some((item) => ["1", "2", "3", "4", "5"].includes(item))) {
            matchesRating = filterByRating(product);
        }

        if (filterItems.some((item) => ["Eau De Parfum", "Attar for All", "Eau De Parfum For Women"].includes(item))) {
            matchesVariant = filterItems.includes(product.variant);
        }

        return matchesCategory && matchesPrice && matchesRating && matchesVariant;
    });

    const handleFIlterActive = () => {
        setFilterMenuActive(!filterMenuActive)
    }

    const handleOutsideClick = () => {
        setFilterMenuActive(false);
    };

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
                    <div className='filterBtn' onClick={handleFIlterActive}>
                        {loading ? <span className='filterBtnLoader'><Loader /></span> : <><span>Filter</span>
                            <img src={PlusArrow} alt="Plus" className='plusIcon' /></>}
                    </div>
                    <div className="filterMenu">
                        <FIlter active={filterMenuActive} handleChange={handleChange} categoryFilter={categoryFilter} products={product} filteredProducts={filteredProducts} handleCLearFilter={handleCLearFilter} filterItems={filterItems} />
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
                    {loading ? <Loader /> : <p>{filteredProducts.length === product.length ? product.length : (`${filteredProducts.length} of ${product.length}`)} Products</p>}
                </div>
            </div>

            {filterMenuActive && <div className="overlay" onClick={handleOutsideClick}></div>}

            <div className={`productCardMain ${loading ? "blurBackground" : ""}`} >
                {filteredProducts.length > 0 ?
                    filteredProducts.map((product, index) => {
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
                                    <div className="productPriceMain">
                                        <p className='discount cardProductPrice'><img src={GreenDownArrow} alt="" className='greenArrow' />{product.discount}</p>
                                        <p className="mrp cardProductPrice">{product.mrp}</p>
                                        <p className='cardProductPrice'>{product.price}</p>
                                    </div>
                                </div>
                                <div className="addToCartBtn">
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    }) : <div className='noProductAvailable'>No Product Available</div>}
            </div>
        </div>
    )
}

export default ProductPage



//* Products sorting price low to high
// const [sortedProducts, setSortedProducts] = useState([]);
// useEffect(() => {
//     const sorted = [...product].sort((a, b) => {
//         // Extract the numerical value from the price string
//         const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
//         const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
//         return priceA - priceB;  // Sort in ascending order
//     });
//     setSortedProducts(sorted);
// }, [product]);
//*
