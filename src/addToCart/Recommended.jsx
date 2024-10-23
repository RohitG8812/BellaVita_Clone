import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loader from '../pages/Loader'
import RecommendedProducts from '../JSON/RecommendedProducts'

function Recommended({ setCartItems, handleProductClick }) {
    const [btnLoader, setBtnLoader] = useState(null)
    const handleAddProductToCart = (product) => {
        try {
            setBtnLoader(product.id);
            const currCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const currProductIndex = currCartItems.findIndex(item => item.id === product.id);
            if (currProductIndex !== -1) {
                currCartItems[currProductIndex].quantity = (currCartItems[currProductIndex].quantity || 1) + 1
            } else {
                const newProduct = { ...product, quantity: 1 };
                currCartItems.push(newProduct);
            }
            localStorage.setItem('cartItems', JSON.stringify(currCartItems));
            setTimeout(() => {
                setCartItems(currCartItems);
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
                                <img src={product.mainImg} alt="cartRecommendedProductImg" onClick={() => handleProductClick(product.id)} />
                            </div>
                            <div className="cartProductDetails">
                                <div className="namePriceCart">
                                    <span className='cartProductName' onClick={() => handleProductClick(product.id)}>{product.name}</span>
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