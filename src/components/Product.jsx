import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../JSON/Products';
import Layout from '../Layout/Layout';

function Product() {
    const { id } = useParams()
    const product = Products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <h2>Product Not Found</h2>
    }
    console.log(product)
    return (
        <Layout>
            <div>
                <h1>{product.name}</h1>
                <img src={product.mainImg} alt="" />
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </Layout>
    )
}

export default Product