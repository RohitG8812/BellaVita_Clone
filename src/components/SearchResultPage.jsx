import React, { useContext, useEffect, useState } from 'react'
import Layout from "../Layout/Layout"
import { useLocation, useNavigate } from 'react-router-dom'
import ProductPage from '../pages/ProductPage';
import "../css/productCard.css"
import Products from '../JSON/Products';
import { RecentlyViewedContext } from '../context/RecentlyViewedContext';


const ShopAllCategoryFilter = [
    { value: "man", label: "Man" },
    { value: "women", label: "Women" },
    { value: "luxury", label: "Luxury" },
    { value: "comboProducts", label: "Gift Sets" },
    { value: "oud", label: "OUD" },
    { value: "forAll", label: "For All" },
]

const shopAllProductType = [
    { value: "Parfum", label: "Parfum" },
    { value: "Eau De Parfum", label: "Eau De Parfum" },
    { value: "ShowerGel", label: "Shower Gel" },
    { value: "BodyWash", label: "Body Wash" },
    { value: "BodyLotion", label: "Body Lotion" },
]


function SearchResultPage() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const SearchQuery = queryParams.get('query')
    const navigate = useNavigate()
    const [searchResultsProducts, setSearchResultsProducts] = useState(Products)
    const { addRecentlyViewed } = useContext(RecentlyViewedContext)


    useEffect(() => {
        if (location.state && location.state.searchResults) {
            setSearchResultsProducts(location.state.searchResults);
        } else {
            console.log('No search results found in location state');
        }
    }, [location, SearchQuery]);

    const handleProductClick = (product) => {
        addRecentlyViewed(product)
        const formattedName = product.name.replace(/\s+/g, '-');
        navigate(`/collection/shopAll/${product.id}/${formattedName}`)
    }
    return (
        <Layout key={SearchQuery}>
            <div className="shopAllMain">
                <div className="topSide">
                    <div className="hideDiv"></div>
                </div>
                <div className='ProductPageMain ShopAll'>
                    <div className="hide">
                        <ProductPage
                            product={searchResultsProducts}
                            heading={`Showing results for  "${SearchQuery}"`}
                            handleProductClick={handleProductClick}
                            categoryFilter={ShopAllCategoryFilter}
                            productTypeFilter={shopAllProductType}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SearchResultPage