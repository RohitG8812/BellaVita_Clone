import React, { useEffect, useState } from 'react'
import Products from '../JSON/Products'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout';
console.log(Products)
function ShopAll() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const sortedProducts = [...Products].sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
        setProduct(sortedProducts);
    }, []);
    console.log(product)
    const navigate = useNavigate()

    const handleProductClick = (id) => {
        navigate(`/collection/allProducts/${id}`)
    }
    return (
        <Layout>
            <div>
                <h2>AllProducts</h2>
                <p>Total Products : {product.length}</p>
                {product.map((items, key) => {
                    return <div className="card" key={items.id} onClick={() => handleProductClick(items.id)}>
                        <img src={items.mainImg} alt="" />
                        <p>{items.name}</p>
                    </div>
                })}
            </div>
        </Layout>
    )
}

export default ShopAll