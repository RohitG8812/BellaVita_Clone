import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Layout from '../Layout/Layout'

function Collection() {
    return (
        <Layout>
            <div>
                <h2>Collection</h2>
                <Link to="allProducts"> All Products</Link>
                <Link to="perfumes" >Perfumes</Link >
                <Link to="bathBody" >Bath & Body</Link >
                <Link to="makeup" >Makeup</Link >
                <Outlet />
            </div>
        </Layout>
    )
}

export default Collection