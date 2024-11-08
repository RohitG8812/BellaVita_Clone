import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Loader from '../pages/Loader'
import { CartContext } from '../context/CartContext'

function Recommended({ handleProductClick, RecommendedProducts }) {
    const { addToCart, cartItems } = useContext(CartContext)
    const [btnLoader, setBtnLoader] = useState(null)
    const handleAddProductToCart = (product) => {
        try {
            setBtnLoader(product.id);
            setTimeout(() => {
                addToCart(product)
                toast.success("Product added to Cart");
                setBtnLoader(null);
            }, 1000);
        } catch (error) {
            setBtnLoader(null);
            toast.error(error.message);
        }
    }

    return (
        <div className="rrr">
            <div className="CartSectionHeading">
                <div className='hhBLeft textDesign'></div>
                <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>You May Also like</p>
                <div className="hhBRight textDesign"></div>
            </div>
            <div className="ttt">
                <div className="recommendedProductsCartPage">
                    {RecommendedProducts.map((product, index) => (
                        <div className='recommendedProductsCartPageSingle' key={index}>
                            <div className="cartProductImg">
                                <img src={product.mainImg} alt="cartRecommendedProductImg" onClick={() => handleProductClick(product)} />
                            </div>
                            <div className="cartProductDetails">
                                <div className="namePriceCart">
                                    <span className='cartProductName' onClick={() => handleProductClick(product)}>{product.name}</span>
                                    <span className='cartProductPrice'>{product.price}</span>
                                    <span className='cartProductMrp'>{product.mrp}</span>
                                </div>
                                <button className='filterBtn recommendedCartBtn' onClick={() => handleAddProductToCart(product)}>
                                    {btnLoader === product.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommended