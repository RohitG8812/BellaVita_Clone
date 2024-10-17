import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Profile() {
  const userDetails = useOutletContext()
  return (
    <div className='accountProfileSecMain'>
      <div>
        
      </div>
    </div>
  )
}

export default Profile