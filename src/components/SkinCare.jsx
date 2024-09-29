import React, { useState, useEffect } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import "../css/productCard.css"
import SKinCareBanner from "../assets/Banner/productBanner/skinCareBanner.webp"
import SkinCareBannerMini from "../assets/Banner/productBanner/skinCareBannerMini.webp"
import ProductPage from '../pages/ProductPage';

function SkinCare() {
  const [bath_Body] = useState(Products.filter(product => product.category === 'bathBody'))
  const [smallBanner, setSmallBanner] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 751) {
        setSmallBanner(true);
      } else {
        setSmallBanner(false)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(bath_Body)
  const navigate = useNavigate()
  const handleProductClick = (id) => {
    navigate(`/collection/bathBody/${id}`)
  }
  return (
    <Layout>
      <div className="shopAllMain">
        <div className="topSide">
          <div className="hideDiv"></div>
          <div className="shopAllBanner">
            <img src={smallBanner ? SkinCareBannerMini : SKinCareBanner} alt="Banner" />
          </div>
        </div>
        <div className='ProductPageMain ShopAll'>
          <div className="hide">
            <ProductPage product={bath_Body} heading={"Skin Care"} handleProductClick={handleProductClick} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SkinCare