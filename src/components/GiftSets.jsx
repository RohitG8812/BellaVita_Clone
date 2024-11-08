import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Products from '../JSON/Products'
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"
import { useNavigate } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import { RecentlyViewedContext } from '../context/RecentlyViewedContext'


const giftSetCategoryFilter = [
  { value: "man", label: "Man" },
  { value: "women", label: "Women" },
  { value: "luxury", label: "Luxury" },
  { value: "oud", label: "OUD" },
  { value: "forAll", label: "For All" },
]

const giftSetTypeFilter = [
  { value: "Parfum", label: "Parfum" },
  { value: "Eau De Parfum", label: "Eau De Parfum" },
  { value: "ShowerGel", label: "Shower Gel" },
  { value: "BodyWash", label: "Body Wash" },
  { value: "BodyLotion", label: "Body Lotion" },
]

function GiftSets() {
  const [giftSets] = useState(Products.filter(product => product.productType === "comboProducts"))
  const [smallBanner, setSmallBanner] = useState(false);
  const navigate = useNavigate()
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

  const handleProductClick = (product) => {
    addRecentlyViewed(product)
    const formattedName = product.name.replace(/\s+/g, '-');
    navigate(`/collection/shopAll/${product.id}/${formattedName}`)
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
              product={giftSets}
              heading={"Gift Sets"}
              handleProductClick={handleProductClick}
              categoryFilter={giftSetCategoryFilter}
              productTypeFilter={giftSetTypeFilter}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GiftSets