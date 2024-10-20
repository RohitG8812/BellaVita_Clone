import React from 'react'
import { useNavigate } from 'react-router-dom'
import RightArrow from "../assets/icons/rightArrow.svg"
import CloseBtn from "../assets/icons/x.svg"
import "../css/Search.css"

const recommendedProducts = [
  {
    id: 106,
    name: "TAAJ Gold OUD Attar - 12ml",
    img: "https://bellavitaorganic.com/cdn/shop/files/Taaj-00.jpg?v=1712321132&width=1000",
    price: "₹425.00",
    mrp: "₹599.00",
    discount: "30%",
  },
  {
    id: 110,
    name: "SENORITA Woman Perfume - 100ml",
    img: "https://bellavitaorganic.com/cdn/shop/files/1_41d6b2ca-f10a-4f45-b36f-2f066941c5bf.jpg?v=1714554652&width=1000",
    price: "₹515.00",
    mrp: "₹899.00",
    discount: "43%",
  },
  {
    id: 112,
    name: "Hot & Classy",
    img: "https://bellavitaorganic.com/cdn/shop/files/Hot-_-classy-2_2.jpg?v=1707985653&width=1000",
    price: "₹899.00",
    mrp: "₹1199.00",
    discount: "26%",
  },
  {
    id: 101,
    name: "Luxury Perfume Gift Set For Men - 4 x 20ml",
    img: "https://bellavitaorganic.com/cdn/shop/files/front_2.jpg?v=1723645186&width=1000",
    price: "₹519.00",
    mrp: "₹849.00",
    bestSeller: "bestSeller",
    discount: "39%"
  },
  {
    id: 102,
    name: "CEO Man Luxury Perfume - 100ml",
    price: "₹475.00",
    mrp: "₹899.00",
    discount: "48%",
    img: "https://bellavitaorganic.com/cdn/shop/files/1_f3651453-9ace-4b6e-b0ac-4ee2b9e5e7cd.jpg?v=1714548565&width=1000",
  },
  {
    id: 105,
    name: "DATE Woman Perfume - 100ml",
    price: "₹549.00",
    mrp: "₹999.00",
    discount: "46%",
    img: "https://bellavitaorganic.com/cdn/shop/files/1_d5115b80-e607-4477-9205-b78447cd0e10.jpg?v=1714549127&width=1000",
  },
  {
    id: 109,
    name: "D.I.V.A. Woman - 100ml",
    price: "₹849.00",
    mrp: "₹1099.00",
    discount: "23%",
    img: "https://bellavitaorganic.com/cdn/shop/files/1_7123d0a0-0394-404c-88ce-1a9be9a12f17.jpg?v=1714549259&width=1000",
  },
  {
    id: 114,
    name: "BLU Man - 100ml",
    price: "₹849.00",
    mrp: "₹1099.00",
    discount: "23%",
    img: "https://bellavitaorganic.com/cdn/shop/files/1_882dadd1-43e2-4c85-a8a6-0da791b34d8f.jpg?v=1714548090&width=1000",
  },
  {
    id: 117,
    name: "Honey Oud Unisex Perfume - 100ml",
    price: "₹549.00",
    mrp: "₹999.00",
    discount: "46%",
    img: "https://bellavitaorganic.com/cdn/shop/files/Honey-Oud_1_0194a97a-68e8-4039-9f4f-86ae427f4707.jpg?v=1714553484&width=1000",
  },
  {
    id: 118,
    name: "OCEAN Man - 100ml",
    price: "₹849.00",
    mrp: "₹1099.00",
    discount: "23%",
    img: "https://bellavitaorganic.com/cdn/shop/files/Ocean-01_6cd0a2ed-3b3e-462a-a818-c2c2346b30c5.jpg?v=1717665492&width=1000",
  }
]

function AddToCartPage() {
  const navigate = useNavigate()

  const handleProductClick = (id) => {
    navigate(`/collection/shopAll/${id}`)
  }
  return (
    <div className='CartPageMainContainer'>
      {/* Cart Recommended Big */}
      <div className="rrr">
        <div className="cartRecommendation">
          <div className="CartSectionHeading">
            <div className='hhBLeft textDesign'></div>
            <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>You May Also like</p>
            <div className="hhBRight textDesign"></div>
          </div>
          <div className="recommendedProductsCartPage">
            {recommendedProducts.map((product) => (
              <div className='recommendedProductsCartPageSingle'>
                <div className="cartProductImg">
                  <img src={product.img} alt="cartRecommendedProductImg" onClick={() => handleProductClick(product.id)} />
                </div>
                <div className="cartProductDetails">
                  <div className="namePriceCart">
                    <span className='cartProductName' onClick={() => handleProductClick(product.id)}>{product.name}</span>
                    <span className='cartProductPrice'>{product.price}</span>
                    <span className='cartProductMrp'>{product.mrp}</span>
                  </div>
                  <button className='filterBtn recommendedCartBtn'>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cartProductMain">
        {/* Cart Main */}
        <div className="cartProductList">
          <div className="cartAndCLoseCart">
            <p className='accountWelcomeBellavita recommendationProductsCartPage'>Cart</p>
            <img src={CloseBtn} alt="CLoseBtn" />
          </div>
          <div className="marqueeContainer">
            <div className="marqueeText">
              <span>Free Gift worth ₹99 on all prepaid orders &emsp; &emsp; &emsp; &emsp;</span>
              {/* <span>Free Gift worth ₹99 on all prepaid orders &emsp; &emsp; &emsp; &emsp;</span> */}
            </div>
          </div>
        </div>
        {/* Cart Recommended Mini */}
        <div className="cartRecommendationMini">
          <div className="miniRecommendedHeading">
            <div className='hhLeft textDesign'></div>
            <p className='accountWelcomeBellavita recommendationProductsCartPage miniProductRecommended'>You May Also like</p>
            <div className="hhRight textDesign"></div>
          </div>
          <div className=' recommendedProductCardMain'>
            <div className="recentSearchText recommendedProductCard">
              {recommendedProducts.map((product, index) => (
                <div className="cartRecommendedMiniSingle" key={product.id} onClick={() => handleProductClick(product.id)}>
                  <div className="cartRecommendedProductsImgMiniMain" >
                    <img src={product.img} alt="" className='cartRecommendedProductsImgMini' />
                  </div>
                  <div className="bottomCardSearch">
                    <p className='searchCardProductName '>{product.name}</p>
                    <div className="searchCardPrice">
                      <p className=" cardProductPrice searchCardMrp">{product.mrp}</p>
                      <p className='CardProductPrice searchCardP'>{product.price}</p>
                    </div>
                    <div>
                      <button className='filterBtn recommendedCartBtn'>Add TO Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AddToCartPage