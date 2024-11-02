import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import NotFound from "../assets/icons/404.jpg"

function Pages() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/collection/shopAll')
    }
    return (
        <Layout>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                </div>
                <div className="ProductPageMain">
                    <div className="pageSectionMain">
                        <img src={NotFound} alt="" />
                        <span className='pageNotFoundText'>Page Not Found !</span>
                        <button className='sortBtn' onClick={handleNavigate}>Return To Shop</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Pages