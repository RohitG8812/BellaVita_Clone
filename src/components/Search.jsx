import React, { useEffect, useState } from 'react'
import Dustbin from "../assets/icons/bin.svg"
import XRed from "../assets/icons/xRed.svg"
import Recent from "../assets/icons/recent.svg"
import X from "../assets/icons/x.svg"
import Trend from "../assets/icons/trend.svg"
import Recommended from "../assets/icons/hot.svg"
import Suggestion from "../assets/icons/suggestion.svg"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import Products from '../JSON/Products'
import { Link, useNavigate } from 'react-router-dom'

const trendingSearches = [
    { name: "Perfume", to: "/collection/perfumes" },
    { name: "Bath & Body", to: "/collection/bathBody" },
    { name: "Gift Sets", to: "/collection/giftSets" },
    { name: "Crazy Deals", to: "/collection/crazyDeals" },
    { name: "Perfume Combos", to: "/collection/perfumesSets" },
]

const recommendedProducts = [
    {
        id: 106,
        name: "TAAJ Gold OUD Attar - 12ml",
        img: "https://bellavitaorganic.com/cdn/shop/files/Taaj-00.jpg?v=1712321132&width=1000",
        price: "₹425.00",
        mrp: "₹599",
        discount: "30%",
    },
    {
        id: 110,
        name: "SENORITA Woman Perfume - 100ml",
        img: "https://bellavitaorganic.com/cdn/shop/files/1_41d6b2ca-f10a-4f45-b36f-2f066941c5bf.jpg?v=1714554652&width=1000",
        price: "₹515.00",
        mrp: "₹899",
        discount: "43%",
    },
    {
        id: 112,
        name: "Hot & Classy",
        img: "https://bellavitaorganic.com/cdn/shop/files/Hot-_-classy-2_2.jpg?v=1707985653&width=1000",
        price: "₹899.00",
        mrp: "₹1199",
        discount: "26%",
    },
    {
        id: 101,
        name: "Luxury Perfume Gift Set For Men - 4 x 20ml",
        img: "https://bellavitaorganic.com/cdn/shop/files/front_2.jpg?v=1723645186&width=1000",
        price: "₹519.00",
        mrp: "₹849",
        bestSeller: "bestSeller",
        discount: "39%"
    }
]

