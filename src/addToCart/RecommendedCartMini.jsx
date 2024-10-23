import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Loader from '../pages/Loader'
import RecommendedProducts from '../JSON/RecommendedProducts'

function RecommendedCartMini({ setCartItems, handleProductClick }) {
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
        <div className="cartRecommendationMini">
            <div className="miniRecommendedHeading">
                <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>You May Also like</p>
            </div>
            <div className=' recommendedProductCardMain'>
                <div className="recentSearchText recommendedProductCard">
                    {RecommendedProducts.map((product, index) => (
                        <div className="cartRecommendedMiniSingle" key={product.id} onClick={() => handleProductClick(product.id)}>
                            <div className="cartRecommendedProductsImgMiniMain" >
                                <img src={product.mainImg} alt="" className='cartRecommendedProductsImgMini' />
                            </div>
                            <div className="bottomCardSearch">
                                <p className='searchCardProductName '>{product.name}</p>
                                <div className="searchCardPrice">
                                    <p className=" cardProductPrice searchCardMrp">{product.mrp}</p>
                                    <p className='CardProductPrice searchCardP'>{product.price}</p>
                                </div>
                                <div>
                                    <button className='filterBtn recommendedCartBtn' onClick={() => handleAddProductToCart(product)}>
                                        {btnLoader === product.id ? <div className='btnLoader'><Loader /></div> : "ADD TO CART"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecommendedCartMini