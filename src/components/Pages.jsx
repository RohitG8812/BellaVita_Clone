import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

function Pages() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/collection/shopAll')
    }
    return (
        <Layout>
            <span>404 Page Not FOund</span>
            <div>
                <button onClick={handleNavigate}>Return to SHop</button>
            </div>
        </Layout>
    )
}

export default Pages