import React, { useState, useEffect } from 'react'
import "../css/productCard.css"
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom';
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"
import ProductPage from '../pages/ProductPage';

const perfumesCategoryFilter = [
  { value: "man", label: "Man" },
  { value: "women", label: "Women" },
  { value: "luxury", label: "Luxury" },
  { value: "comboProducts", label: "Perfume Combo" },
  { value: "oud", label: "OUD" },
  { value: "forAll", label: "For All" },
]

const perfumesTypeFilter = [
  { value: "Parfum", label: "Parfum" },
  { value: "Eau De Parfum", label: "Eau De Parfum" },
  { value: "Eau De Parfum For Women", label: "Eau De Parfum Women" },
  { value: "Eau De Parfum For All", label: "Eau De Parfum For All" },
  { value: "Attar for All", label: "Attar for All" },
]

function BestSellers() {
  const [perfume] = useState(Products.filter(product => product.category === 'perfumes'));
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
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    const formattedName = product.name.replace(/\s+/g, '-');
    navigate(`/collection/perfumes/${product.id}/${formattedName}`)
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
              product={perfume}
              heading={"BestSellers"}
              handleProductClick={handleProductClick}
              categoryFilter={perfumesCategoryFilter}
              productTypeFilter={perfumesTypeFilter}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BestSellers