function Search({ inputBoxActive, inputValueLength, setInputBoxActive, value, setValue }) {
    const [recentSearches, setRecentSearches] = useState([])
    const [spinnerLoader, setSpinnerLoader] = useState(false);
    const [suggestions, setSuggestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(storedSearches)
    }, [inputBoxActive])

    useEffect(() => {
        setSpinnerLoader(true)
        setTimeout(() => {
            setSpinnerLoader(false)
        }, 700)
    }, [inputBoxActive, value])

    useEffect(() => {
        const inputText = value.toLowerCase()
        const suggestions = Products.filter((item) =>
            item.name.toLowerCase().includes(inputText) ||
            item.category.toLowerCase().includes(inputText) ||
            item.variantM.toLowerCase().includes(inputText)
        )
        setSuggestions(suggestions)
    }, [value])

    // to remove all search from local storage
    const handleClearLocalStorage = () => {
        localStorage.removeItem("recentSearches");
        setRecentSearches([]);
    }

    // to remove single search from local storage
    const handleClearSingleSearch = (searchTerm) => {
        const updatedSearches = recentSearches.filter(search => search !== searchTerm);
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }

    const handleProductClick = (product) => {
        const formattedName = product.name.replace(/\s+/g, '-');
        navigate(`/collection/perfumes/${product.id}/${formattedName}`)
    }

    const handleSuggestionProductClick = (id) => {
        navigate(`/collection/shopAll/${id}`)
        setInputBoxActive(false)
        setValue("")
    }
    return (
        <div className='SearchBoxContent'>
            <div className="beforeInputTextSearch" style={{ display: inputValueLength ? "none" : "block" }}>
                {/* 1 Recent Searches */}
                <div className="recentSearches">
                    <div className="headingOfSearches">
                        <div className='headingNameSearch'>
                            <img src={Recent} alt="" className='xRedIcon' />
                            <span>Recent Searches</span>
                        </div>
                        <div className="binOrXIcon">
                            <img src={Dustbin} alt="Dustbin" className='binIcon' onClick={handleClearLocalStorage} />
                            <img src={XRed} alt="X" className='xRedIcon' onClick={() => setInputBoxActive(false)} />
                        </div>
                    </div>
                    <div className='iii'>
                        {recentSearches.length > 0 ? <ul className="recentSearchText">
                            {recentSearches.map((search, index) => (
                                <li className='searchText' key={index}>
                                    <div>{search}</div>
                                    <img src={X} alt="" className='binIcon' onClick={() => handleClearSingleSearch(search)} />
                                </li>
                            ))}
                        </ul> : <div className='searchText noHistory'>Recent Search History is empty !</div>}
                    </div>
                </div>
                {/* 2 Trending Searches */}
                <div className="trendingSearches" style={{ marginBottom: "10px" }}>
                    <div className="headingOfSearches">
                        <div className='headingNameSearch'>
                            <img src={Trend} alt="" className='xRedIcon' />
                            <span>Trending Searches</span>
                        </div>
                    </div>
                    <div className='iii'>
                        <ul className="recentSearchText">
                            {trendingSearches.map((search, index) => (
                                <Link to={search.to} key={index}>
                                    <li className='searchText' key={index}>
                                        <div>{search.name}</div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* 3 recommended Products */}
                <div className="trendingSearches">
                    <div className="headingOfSearches">
                        <div className='headingNameSearch'>
                            <img src={Recommended} alt="" className='xRedIcon' />
                            <span>Recommended For You</span>
                        </div>
                    </div>
                    <div className='iii'>
                        <div className="recentSearchText recommendedProductCard">
                            {recommendedProducts.map((product, index) => (
                                <div className="productCardSearchMain" key={product.id} onClick={() => handleProductClick(product)}>
                                    <div className="cardImage" style={{ backgroundColor: spinnerLoader ? "#fff" : "#f2f2f2" }}>
                                        <div>
                                            {spinnerLoader ? <img src={SpinnerLoader} alt="" className='searchProductCardImg' /> :
                                                <img src={product.img} alt="" className='searchProductCardImg' />}
                                        </div>
                                        <div className="search-card-badge-bottom">
                                            <span className="searchDiscountBadge">{product.discount} off</span>
                                        </div>
                                    </div>
                                    <div className="bottomCardSearch">
                                        <p className='searchCardProductName '>{product.name}</p>
                                        <div className="searchCardPrice">
                                            <p className='discount cardProductPrice searchCardP'><img src={GreenDownArrow} alt="" className='greenArrow' />{product.discount}</p>
                                            <p className="mrp cardProductPrice searchCardMrp">{product.mrp}</p>
                                            <p className='CardProductPrice searchCardP'>{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
            <div className="afterInputTextSearch" style={{ display: inputValueLength ? "block" : "none" }}>
                <div className='headingNameSearch suggestionHeading'>
                    <div className='icon-Heading'>
                        <img src={Suggestion} alt="" className='xRedIcon' />
                        <span>Search Suggestions</span>
                    </div>
                    <div className='suggestionCount'>
                        <span>{suggestions.length} Products</span>
                    </div>
                </div>
                <div className="suggestionsData">
                    {suggestions.length > 0 ? <div className='suggestionsDataCard'>
                        {suggestions.map((suggestion) => (
                            <div className="suggestionCardMain" key={suggestion.id} onClick={() => handleSuggestionProductClick(suggestion.id)}>
                                <div className="cardImage" style={{ backgroundColor: spinnerLoader ? "#fff" : "#f2f2f2" }}>
                                    {spinnerLoader ? <img src={SpinnerLoader} alt="" className='searchProductCardImg' /> :
                                        <img src={suggestion.mainImg} alt="" className='searchProductCardImg' />}
                                    <div className="search-card-badge-bottom">
                                        <span className="searchDiscountBadge">{suggestion.discount} off</span>
                                    </div>
                                </div>
                                <div className="bottomCardSearch">
                                    <p className='searchCardProductName '>{suggestion.name}</p>
                                    <div className="searchCardPrice">
                                        <p className='discount cardProductPrice searchCardP'><img src={GreenDownArrow} alt="" className='greenArrow' />{suggestion.discount}</p>
                                        <p className="mrp cardProductPrice searchCardMrp">{suggestion.mrp}</p>
                                        <p className='CardProductPrice searchCardP'>{suggestion.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> : <div>
                        <div className='suggestion-no-result'>
                            <p className='no-result-suggestion'>No Result Found for '{value}'</p>
                            <p className='no-result-other-keyWord'>Try Searching Some other Keywords</p>
                        </div>
                        <div >
                            <p className='other-products'>Meanwhile Checkout some of our other products</p>
                            <div className='iii'>
                                <div className="recentSearchText recommendedProductCard">
                                    {recommendedProducts.map((product, index) => (
                                        <div className="productCardSearchMain" key={index} onClick={() => handleProductClick(product)}>
                                            <div className="cardImage" style={{ backgroundColor: spinnerLoader ? "#fff" : "#f2f2f2" }}>
                                                <div>
                                                    {spinnerLoader ? <img src={SpinnerLoader} alt="" className='searchProductCardImg' /> :
                                                        <img src={product.img} alt="" className='searchProductCardImg' />}
                                                </div>
                                                <div className="search-card-badge-bottom">
                                                    <span className="searchDiscountBadge">{product.discount} off</span>
                                                </div>
                                            </div>
                                            <div className="bottomCardSearch">
                                                <p className='searchCardProductName '>{product.name}</p>
                                                <div className="searchCardPrice">
                                                    <p className='discount cardProductPrice searchCardP'><img src={GreenDownArrow} alt="" className='greenArrow' />{product.discount}</p>
                                                    <p className="mrp cardProductPrice searchCardMrp">{product.mrp}</p>
                                                    <p className='CardProductPrice searchCardP'>{product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default Search