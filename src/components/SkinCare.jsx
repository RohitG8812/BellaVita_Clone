import React, { useState, useEffect, useContext } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import "../css/productCard.css"
import SKinCareBanner from "../assets/Banner/productBanner/skinCareBanner.webp"
import SkinCareBannerMini from "../assets/Banner/productBanner/skinCareBannerMini.webp"
import ProductPage from '../pages/ProductPage';

const bathBodyCategoryFilter = [
  { value: "comboProducts", label: "BathBody Combo" },
  { value: "man", label: "Man" },
  { value: "women", label: "Women" },
  { value: "luxury", label: "Luxury" },
  { value: "oud", label: "OUD" },
]

const bathBodyProductType = [
  { value: "ShowerGel", label: "Shower Gel" },
  { value: "BodyWash", label: "Body Wash" },
  { value: "BodyLotion", label: "Body Lotion" },
  { value: "bathBodyCombo", label: "Bath & Body Combo" },
]

function SkinCare() {
  const [bath_Body] = useState(Products.filter(product => product.category === 'bathBody'))
  const [smallBanner, setSmallBanner] = useState(false);
  const { addRecentlyViewed } = useContext(RecentlyViewedContext)

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

  const navigate = useNavigate()

  const handleProductClick = (product) => {
    addRecentlyViewed(product)
    const formattedName = product.name.replace(/\s+/g, '-');
    navigate(`/collection/bathBody/${product.id}/${formattedName}`)
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
            <ProductPage
              product={bath_Body}
              heading={"Skin Care"}
              handleProductClick={handleProductClick}
              productTypeFilter={bathBodyProductType}
              categoryFilter={bathBodyCategoryFilter}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SkinCare