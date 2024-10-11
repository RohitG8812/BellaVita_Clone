import React from 'react'

function Sort({ handleSortHighToLow, handleSortLowToHigh, sortOptionActive }) {
    return (
        <div>
            <div className="filterOptionsInner">
                <div>
                    <label className='input-label'>
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                value="lowToHigh"
                                onChange={handleSortLowToHigh}
                                checked={sortOptionActive.includes('lowToHigh')}
                            />
                            <div className="transition"></div>
                        </div>
                        <div className='labelOrProductCount'> <span>Price - Low to High</span></div>
                    </label>
                </div>
                <div>
                    <label className='input-label'>
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                value="highToLow"
                                onChange={handleSortHighToLow}
                                checked={sortOptionActive.includes('highToLow')}
                            />
                            <div className="transition"></div>
                        </div>
                        <div className='labelOrProductCount'> <span>Price - High to Low</span></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Sort