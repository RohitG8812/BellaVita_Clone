import React, { useContext, useEffect, useState } from 'react'
import OrderImg from "../assets/icons/ordersPage.svg"
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../auth/firebase'
import { doc, getDoc, or } from 'firebase/firestore'
import "../css/myOrders.css"
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import Right from "../assets/icons/rightar.svg"
import LeftArrow from "../assets/icons/leftArrow.svg"
import Discount from "../assets/icons/discount.svg"
import { CartContext } from '../context/CartContext'

function Order() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loader, setLoader] = useState(false);
  const [fullOrderDetailsOpen, setFullOrderDetailsOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)

  console.log(orders)

  useEffect(() => {
    const myOrders = async () => {
      setLoader(true)
      const user = auth.currentUser;
      if (!user) {
        setLoader(false)
        return;
      }
      try {
        const userDocRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setOrders(userData.myOrders || []);
        }
        setLoader(false)
      } catch (error) {
        setLoader(false)
        console.log(error.message)
      }
    }
    myOrders();
  }, [])

  const cartTotal = () => {
    return selectedOrder.items.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
      return total + itemPrice * item.quantity;
    }, 0).toFixed(2)
  }

  const handleAllProducts = () => {
    navigate('/collection/shopAll')
  }
  return (
    <div className='orderSectionMain'>
      {loader ? <div className='savedAddressLoader'><img src={SpinnerLoader} alt="loader" /></div> :
        orders.length > 0 ?
          fullOrderDetailsOpen ?
            <div className='fullOrderDetailsMain myOrderMain'>
              <div className="orderDetailsTop">
                <img src={LeftArrow} alt="" onClick={() => setFullOrderDetailsOpen(false)} />
                <span>ORDER DETAILS</span>
              </div>
              <div className='orderDetailsDateAndId orderItemsTop'>
                <p>Order ID - {selectedOrder.orderId}</p>
                <p>Date - {selectedOrder.date}</p>
              </div>
              <div className='orderDetailsItemsMap'>
                <p className='orderDetailOrderSummary orderItemsTop'>Order Summary</p>
                <div className='orderItems'>
                  {selectedOrder.items.map((item, i) => {
                    return <div key={i} className='orderItem'>
                      <img src={item.mainImg} alt={item.name} />
                      <div className="itemDetailsNameAndIcon">
                        <div className="itemNameAndPriceMyOrders">
                          <p className='ordersItemName'>{item.name}</p>
                          <p className='ordersItemName catAndQuantity'>Category: {item.category}</p>
                          <p className='ordersItemName catAndQuantity'>Quantity: {item.quantity}</p>
                        </div>
                        <div className="itemNameAndPriceMyOrders ">
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
              <div className="orderDetailsShipping">
                <p className='orderDetailOrderSummary orderItemsTop'>Shipping Details</p>
                <div className="orderDetailsFullAddress itemNameAndPriceMyOrders">
                  <span className='ordersItemName orderDetailsAddName'>{selectedOrder.selectedAdd.firstName} {selectedOrder.selectedAdd.lastName}</span>
                  <span className='ordersItemName'>{selectedOrder.selectedAdd.addressLine1},</span>
                  <span className='ordersItemName'>{selectedOrder.selectedAdd.addressLine2}, {selectedOrder.selectedAdd.city},</span>
                  <span className='ordersItemName'>{selectedOrder.selectedAdd.state} - {selectedOrder.selectedAdd.postalCode},</span>
                  <span className='ordersItemName'>{selectedOrder.selectedAdd.country}</span>
                  <span className='ordersItemName'>Phone Number: {selectedOrder.selectedAdd.contactNumber},</span>
                </div>
              </div>
              <div className="orderDetailsAppliedCouponMain">
                <p className='orderDetailOrderSummary orderItemsTop '>Applied Coupons</p>
                <div className="orderDetailsAppliedCoupon">
                  {selectedOrder.appliedCoupon.map((coupon, index) => {
                    return <div className={`orderDetailCouponName itemNameAndPriceMyOrders ${index === 0 ? "firstCouponOrderDetails" : ""}`}>
                      <div className='rrrr'>
                        <img src={Discount} alt="" />
                        <span className='ellipsisText'>{coupon.name}</span>
                      </div>
                      <div className='rrrr'>
                        <img src={Right} alt="" />
                      </div>
                    </div>
                  })}
                </div>
              </div>
              <div className="orderDetailsBillDetails">
                <p className='orderDetailOrderSummary orderItemsTop'>Bill Details</p>
                <div className="billDetailsMain">
                  <div className="subTotal  pricingDiv">
                    <span>Subtotal</span>
                    <span>₹{cartTotal()}</span>
                  </div>
                  <div className="couponDiscount pricingDiv">
                    <span>Coupon Discount</span>
                    <span>- ₹{selectedOrder.totalDiscount}</span>
                  </div>
                  <div className="shippingCost pricingDiv">
                    <span>Shipping</span>
                    <span>Free Delivery</span>
                  </div>
                  <div className="totalPriceLast pricingDiv">
                    <span> <span className='paidViaText'>Paid via:</span> {selectedOrder.selectedPayment}</span>
                    <span>₹{selectedOrder.totalAmount}</span>
                  </div>
                </div>
              </div>
              <div className='thankYouText'>
                <p>Thank You For Shopping With US ❤️ </p>
                <p> © 2024, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</p>
              </div>
            </div>
            :
            <div className='myOrderMain'>
              {orders.map((order, orderIndex) => (
                <div key={orderIndex}
                  className='orderContainer'
                  onClick={() => {
                    setFullOrderDetailsOpen(true);
                    setSelectedOrder(order);
                  }}>
                  <div className="orderItemsTop">
                    <p>Date - {order.date}</p>
                    <p>Order ID - {order.orderId}</p>
                  </div>
                  <div className='orderItemsAndIcon'>
                    <div className='orderItems'>
                      {order.items.map((item, itemIndex) => (
                        <div key={itemIndex} className='orderItem'>
                          <img src={item.mainImg} alt={item.name} />
                          <div className="itemDetailsNameAndIcon">
                            <div className="itemNameAndPriceMyOrders">
                              <p className='ordersItemName'>{item.name}</p>
                              <p className='ordersItemName'>Quantity - {item.quantity}</p>
                            </div>
                            <div className="rightIconToOpenDetails">
                              <img src={Right} alt="" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          :
          <>
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
          </>
      }
    </div >
  )
}

export default Order