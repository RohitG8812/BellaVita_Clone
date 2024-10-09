import React from 'react'

function Sort({handleChange, filterItems}) {
    return (
        <div>
            <div className="filterOptions">
                <div>
                    <label className='input-label'>
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                value="lowToHigh"
                                onChange={handleChange}
                                checked={filterItems.includes("lowToHigh")}
                            />
                            <div class="transition"></div>
                        </div>
                        <div className='labelOrProductCount'> <span className='ratingFilterIcon'>Price - Low to High</span></div>
                    </label>
                </div>
                <div>
                    <label className='input-label'>
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                value="highToLow"
                                onChange={handleChange}
                                checked={filterItems.includes("highToLow")}
                            />
                            <div class="transition"></div>
                        </div>
                        <div className='labelOrProductCount'> <span className='ratingFilterIcon'>Price - High to Low</span></div>
                    </label>
                </div>
                <div>
                    <label className='input-label'>
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                value="bestSeller"
                                onChange={handleChange}
                                checked={filterItems.includes("bestSeller")}
                            />
                            <div class="transition"></div>
                        </div>
                        <div className='labelOrProductCount'> <span className='ratingFilterIcon'>BestSelling</span></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sort