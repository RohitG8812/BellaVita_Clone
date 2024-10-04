import React from 'react'
import Navbar from '../components/Navbar'
import TopSlider from '../components/TopSlider'
import Footer from '../HomePage/Footer'

function Layout({ children }) {
    return (
        <div>
            <TopSlider />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout