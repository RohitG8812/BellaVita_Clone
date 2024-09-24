import React, { useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';

function Perfumes() {
    const [perfume] = useState(Products.filter(product => product.category === 'perfumes'));
    console.log(perfume)
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/collection/perfumes/${id}`)
    }
    return (
        // <Layout>
            <div>
                <h2>Perfumes</h2>
                <p>Total Products : {perfume.length}</p>
                {perfume.map((items, key) => {
                    return <div className="card" key={items.id} onClick={() => handleProductClick(items.id)}>
                        <img src={items.mainImg} alt="" />
                        <p>{items.name}</p>
                    </div>
                })}
            </div>
        // </Layout>
    )
}

export default Perfumes