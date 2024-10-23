import React from 'react'
import Layout from '../Layout/Layout'
import "../css/crazyDeals.css"
import upbImg from "../assets/Banner/crazyDeals/utb.webp"
import slkImg from "../assets/Banner/crazyDeals/slk.webp"
import ppcImg from "../assets/Banner/crazyDeals/ppc.webp"
import sscImg from "../assets/Banner/crazyDeals/ssc.webp"
import bmhImg from "../assets/Banner/crazyDeals/bmh.webp"
import hscImg from "../assets/Banner/crazyDeals/hsc.webp"
import bmcmImg from "../assets/Banner/crazyDeals/bmcm.webp"
import pjImg from "../assets/Banner/crazyDeals/pj.webp"
import tpmtImg from "../assets/Banner/crazyDeals/tpmt.webp"
import dekImg from "../assets/Banner/crazyDeals/dek.webp"
import ssc2Img from "../assets/Banner/crazyDeals/ssc2.webp"
import { useNavigate } from 'react-router-dom'

function CrazyDeals() {
  const navigate = useNavigate()

  const products = [
    { id: 1, to: `/collection/shopAll/116`, name: "ULTIMATE PERFUME BOX", img: upbImg, description: "A unique box for all. Take advantage of BellaVita’s luxury perfume box by selecting a perfume from any category of perfumes for men, women and unisex fragrances. Enjoy the big savings and a versatile collection suitable for everyone." },
    { id: 2, to: `/collection/shopAll/106`, name: "SELF LOVE KIT", img: slkImg, description: "Take care of yourself with our Self Love Kit. It has six items to help you relax and feel good. Only ₹999 for everything you need for a relaxing day at home." },
    { id: 3, to: `/collection/shopAll/108`, name: "PREMIUM PERFUME COMBO", img: ppcImg, description: "Elevate your fragrance game with our Premium Perfume combo. Choose one of our exquisite perfume gift sets and pair it with any two of our premium 100 ml perfumes. Whether you're looking to dazzle or indulge, this combo offers a perfect mix of elegance and allure." },
    { id: 4, to: `/collection/shopAll/126`, name: "SCENT SHOWER COMBO", img: sscImg, description: "Elevate your scent game with our exclusive combo of perfumes & shower gel! Enjoy two 100 ml signature perfumes and a 250 ml shower gel at just Rs 999. Ideal for daily indulgence or special moments, this set is the perfect gift to pamper yourself or someone special. Experience elegance and freshness in one luxurious combo!" },
    { id: 5, to: `/collection/shopAll/302`, name: "BEAUTY MUST HAVES", img: bmhImg, description: "Our crazy combo offers you 4 bestselling Kiss Proof Liquid Lipstick shades in minis, in a packaging that screams special and personalised. Apart from that you get to pick 2 other products from our range of oh-so-delicious smelling full-sized perfumes and eye products that include all our Intense Drama Eyeliner and Kajal shades. If you're looking to make someone extremely happy, then this is the pick for you!" },
    { id: 6, to: `/collection/shopAll/213`, name: "HELLO SUMMER COMBO", img: hscImg, description: "It's getting hot and we have a hotter deal for you! Select 1 100ml perfume, 1 500ml Shower Gel and 1 100ml Body Deo of your choice and add it to your cart! Get 3 full-sized products to stay super cool this summer!" },
    { id: 7, to: `/collection/shopAll/123`, name: "BADE MIYA CHHOTE MIYA", img: bmcmImg, description: "Get a full-sized 100ml perfume bottle along with a 20ml perfume of your choice so that your favourite perfumes stay with you. Keep the big bottle at home and the small bottle with you so that you can smell fresh, always." },
    { id: 8, to: `/collection/shopAll/120`, name: "PERFECT JODI", img: pjImg, description: "If you’re struggling to choose your favourite 100 ml perfume, we’re here to sweeten the deal. Instead of choosing just one, use this crazy deal to bring home 2 of our best-selling 100 ml perfumes. " },
    { id: 9, to: `/collection/shopAll/304`, name: "THE PERFECT MATTE TRIO", img: tpmtImg, description: "Customize your set of three matte lipsticks in the shades you absolutely love! Pick from our ten stunning variants of Kiss-Proof Liquid Lipstick & Comfort Matte Bullet Lipstick. Enjoy a long-lasting, smudge-proof colour with a dreamy matte finish. This trio is perfect for any occasion and offers the ideal shades for all your styles. Elevate your lip game and embrace your confidence today!" },
    { id: 10, to: `/collection/shopAll/124`, name: "DAILY ESSENTIAL KIT", img: dekImg, description: "Discover the perfect start to your skincare routine with our Daily Essential Kit. Choose any 4 essentials for just Rs. 799. Nourish, hydrate, and protect your skin, revealing a radiant complexion. A perfect treat for yourself or a gift." },
    { id: 11, to: `/collection/shopAll/104`, name: "SCENT SQUAD COMBO", img: ssc2Img, description: "Build the ultimate self-care squad with our Scent Squad combo. Pick one of our three luxury gift sets, a 100 ml perfume, and a 250 ml shower gel of your choice. Whether it’s for a special moment or a daily boost, this kit brings freshness and elegance to every spritz and wash. Treat yourself with a combo that turns everyday routines into a pampering ritual." },
  ];
  return (
    <Layout>
      <div className="shopAllMain">
        <div className="topSide">
          <div className="hideDiv"></div>
        </div>
        <div className='ProductPageMain ShopAll'>
          <div className="hide">
            {products.map((product, index) => (
              <div className={`singleSectionCd ${[1, 3, 5, 7, 9, 11].includes(index) ? "reverseSectionCd" : ""}`} key={index}>
                <div className="singleSectionCdImg">
                  <img src={product.img} alt="" />
                </div>
                <div className="cdd">
                  <div className={`singleSectionCdDetails ${[1, 3, 5, 7, 9, 11].includes(index) ? "reverseSectionCdDetails" : ""}`}>
                    <p className='singleSectionCdDetailsHeading'>{product.name}</p>
                    <p className='singleSectionCdDetailsDesc'>{product.description}</p>
                    <div className="addToCartBtn">
                      <button onClick={() => navigate(product.to)}>View Product</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CrazyDeals