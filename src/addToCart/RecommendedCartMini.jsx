import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import Loader from '../pages/Loader'
import RecommendedProducts from '../JSON/RecommendedProducts'
import { CartContext } from '../context/CartContext'

function RecommendedCartMini({ handleProductClick }) {
    const { addToCart } = useContext(CartContext);
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
        <div className="cartRecommendationMini">
            <div className="miniRecommendedHeading">
                <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>You May Also like</p>
            </div>
            <div className=' recommendedProductCardMain'>
                <div className="recentSearchText recommendedProductCard">
                    {RecommendedProducts.map((product, index) => (
                        <div className="cartRecommendedMiniSingle" key={product.id} >
                            <div className="cartRecommendedProductsImgMiniMain" >
                                <img src={product.mainImg} alt="" className='cartRecommendedProductsImgMini' onClick={() => handleProductClick(product)} />
                            </div>
                            <div className="bottomCardSearch">
                                <p className='searchCardProductName ' onClick={() => handleProductClick(product)}>{product.name}</p>
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