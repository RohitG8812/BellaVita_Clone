import React from 'react'
import OrderImg from "../assets/icons/ordersPage.svg"
import { useNavigate } from 'react-router-dom'

function Order() {
  const navigate = useNavigate()

  const handleAllProducts = () => {
    navigate('/collection/shopAll')
  }
  return (
    <div className='orderSectionMain'>
      <div className="orderSectionImg">
        <img src={OrderImg} alt="" />
      </div>
      <div className="orderSectionText">
        <p>You haven't placed any orders yet.</p>
        <p>We can't wait to have you as a customer.</p>
        <p>Take a look at our products here</p>
      </div>
      <div className="orderSecAllProductsBtn">
        <button className='filterBtn orderSecBtn' onClick={handleAllProducts}>All Products</button>
      </div>
    </div>
  )
}

export default Order