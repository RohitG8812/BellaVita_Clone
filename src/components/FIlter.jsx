import React from 'react'
import "../css/filter.css"


function FIlter({ active, handleChange, categoryFilter, filteredProducts, handleCLearFilter, filterItems }) {
    const getProductCountForCategory = (category) => {
        return filteredProducts.filter(product => product.category === category).length;
    }

    const filterByPriceRange = (min, max) => {
        return filteredProducts.filter(product => {
            const productPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
            if (max) {
                return productPrice >= min && productPrice <= max;
            } else {
                return productPrice >= min;
            }
        }).length;
    };

    return (
        <div className={`filterMenuMain ${active ? 'active' : ''}`}>
            <div className="topSideFilters">
                {/* Price Filter  */}
                <div className="topFilter innerFilter">
                    <div className="filterSection">
                        <h3>Price</h3>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="0-500"
                                    onChange={handleChange}
                                    checked={filterItems.includes("0-500")}
                                />
                                ₹ 0 - 500 <span>({filterByPriceRange(0, 500)})</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="501-1000"
                                    onChange={handleChange}
                                    checked={filterItems.includes("501-1000")}
                                />
                                ₹ 500 - 1000  <span>({filterByPriceRange(501, 1000)})</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="1001-1500"
                                    onChange={handleChange}
                                    checked={filterItems.includes("1001-1500")}
                                />
                                ₹ 1000 - 1500  <span>({filterByPriceRange(1001, 1500)})</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="1501+"
                                    onChange={handleChange}
                                    checked={filterItems.includes("1501+")}
                                />
                                ₹ 1500++   <span>({filterByPriceRange(1501)})</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="topFilter innerFilter">
                    <h3>Category</h3>
                    {Array.isArray(categoryFilter) && categoryFilter.length > 0 ? (
                        categoryFilter.map((filter, index) => (
                            <div key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={filter.value}
                                        onChange={handleChange}
                                        checked={filterItems.includes(filter.value)}
                                    />
                                    <span>{filter.label}</span> <span>({getProductCountForCategory(filter.value)})</span>
                                </label>
                            </div>
                        ))) : "No"}
                </div>

                {/* Product Type Filter */}
                <div className="topFilter innerFilter">
                    <h3>Product Type Filters</h3>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Eau De Parfum"
                                onChange={handleChange}
                                checked={filterItems.includes("Eau De Parfum")}
                            />
                            <span>Eau De Parfum</span> <span>({filteredProducts.filter(product => product.variant === "Eau De Parfum").length})</span>
                        </label>
                    </div>
                    <div>
                        <label className='label'>
                            <input
                                type="checkbox"
                                value="Attar for All"
                                onChange={handleChange}
                                checked={filterItems.includes("Attar for All")}
                            />
                            <span>Attar for All</span> <span>({filteredProducts.filter(product => product.variant === "Attar for All").length})</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Eau De Parfum For Women"
                                onChange={handleChange}
                                checked={filterItems.includes("Eau De Parfum For Women")}
                            />
                            <span>Eau De Parfum For Women</span> <span>({filteredProducts.filter(product => product.variant === "Eau De Parfum For Women").length})</span>
                        </label>
                    </div>
                </div>

                {/* Rating Filter */}
                <div className="topFilter innerFilter">
                    <h3>Rating</h3>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="1"
                                onChange={handleChange}
                                checked={filterItems.includes("1")}
                            />
                            <span>1 ⭐ </span> <span>({filteredProducts.filter(product => product.rating >= 1 && product.rating < 2).length})</span>
                        </label>
                    </div>
                    <div>
                        <label className='label'>
                            <input
                                type="checkbox"
                                value="2"
                                onChange={handleChange}
                                checked={filterItems.includes("2")}
                            />
                            <span>2 ⭐</span> <span>({filteredProducts.filter(product => product.rating >= 2 && product.rating < 3).length})</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="3"
                                onChange={handleChange}
                                checked={filterItems.includes("3")}
                            />
                            <span>3 ⭐</span> <span>({filteredProducts.filter(product => product.rating >= 3 && product.rating < 4).length})</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="4"
                                onChange={handleChange}
                                checked={filterItems.includes("4")}
                            />
                            <span>4 ⭐</span>  <span>({filteredProducts.filter(product => product.rating >= 4 && product.rating < 5).length})</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="5"
                                onChange={handleChange}
                                checked={filterItems.includes("5")}
                            />
                            <span>5 ⭐ </span> <span>({filteredProducts.filter(product => product.rating == 5).length})</span>
                        </label>
                    </div>
                </div>

                <div className="bottomClearFilter">
                    <div className={`addToCartBtn clearFilterButton`}>
                        < button onClick={handleCLearFilter} disabled={filterItems.length === 0} className={filterItems.length === 0 ? "disabledButton" : ""}>{filterItems.length === 0 ? "No Filter Selected" : "Clear Filter"}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FIlter