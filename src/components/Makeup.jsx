import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'

function Makeup() {
    const [makeup] = useState(Products.filter(product => product.category === 'makeup'))
    console.log(makeup)
    const navigate = useNavigate()
    const handleProductClick = (id) => {
        navigate(`/collection/makeup/${id}`)
    }
    return (
        <Layout>
            <div>
                <h2>MakeUp</h2>
                <p>Total Products : {makeup.length}</p>
                {makeup.map((items, key) => {
                    return <div className="card" key={items.id} onClick={() => handleProductClick(items.id)}>
                        <img src={items.mainImg} alt="" />
                        <p>{items.name}</p>
                    </div>
                })}
            </div>
        </Layout>
    )
}

export default Makeup