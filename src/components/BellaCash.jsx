import React from 'react'
import BellaCashInner from '../account/BellaCashInner'
import Layout from '../Layout/Layout'

function BellaCash() {
  return (
    <Layout>
      <div className="shopAllMain">
        <div className="topSide">
          <div className="hideDiv"></div>
        </div>
        <div className='ProductPageMain ShopAll'>
          <div className="hide bellaCashComponentMain">
            <BellaCashInner />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BellaCash