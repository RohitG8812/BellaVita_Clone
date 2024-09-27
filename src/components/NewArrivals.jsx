import React, { useState } from 'react'
import Products from '../JSON/Products'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'

function NewArrivals() {
  const [bath_Body] = useState(Products.filter(product => product.category === 'bathBody'))
  console.log(bath_Body)
  const navigate = useNavigate()
  const handleProductClick = (id) => {
    navigate(`/collection/bathBody/${id}`)
  }
  return (
    <Layout>
      <div>
        <h2>Bath & Body</h2>
        <p>Total Products : {bath_Body.length}</p>
        {bath_Body.map((items, key) => {
          return <div className="card" key={items.id} onClick={() => handleProductClick(items.id)}>
            <img src={items.mainImg} alt="" />
            <p>{items.name}</p>
          </div>
        })}
      </div>
    </Layout>
  )
}

export default NewArrivals