import React, { useEffect, useState } from 'react'
import PlusRounded from "../assets/icons/plusRounded.svg"
import { auth, db } from '../auth/firebase'
import toast from 'react-hot-toast'
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import DeleteRed from "../assets/icons/delete2.svg"
import InputFields from './InputFields'

function Address() {
  const [openAddInput, setOpenAddInput] = useState(false)
  const [savedAdd, setSaveAdd] = useState([])
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    setLoader(true)
    const fetchAddress = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLoader(false);
        return;
      }
      
      try {
        const userDocRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setSaveAdd(userData.addresses || []); // Set the addresses if they exist
        }
        setLoader(false)
      } catch (error) {
        setLoader(false)
        console.log("Error fetching addresses:", error.message);
        toast.error("Failed to fetch saved addresses");
      }
    }
    fetchAddress()
  }, [openAddInput, setSaveAdd])

  const handleDelete = async (addressToDelete) => {
    setLoader(true)
    const user = auth.currentUser;
    if (!user) {
      toast.error("user is not logged in");
      setLoader(false)
      return;
    }

    try {
      const userDocRef = doc(db, "Users", user.uid);
      await updateDoc(userDocRef, {
        addresses: arrayRemove(addressToDelete)
      })

      setSaveAdd((prevAddresses) =>
        prevAddresses.filter((address) => address !== addressToDelete)
      );

      toast.success("Address deleted successfully");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to delete address");
    }
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }

  return (
    <div>
      {openAddInput ?
        (<div>
          <InputFields setOpenAddInput={setOpenAddInput} />
        </div>)
        : (
          <div className='login_bottom'>
            <button onClick={() => setOpenAddInput(true)} className='googleBtn addAddressBtn'>
              <img src={PlusRounded} alt="" className='google-icon' />
              Add New Address
            </button>
            {loader ? <div className='savedAddressLoader'><img src={SpinnerLoader} alt='loader' /></div> : <div>
              {savedAdd.length > 0 ? (
                <>
                  <p className='accountWelcomeBellavita savedAddressHeading'>Saved Addresses</p>
                  <div className='SavedAddMain'>
                    {savedAdd.map((address, index) => (
                      <div key={index} className='savedAddressSingle'>
                        <div className='SaveAsOrDelete'>
                          <p className='userNameTopHeading fullBlackText'>{address.company}</p>
                          <img src={DeleteRed} alt="" onClick={() => handleDelete(address)} className='deleteAddress' />
                        </div>
                        <p className='userNameTopHeading fullBlackText'>{`${address.firstName} ${address.lastName}`}</p>
                        <p className='savedAddressText'>{`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postalCode}, ${address.state}, ${address.country}`}</p>
                        <p className='userNameTopHeading fullBlackText'>Phone Number : +91-{address.contactNumber}</p>
                      </div>
                    ))}
                  </div>
                </>
              )
                :
                (
                  <div className='noSavedAddress'>No Saved Address, Click below To Save Address</div>
                )}
            </div>}
          </div>
        )}
    </div>
  )
}

export default Address

