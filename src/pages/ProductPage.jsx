import React, { useEffect, useState } from 'react'
import "../css/productCard.css"
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import DownArrow from "../assets/icons/downr.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import FilterLogo from "../assets/icons/filter.svg"
import FIlter from '../components/FIlter'
import Loader from './Loader'
import Money from "../assets/icons/roundMoney.svg"
import close from "../assets/icons/roundX.svg"

function ProductPage({ product, heading, handleProductClick, categoryFilter, productTypeFilter }) {
    const [filterMenuActive, setFilterMenuActive] = useState(false)
    const [filterMenuMiniActive, setFilterMenuMiniActive] = useState(false)
    const [filterItems, setFilterItems] = useState([])
    const [sortMenu, setSortMenu] = useState(false);
    const [loading, setLoading] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState(product);
    const [sortOptionActive, setSortOptionActive] = useState('');

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

    useEffect(() => {
        const filtered = product.filter((product) => {
            let matchesCategory = true;
            let matchesProductType = true;
            let matchesPrice = true;
            let matchesRating = true;
            let matchesBestSeller = true;

            if (filterItems.some((item) => categoryFilter.map(filter => filter.value).includes(item))) {
                matchesCategory = filterItems.includes(product.productType);
            }

            if (filterItems.some((item) => productTypeFilter.map(filter => filter.value).includes(item))) {
                matchesProductType = filterItems.includes(product.variantM);
            }
            if (filterItems.some((item) => ["0-500", "501-1000", "1001-1500", "1501+"].includes(item))) {
                matchesPrice = filterByPrice(product);
            }

            if (filterItems.some((item) => ["1", "2", "3", "4", "5"].includes(item))) {
                matchesRating = filterByRating(product);
            }
            if (filterItems.some((item) => "bestSeller".includes(item))) {
                matchesBestSeller = filterItems.includes(product.bestSeller)
            }

            return matchesCategory && matchesProductType && matchesPrice && matchesRating && matchesBestSeller;
        });
        setFilteredProducts(filtered)
    }, [filterItems, product])

    const handleSortLowToHigh = () => {
        setSortOptionActive('lowToHigh')
        setLoading(true)

        setTimeout(() => {
            const sorted = [...filteredProducts].sort((a, b) => {
                let priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
                let priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
                return priceA - priceB;
            });
            setFilteredProducts(sorted);
            setSortMenu(false)
            setLoading(false)
        }, 2000)
    }

    const handleSortHighToLow = () => {
        setSortOptionActive('highToLow')
        setLoading(true)
        setTimeout(() => {
            const sorted = [...filteredProducts].sort((a, b) => {
                let priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
                let priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
                return priceB - priceA;
            });
            setFilteredProducts(sorted);
            setSortMenu(false)
            setLoading(false)
        }, 2000)
    }

    const handleReset = () => {
        setSortOptionActive('allProducts')
        setLoading(true)
        setTimeout(() => {
            const sortedProducts = [...product].sort((a, b) => a.name.localeCompare(b.name));
            setFilteredProducts(sortedProducts)
            setSortMenu(false)
            setLoading(false)
        }, 2000);
    }


    const handleFIlterActive = () => {
        setFilterMenuActive(!filterMenuActive)
    }

    const handleMiniFilterActive = () => {
        setFilterMenuMiniActive(!filterMenuMiniActive)
    }

    const handleOutsideClick = () => {
        setFilterMenuActive(false);
    };

    const handleOutsideClickMini = () => {
        setFilterMenuMiniActive(false);
    };

    const handleOutsideClickSort = () => {
        setSortMenu(false)
    }
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
                            <img src={DownArrow} alt="Down" className={`filterDownIcon ${filterMenuActive ? "rotate-filter-arrow" : ""} ${sortMenu ? "rotate-arrow" : ""}`} /></>}
                    </div>
                    <div className="filterMenu">
                        <FIlter
                            active={filterMenuActive}
                            handleChange={handleChange}
                            categoryFilter={categoryFilter}
                            products={product}
                            filteredProducts={filteredProducts}
                            handleCLearFilter={handleCLearFilter}
                            filterItems={filterItems}
                            productTypeFilter={productTypeFilter}
                        />
                    </div>
                    <div>
                        <div className="sortBtn" onClick={() => setSortMenu(!sortMenu)}>
                            <span className='sortText'>Sort</span>
                            <img src={DownArrow} alt="Down" className={`downIcon ${sortMenu ? "rotate-arrow" : ""}`} />
                        </div>
                        <div className={`sortBtnHideMenu ${sortMenu ? "sortMenuActive" : "sortMenuDisable"}`}>
                            <div className="hhh">
                                <div className='input-label'>
                                    <img src={Money} alt="" className='moneyIcon' />
                                    <p onClick={handleSortLowToHigh} className={sortOptionActive == 'lowToHigh' ? "textRed" : ""}>Price - Low to High</p>
                                </div>
                                <div className='input-label'>
                                    <img src={Money} alt="" className='moneyIcon' />
                                    <p onClick={handleSortHighToLow} className={sortOptionActive == 'highToLow' ? "textRed" : ""}>Price - High To Low</p>
                                </div>
                                <div className='input-label'>
                                    <img src={close} alt="" className='moneyIcon' />
                                    <p onClick={handleReset}>Remove Sort Filter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="miniFilter">
                    <div className="filterAndSortBtnMini" onClick={handleMiniFilterActive}>
                        {loading ? <Loader /> : <><img src={FilterLogo} alt="Filter" className='filterIcon' />
                            <span>Filter and sort</span></>}
                    </div>
                    <div className="filterMenuMini">
                        <FIlter
                            active={filterMenuMiniActive}
                            handleChange={handleChange}
                            categoryFilter={categoryFilter}
                            products={product}
                            filteredProducts={filteredProducts}
                            handleCLearFilter={handleCLearFilter}
                            filterItems={filterItems}
                            productTypeFilter={productTypeFilter}
                            handleSortHighToLow={handleSortHighToLow}
                            handleSortLowToHigh={handleSortLowToHigh}
                            handleReset={handleReset}
                            sortOptionActive={sortOptionActive}
                        />
                    </div>
                </div>

                <div className="productCount">
                    {loading ? <Loader /> : <p>{filteredProducts.length === product.length ? product.length : (`${filteredProducts.length} of ${product.length}`)} Products</p>}
                </div>
            </div>

            {(filterMenuActive || filterMenuMiniActive || sortMenu) && (
                <div className="overlay" onClick={() => {
                    if (filterMenuActive) handleOutsideClick();
                    if (filterMenuMiniActive) handleOutsideClickMini();
                    if (sortMenu) handleOutsideClickSort();
                }}></div>
            )}

            <div className={`productCardMain ${loading || filterMenuActive || filterMenuMiniActive || sortMenu ? "blurBackground" : ""}`} >
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