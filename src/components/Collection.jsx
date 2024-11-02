import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import "../css/collectionOrPages.css"
import ShopAllBanner from "../assets/Banner/productBanner/ShopAllBanner.webp"
import ShopAllBannerMini from "../assets/Banner/productBanner/ShopAllBannerMini.webp"
import CollectionData from '../JSON/Collection'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"


function Collection() {
    const [collection, setCollection] = useState(CollectionData || [])
    const [smallBanner, setSmallBanner] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()
    console.log(collection)
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

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }, [])

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
                    <div className='mainContent'>
                        <span className='productCardHeading'>Collection</span>
                        <div className="conditions">
                            <p>1. Add minimum 2 Eligible Products to your cart</p>
                            <p>2. BOGO Offer will be automatically applied at checkout</p>
                            <p>3. Same/Low priced product will be FREE</p>
                        </div>
                        <div className={`CollectionCardMain `} >
                            {collection.length > 0 ? collection.map((items, index) => {
                                return <div className="CollectionCard" key={items.id}>
                                    <div className='cardImgCollection' style={{ backgroundColor: loader ? "#fff" : "#f2f2f2" }} onClick={() => navigate(items.to)}>
                                        {loader ? <img src={SpinnerLoader} alt="" className='ProductCardImg' /> :
                                            <img src={items.img} alt="" className='ProductCardImg' />}
                                    </div>
                                    <div className="cardImgTextCollection">
                                        <span className='cardTextCollection'>{items.name}</span>
                                    </div>
                                </div>
                            }) : "No Data Available 🧐"}
                        </div>
                    </div>

                </div>


            </div>

        </Layout>
    )
}

export default Collection