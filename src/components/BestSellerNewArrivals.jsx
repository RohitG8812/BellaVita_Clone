import React, { useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom';
import RatingLogo from "../assets/icons/rating.svg"
import ReviewsLogo from "../assets/icons/reviews.svg"

function BestSellerNewArrivals() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('bestSellers')
  const [actCategory, setActCategory] = useState(true)
  const perfumes = Products.filter(product => product.category === 'perfumes');
  const bath_Body = Products.filter(product => product.category === 'bathBody');
  console.log("Perfumes : ", perfumes)
  const changeCategory = (category) => {
    setActCategory(false)
    setCategory(category)
    setActCategory(true)
  }

  const handleProductClick = (id) => {
    navigate(`/collection/${category}/${id}`)
  }

  const viewAllProducts = (category) => {
    navigate(`/collection/${category}`)
  }

  console.log(category)
  const products = (category === 'bestSellers') ? perfumes : bath_Body
  const displayProducts = products.slice(0, 8)
  console.log(products)
  console.log('Selected Category:', category);
  console.log('Displayed Products:', displayProducts);
  return (
    <div className='categoryMain'>
      <div className={`categoryBtn`}>
        <button className={category === 'bestSellers' ? 'activeTab' : ''} onClick={() => changeCategory('bestSellers')}>BestSellers</button>
        <p className='middleArrowMain'>|</p>
        <button className={`newArrivalBtn ${category === 'newArrivals' ? 'activeTab' : ''}`} onClick={() => changeCategory('newArrivals')}>New Arrivals</button>
      </div>
      <div className="categoryCard">
        {displayProducts.map((product, index) => {
          return <div className="card" key={product.id} onClick={() => handleProductClick(product.id)}>
            <div className="cardImg">
              <img src={product.mainImg} alt="" className='cardImg2' />
            </div>
            <div className="cardBottomText">
              <div className="topText">
                <p className='cardProductVariant'>{product.variant}</p>
                <p className='cardProductName'>{product.name}</p>
                <div className="ratingReviews">
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
                <p className='cardProductPrice'>{product.price}</p>
              </div>
              <div className="addToCartBtn">
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        })}
      </div>
      <div className="viewAll">
        <button onClick={() => viewAllProducts(category)}>View All</button>
      </div>
    </div>
  )
}

export default BestSellerNewArrivals