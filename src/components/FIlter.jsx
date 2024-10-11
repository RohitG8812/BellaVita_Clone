import React from 'react'
import "../css/filter.css"
import starIcon from "../assets/icons/star.svg"
import Money from "../assets/icons/roundMoney.svg"
import close from "../assets/icons/roundX.svg"
import Sort from './Sort'


function FIlter({ active, handleChange, categoryFilter, filteredProducts, handleCLearFilter, filterItems, productTypeFilter, handleSortLowToHigh, handleSortHighToLow, handleReset, sortOptionActive }) {
    const getProductCountForCategory = (category) => {
        return filteredProducts.filter(product => product.productType === category).length;
    }
    const getProductCountForProductType = (productType) => {
        return filteredProducts.filter(product => product.variantM === productType).length;
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

    //* Products sorting price low to high


    return (
        <>
            <div className={`filterMenuMain ${active ? 'active' : ''}`}>
                <div className="topSideFilters">
                    {/* Sort */}
                    <div className="topFilter sortFilter">
                        <div className="filterCatHeadingText">
                            <span className='filterCatHeading'>Sort</span>
                        </div>
                        <div className="filterOptions sortOptionsMini">
                           <Sort handleSortHighToLow={handleSortHighToLow} handleSortLowToHigh={handleSortLowToHigh} sortOptionActive={sortOptionActive}/>
                        </div>
                    </div>

                    {/* Price Filter  */}
                    <div className="topFilter priceFilter">
                        <div className="filterCatHeadingText">
                            <span className='filterCatHeading'>Price</span>
                        </div>
                        <div className="filterOptions">
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="0-500"
                                            onChange={handleChange}
                                            checked={filterItems.includes("0-500")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'> <span>₹0-500</span> <span className='labelProductCount'>({filterByPriceRange(0, 500)})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="501-1000"
                                            onChange={handleChange}
                                            checked={filterItems.includes("501-1000")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'> <span>₹500-1000</span> <span className='labelProductCount'>({filterByPriceRange(501, 1000)})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="1001-1500"
                                            onChange={handleChange}
                                            checked={filterItems.includes("1001-1500")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'><span>₹1000-1500</span> <span className='labelProductCount'>({filterByPriceRange(1001, 1500)})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="1501+"
                                            onChange={handleChange}
                                            checked={filterItems.includes("1501+")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'><span>₹1500+</span> <span className='labelProductCount'>({filterByPriceRange(1501)})</span></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="topFilter categoryFilter">
                        <div className="filterCatHeadingText">
                            <span className='filterCatHeading'>Category</span>
                        </div>
                        <div className="filterOptions">
                            {Array.isArray(categoryFilter) && categoryFilter.length > 0 ? (
                                categoryFilter.map((filter, index) => (
                                    <div key={index}>
                                        <label className='input-label'>
                                            <div className="checkBox">
                                                <input
                                                    type="checkbox"
                                                    value={filter.value}
                                                    onChange={handleChange}
                                                    checked={filterItems.includes(filter.value)}
                                                />
                                                <div class="transition"></div>
                                            </div>
                                            <div className='labelOrProductCount'><span>{filter.label}</span> <span className='labelProductCount'>({getProductCountForCategory(filter.value)})</span></div>
                                        </label>
                                    </div>
                                ))) : "No Options Available"}
                        </div>
                    </div>

                    {/* Product Type Filter */}
                    <div className="topFilter productTypeFilter">
                        <div className="filterCatHeadingText">
                            <span className='filterCatHeading'>Product Type</span>
                        </div>
                        <div className="filterOptions">
                            {Array.isArray(productTypeFilter) && productTypeFilter.length > 0 ? (
                                productTypeFilter.map((filter, index) => (
                                    <div key={index}>
                                        <label className='input-label'>
                                            <div className="checkBox">
                                                <input
                                                    type="checkbox"
                                                    value={filter.value}
                                                    onChange={handleChange}
                                                    checked={filterItems.includes(filter.value)}
                                                />
                                                <div class="transition"></div>
                                            </div>
                                            <div className='labelOrProductCount'><span>{filter.label}</span> <span className='labelProductCount'>({getProductCountForProductType(filter.value)})</span></div>
                                        </label>
                                    </div>
                                ))) : "No Options Available"}
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="topFilter ratingFilter">
                        <div className="filterCatHeadingText">
                            <span className='filterCatHeading'>Rating</span>
                        </div>
                        <div className="filterOptions">
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="1"
                                            onChange={handleChange}
                                            checked={filterItems.includes("1")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'> <span className='ratingFilterIcon'>1 <img src={starIcon} alt="" className='starIcon' /> </span> <span className='labelProductCount'>({filteredProducts.filter(product => product.rating >= 1 && product.rating < 2).length})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="2"
                                            onChange={handleChange}
                                            checked={filterItems.includes("2")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'> <span className='ratingFilterIcon'>2 <img src={starIcon} alt="" className='starIcon' /></span> <span className='labelProductCount'>({filteredProducts.filter(product => product.rating >= 2 && product.rating < 3).length})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="3"
                                            onChange={handleChange}
                                            checked={filterItems.includes("3")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'><span className='ratingFilterIcon'>3 <img src={starIcon} alt="" className='starIcon' /></span> <span className='labelProductCount'>({filteredProducts.filter(product => product.rating >= 3 && product.rating < 4).length})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="4"
                                            onChange={handleChange}
                                            checked={filterItems.includes("4")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'> <span className='ratingFilterIcon'>4 <img src={starIcon} alt="" className='starIcon' /></span>  <span className='labelProductCount'>({filteredProducts.filter(product => product.rating >= 4 && product.rating < 5).length})</span></div>
                                </label>
                            </div>
                            <div>
                                <label className='input-label'>
                                    <div className="checkBox">
                                        <input
                                            type="checkbox"
                                            value="5"
                                            onChange={handleChange}
                                            checked={filterItems.includes("5")}
                                        />
                                        <div class="transition"></div>
                                    </div>
                                    <div className='labelOrProductCount'><span className='ratingFilterIcon'>5 <img src={starIcon} alt="" className='starIcon' /> </span> <span className='labelProductCount'>({filteredProducts.filter(product => product.rating == 5).length})</span></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomClearFilter">
                    <div className={`addToCartBtn removeSortButton`}>
                        < button onClick={handleReset}>Remove Sort</button>
                    </div>
                    <div className={`addToCartBtn applyFilterButton`}>
                        < button>Apply</button>
                    </div>
                    <div className={`addToCartBtn clearFilterButton`}>
                        < button onClick={handleCLearFilter} disabled={filterItems.length === 0} className={filterItems.length === 0 ? "disabledButton" : ""}>{filterItems.length === 0 ? "No Filter Selected" : "Clear Filter"}</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FIlter