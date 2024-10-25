import React from 'react'

function PaymentPage({ setOpenPaymentPage }) {
  return (
    <div>
      PaymentPage
      <div onClick={() => setOpenPaymentPage(false)}>Back</div>
    </div>
  )
}

export default PaymentPage