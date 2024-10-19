import React, { useEffect, useState } from 'react'
import PlusRounded from "../assets/icons/plusRounded.svg"
import IndianFlag from "../assets/icons/india.svg"
import { InputAdornment, TextField } from '@mui/material'
import { auth, db } from '../auth/firebase'
import { toast } from 'react-toastify'
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import SpinnerLoader from "../assets/icons/spinnerLoader.svg"
import Delete from "../assets/icons/delete.svg"
import DeleteRed from "../assets/icons/delete2.svg"

function Address() {
  const [openAddInput, setOpenAddInput] = useState(false)
  const [savedAdd, setSaveAdd] = useState([])
  const [fName, setFName] = useState("")
  const [lName, setLFName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [company, setCompany] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [number, setNumber] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [loader, setLoader] = useState(false);


  console.log(savedAdd)

  useEffect(() => {
    setLoader(true)
    const fetchAddress = async () => {
      const user = auth.currentUser;
      if (!user) {
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
  }, [])

  const handleSaveAdd = async () => {
    const user = auth.currentUser;
    if (!user) {
      toast.error("User is not logged in");
      return;
    }

    const newAddress = {
      firstName: fName,
      lastName: lName,
      addressLine1: address1,
      addressLine2: address2,
      company: company,
      postalCode: pinCode,
      contactNumber: number,
      city: city,
      state: state,
      country: "INDIA"
    }

    try {
      const userDocRef = doc(db, "Users", user.uid);
      await updateDoc(userDocRef, {
        addresses: arrayUnion(newAddress)
      });

      toast.success("Address saved successfully");
      // Update the local state to reflect the new address
      setSaveAdd((prevAddresses) => [...prevAddresses, newAddress]);
      setOpenAddInput(false);
      clearAllInput()
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const handleDelete = async (addressToDelete) => {
    setLoader(true)
    const user = auth.currentUser;
    if (!user) {
      toast.error("user is not logged in");
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

  const clearAllInput = () => {
    setFName("");
    setLFName("");
    setAddress1("");
    setAddress2("");
    setCompany("");
    setPinCode("");
    setNumber("");
    setCity("");
    setState("");
  }
  return (
    <div>
      {openAddInput ?
        (<div>
          <div className="addressTextFields">
            <p className='accountWelcomeBellavita'>Add New Address</p>
            <div style={{ width: "100%" }}>
              <div className='firstNameLastName'>
                <div>
                  <TextField
                    className='nameInput'
                    id="outlined-basic"
                    label="Firstname"
                    fullWidth
                    variant="outlined"
                    type="text"
                    value={fName}
                    size="small"
                    required
                    onChange={(e) => setFName(e.target.value)}
                    InputLabelProps={{
                      style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                    }}
                  />
                </div>
                <div>
                  <TextField
                    className='nameInput'
                    id="outlined-basic"
                    fullWidth
                    label="Lastname"
                    variant="outlined"
                    type="text"
                    value={lName}
                    size="small"
                    required
                    onChange={(e) => setLFName(e.target.value)}
                    InputLabelProps={{
                      style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='inputDiv'>
              <TextField
                className='addressInput '
                id="outlined-basic"
                label="Address Line 1"
                fullWidth
                variant="outlined"
                type="text"
                value={address1}
                size="small"
                required
                onChange={(e) => setAddress1(e.target.value)}
                InputLabelProps={{
                  style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                }}
              />
            </div>
            <div className='inputDiv'>
              <TextField
                className='addressInput '
                fullWidth
                id="outlined-basic"
                label="Address Line 2"
                variant="outlined"
                type="text"
                value={address2}
                size="small"
                required
                onChange={(e) => setAddress2(e.target.value)}
                InputLabelProps={{
                  style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                }}
              />
            </div>
            <div className="comPanyPinCodeCOn">
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  id="outlined-basic"
                  label="Save as"
                  variant="outlined"
                  type="text"
                  value={company}
                  size="small"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                />
              </div>
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  id="outlined-basic"
                  label="Postal / ZIP Code"
                  variant="outlined"
                  type="number"
                  value={pinCode}
                  size="small"
                  required
                  onChange={(e) => setPinCode(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                />
              </div>
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  id="outlined-basic"
                  label="Contact Number"
                  variant="outlined"
                  type="number"
                  value={number}
                  size="small"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">+91 </InputAdornment>,
                    },
                  }}
                />
              </div>
            </div>
            <div className="comPanyPinCodeCOn">
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  type="text"
                  value={city}
                  size="small"
                  required
                  onChange={(e) => setCity(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                />
              </div>
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  type="text"
                  value={state}
                  size="small"
                  required
                  onChange={(e) => setState(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                />
              </div>
              <div className='inputDiv'>
                <TextField
                  className='addressInput2'
                  disabled
                  focused
                  id="outlined"
                  label="Country"
                  size='small'
                  defaultValue="INDIA"
                  InputLabelProps={{
                    style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={IndianFlag} alt="India Flag" style={{ width: 20, marginRight: 0 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="addressBtnMain">
              <button className='googleBtn addressBtn ' onClick={() => setOpenAddInput(false)}>Cancel</button>
              <button className='filterBtn addressBtn' onClick={handleSaveAdd}>Save</button>
            </div>
          </div>
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

