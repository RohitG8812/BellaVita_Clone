import React from 'react'
import Navbar from '../components/Navbar'
import TopSlider from '../components/TopSlider'

function Layout({ children }) {
    return (
        <div>
            <TopSlider />
            <Navbar />
            {children}
        </div>
    )
}

export default Layout