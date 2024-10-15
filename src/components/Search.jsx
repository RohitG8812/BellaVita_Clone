import React, { useEffect, useState } from 'react'
import Dustbin from "../assets/icons/bin.svg"
import XRed from "../assets/icons/xRed.svg"
import Recent from "../assets/icons/recent.svg"
import X from "../assets/icons/x.svg"
import Trend from "../assets/icons/trend.svg"
import Recommended from "../assets/icons/hot.svg"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"

import { Link } from 'react-router-dom'

function Search({ inputBoxActive, inputValueLength, setInputBoxActive }) {
    const [recentSearches, setRecentSearches] = useState([])
    const [spinnerLoader, setSpinnerLoader] = useState(false);

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(storedSearches)
        setSpinnerLoader(true)
        setTimeout(() => {
            setSpinnerLoader(false)
        }, 400)
    }, [inputBoxActive])

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
    console.log(recentSearches)

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
                                <Link to={search.to}>
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
                                <div className="productCardSearchMain">
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
                afterInputTextSearch
            </div>
        </div >
    )
}

export default Search