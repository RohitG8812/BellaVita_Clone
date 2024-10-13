import React, { useState, useEffect } from 'react'
import "../css/productCard.css"
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'
import ProductPage from '../pages/ProductPage';
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"

const ShopAllCategoryFilter = [
  { value: "man", label: "Man" },
  { value: "women", label: "Women" },
  { value: "luxury", label: "Luxury" },
  { value: "comboProducts", label: "Gift Sets" },
  { value: "oud", label: "OUD" },
  { value: "forAll", label: "For All" },
]

const shopAllProductType = [
  { value: "Parfum", label: "Parfum" },
  { value: "Eau De Parfum", label: "Eau De Parfum" },
  { value: "ShowerGel", label: "Shower Gel" },
  { value: "BodyWash", label: "Body Wash" },
  { value: "BodyLotion", label: "Body Lotion" },
]

function NewArrivals() {
  const [product] = useState(Products.sort((a, b) => a.name.localeCompare(b.name)));
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

  const navigate = useNavigate()

  const handleProductClick = (id) => {
    navigate(`/collection/shopAll/${id}`)
  }
  return (
    <Layout>
      <div className="shopAllMain">
        <div className="topSide">
          <div className="hideDiv"></div>
          <div className="shopAllBanner">
            <img src={smallBanner ? ShopAllBannerMini : ShopAllBanner} alt="Banner" />
          </div>
        </div>
        <div className='ProductPageMain ShopAll'>
          <div className="hide">
            <ProductPage
              product={product}
              heading={"New Arrivals"}
              handleProductClick={handleProductClick}
              categoryFilter={ShopAllCategoryFilter}
              productTypeFilter={shopAllProductType}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewArrivals