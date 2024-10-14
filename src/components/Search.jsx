import React from 'react'

function Search({ inputBoxActive, inputValueLength }) {
    return (
        <div className='SearchBoxContent'>
            <div className="beforeInputTextSearch" style={{ display: inputValueLength ? "none" : "block" }}>
                beforeInputTextSearch
            </div>
            <div className="afterInputTextSearch" style={{ display: inputValueLength ? "block" : "none" }}>
                afterInputTextSearch
            </div>
        </div>
    )
}

export default Search