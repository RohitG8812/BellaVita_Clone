import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import Tag from "../assets/icons/tag.svg"
import CloseBtn from "../assets/icons/x.svg"
import PlusBtn from "../assets/icons/plusL.svg"
import MinusBtn from "../assets/icons/minus.svg"
import GreenDownArrow from "../assets/icons/greenArrowDown.svg"
import "../css/Search.css"
import Recommended from './Recommended'
import RecommendedCartMini from './RecommendedCartMini'
// import { toast } from 'react-toastify'
import CheckOutPage from './CheckOutPage'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../auth/firebase'
import Loader from '../pages/Loader'
import toast from 'react-hot-toast'

function AddToCartPage({ toggleDrawer }) {
  const [cartItems, setCartItems] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0);
  const [openCheckOutPage, setOpenCheckOutPage] = useState(false);
  const [user, setUser] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || []
    setCartItems(cartItemsFromLocalStorage)
  }, [])

  const handleRemoveProductFromCart = (prevProduct) => {
    try {
      toast.success("Product Removed from cart")
      const updateCartItems = cartItems.filter((product => product.id !== prevProduct.id))
      setCartItems(updateCartItems)
      localStorage.setItem('cartItems', JSON.stringify(updateCartItems))
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleDecreaseQuantity = (product) => {
    try {
      const currCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const currProductIndex = currCartItems.findIndex(item => item.id === product.id);
      if (currProductIndex !== -1) {
        const updatedCardItems = [...currCartItems];
        if (updatedCardItems[currProductIndex].quantity > 1) {
          updatedCardItems[currProductIndex].quantity -= 1;
          toast.success("Product quantity decreased to " + updatedCardItems[currProductIndex].quantity);
        } else {
          toast.success("Product remove from cart")
          updatedCardItems.splice(currProductIndex, 1)
        }
        localStorage.setItem('cartItems', JSON.stringify(updatedCardItems));
        setCartItems(updatedCardItems)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleIncreaseQuantity = (product) => {
    try {
      const currCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const currProductIndex = currCartItems.findIndex(item => item.id === product.id);
      if (currProductIndex !== -1) {
        const updatedCardItems = [...currCartItems];
        if (updatedCardItems[currProductIndex].quantity > 0) {
          updatedCardItems[currProductIndex].quantity += 1
          toast.success("Product quantity increased to " + updatedCardItems[currProductIndex].quantity);
        }
        localStorage.setItem('cartItems', JSON.stringify(updatedCardItems));
        setCartItems(updatedCardItems)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalCount);
  })

  const handleCheckOut = () => {
    if (user) {
      setBtnLoader(true);
      setTimeout(() => {
        setBtnLoader(false)
        setOpenCheckOutPage(true)
      }, 1000)
    } else {
      toast.warning("Please login first to check out")
      navigate('/account/login')
    }
  }

  const handleProductClick = (id) => {
    navigate(`/collection/shopAll/${id}`)
  }
  return (
    <>
      {openCheckOutPage ? <CheckOutPage setCartItems={setCartItems} cartItems={cartItems} setOpenCheckOutPage={setOpenCheckOutPage} handleRemoveProductFromCart={handleRemoveProductFromCart} cartItemCount={cartItemCount} toggleDrawer={toggleDrawer} /> :
        <div className='CartPageMainContainer'>
          {/* Cart Recommended Big */}
          <Recommended setCartItems={setCartItems} handleProductClick={handleProductClick} />
          <div className="cartProductMain">
            {/* Cart Main */}
            <div className="cartProductList">
              <div className="cartProductListTopSection">
                <div className="cartAndCLoseCart">
                  <p className='accountWelcomeBellavita recommendationProductsCartPage'>Cart</p>
                  <div className='cartAndCLoseCartCloseBtn'><img src={CloseBtn} alt="CLoseBtn" onClick={() => toggleDrawer(false)} /></div>
                </div>
                <div className="marqueeContainer">
                  <div className="marqueeText">
                    <span>Free Gift worth ₹99 on all prepaid orders </span>
                    <span>Free Gift worth ₹99 on all prepaid orders </span>
                    <span>Free Gift worth ₹99 on all prepaid orders </span>
                    <span>Free Gift worth ₹99 on all prepaid orders </span>
                  </div>
                </div>
              </div>
              <div className="cartProductListBottomSection">
                {cartItems.length === 0 ? (
                  <div className='cartIsEmpty'>
                    <p className='emptyCartText'>Your cart is Currently empty !</p>
                    <div className='emptyCartProductsLink'>
                      <button className='sortBtn' onClick={() => navigate('/collection/bestSellers')}>Bestsellers</button>
                      <button className='sortBtn' onClick={() => navigate('/collection/perfumes')}>Perfumes</button>
                      <button className='sortBtn' onClick={() => navigate('/collection/newArrivals')}>New Arrivals</button>
                      <button className='sortBtn' onClick={() => navigate('/collection/giftSets')}>Gift Sets</button>
                    </div>
                  </div>
                ) : (
                  <div className='cartItemsProductMain'>
                    {cartItems.map((items, index) => {
                      return <div className='cartItemsProduct' key={index}>
                        <div className="cartItemProductTop">
                          <div className="cartItemsProductImg" onClick={() => handleProductClick(items.id)}>
                            <img src={items.mainImg} alt="cartImg" />
                          </div>
                          <div className="cartItemsProductDetails">
                            <div className='cartSingleNameAndCloseBtn'>
                              <span className='cartItemSingleName' onClick={() => handleProductClick(items.id)}>{items.name}</span>
                              <img src={CloseBtn} alt="" onClick={() => handleRemoveProductFromCart(items)} />
                            </div>
                            <div className='buyMoreSaveMore'>
                              <img src={Tag} alt="" />
                              <span>Buy More Save More</span>
                            </div>
                            <div className='buyMoreSaveMoreDiscount'>
                              <img src={GreenDownArrow} alt="" className='greenArrow' />
                              <span>{items.discount} Discount</span>
                            </div>
                          </div>
                        </div>
                        <div className="cartItemProductBottom">
                          <div className="cartQuantityBtn">
                            <img onClick={() => handleDecreaseQuantity(items)} src={MinusBtn} alt="" />
                            <span className='itemQuantity'>{items.quantity}</span>
                            <img onClick={() => handleIncreaseQuantity(items)} src={PlusBtn} alt="" />
                          </div>
                          <div className="cartItemProductPrice">
                            <span className='cartItemProductPriceMrp'>{`₹${(parseFloat(items.mrp.replace(/[₹,]/g, '')) * items.quantity).toFixed(2)}`} </span>
                            <span className='cartItemProductPPrice'> {`₹${(parseFloat(items.price.replace(/[₹,]/g, '')) * items.quantity).toFixed(2)}`}  </span>
                          </div>
                        </div>
                      </div>
                    })}
                    <div className='cartItemsCount'>Total Items in Your Cart : {cartItemCount}</div>
                  </div>
                )}
                {/* Cart Recommended Mini */}
                <RecommendedCartMini setCartItems={setCartItems} handleProductClick={handleProductClick} />
              </div>
              <div className="checkOutBtnMain">
                <p className='shippingText'>Tax included. <span className='shippingPolicyLinkText' onClick={() => navigate('/pages/shippingPolicy')} >Shipping</span> calculated at checkout.</p>
                <button className='filterBtn checkOutBtn' onClick={handleCheckOut}>
                  {btnLoader ? <div className='btnLoader'><Loader /></div> :
                    cartItems.length > 0 ? `Check out - ₹${cartItems.reduce((total, item) => {
                      const itemPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
                      return total + itemPrice * item.quantity;
                    }, 0).toFixed(2)}` : "No Items in Your Cart"
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}


export default AddToCartPage