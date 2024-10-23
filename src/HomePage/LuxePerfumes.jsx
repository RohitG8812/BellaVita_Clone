import React, { useState } from 'react'
import LuxePerfumesImg from "../assets/Banner/HomePageBanner/Luxe-Perfumes.webp"
import "../css/productCard.css"
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"
import { useNavigate } from 'react-router-dom'
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import Loader from '../pages/Loader'


function LuxePerfumes({ handleAddToCart, btnLoader }) {
    const navigate = useNavigate()
    const product = [
        {
            id: 129,
            index: 0,
            category: "perfumes",
            name: "HOT Mess Perfume for Women - 100ml",
            variant: "Eau De Parfum for Women",
            price: "₹1099.00",
            mrp: "₹1499.00",
            rating: "4.9",
            numOfReviews: "63 Reviews",
            discount: "27%",
            mainImg:
                "https://bellavitaorganic.com/cdn/shop/files/2_e0b9be5c-f667-43bf-805a-3881fe628fdb.jpg?v=1714553667&width=1000",
        },
        {
            id: 118,
            index: 1,
            category: "perfumes",
            name: "OCEAN Man - 100ml",
            variant: "Eau De Parfum For Men",
            price: "₹849.00",
            mrp: "₹1099.00",
            rating: "4.9",
            numOfReviews: "246 Reviews",
            discount: "23%",
            mainImg:
                "https://bellavitaorganic.com/cdn/shop/files/Ocean-01_6cd0a2ed-3b3e-462a-a818-c2c2346b30c5.jpg?v=1717665492&width=1000",
        },
        {
            id: 114,
            index: 2,
            category: "perfumes",
            name: "BLU Man - 100ml",
            variant: "Eau De Parfum",
            price: "₹849.00",
            mrp: "₹1099.00",
            rating: "4.7",
            numOfReviews: "302 Reviews",
            discount: "23%",
            mainImg:
                "https://bellavitaorganic.com/cdn/shop/files/1_882dadd1-43e2-4c85-a8a6-0da791b34d8f.jpg?v=1714548090&width=1000",
        }
    ]
    const [selectedProduct, setSelectedProduct] = useState(product[0])


    const handleProductClick = (id) => {
        navigate(`/collection/perfumes/${id}`)
    }

    const handleHover = (index) => {
        setSelectedProduct(product[index]);
    };

    const handleClick = (index) => {
        setSelectedProduct(product[index])
    }
    return (
        <div className='mainDiv'>
            <div className="luxePerfumesSectionMain">
                <div className="luxePerfumesImg">
                    <div className="relativeContainer">
                        <img src={LuxePerfumesImg} alt="" />
                        {product.map((product, index) => (
                            <div key={index}
                                className={`dots dot-${index + 1} ${selectedProduct.index === product.index ? 'dotActive' : ''}`}
                                onMouseEnter={() => handleHover(product.index)}
                            >
                                <div className={`inner-dot  ${selectedProduct.index === product.index ? 'innerDotActive' : ''}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="luxePerfumesCard">
                    <div className="prodCardMain" >
                        <div className="prodCard" key={selectedProduct.id}>
                            <div className="prodCardImgLuxury" onClick={() => handleProductClick(selectedProduct.id)}>
                                <img src={selectedProduct.mainImg} alt="" className='ProdCardImg' />
                            </div>
                            <div className="card-badge luxeCardBadge">
                                <span className='bestSellerBadgeHome'>BestSeller</span>
                                <span className={"2ndBadge newBadge"}>New</span>
                            </div>
                            <div className="productsCardBottomText prodCardBottom">
                                <div className="topText">
                                    <p className='cardProductVariant'>{selectedProduct.variant}</p>
                                    <p className='ProductCardName' onClick={() => handleProductClick(selectedProduct.id)}>{selectedProduct.name}</p>
                                    <div className="ProductRatingReviews">
                                        <div className='productRating'>
                                            <img src={RatingLogo} alt="Rating" />
                                            <p>{selectedProduct.rating}</p>
                                        </div>
                                        <span className='middleArrow'>|</span>
                                        <div className='productReviews'>
                                            <img src={ReviewsLogo} alt="Reviews" />
                                            <p> {`(${selectedProduct.numOfReviews})`}</p>
                                        </div>
                                    </div>
                                    <div className="productPriceMain">
                                        <p className='discount cardProductPrice'><img src={GreenDownArrow} alt="" className='greenArrow' />{selectedProduct.discount}</p>
                                        <p className="mrp cardProductPrice">{selectedProduct.mrp}</p>
                                        <p className='cardProductPrice'>{selectedProduct.price}</p>
                                    </div>
                                </div>
                                <div className="addToCartBtn" onClick={() => handleAddToCart(selectedProduct)}>
                                    <button>{btnLoader === selectedProduct.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prodChangeLine">
                        {product.map((product, index) => (
                            <div
                                onClick={() => handleClick(product.index)}
                                className={`lineMain ${selectedProduct.index === product.index ? 'lineActive' : ''}`}
                                key={index}
                            >
                                <div className={`line-${index + 1}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LuxePerfumes