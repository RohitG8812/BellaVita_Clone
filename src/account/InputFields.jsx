import React, { useState } from 'react'
import IndianFlag from "../assets/icons/india.svg"
import { InputAdornment, TextField } from '@mui/material'
import { auth, db } from '../auth/firebase';
import { toast } from 'react-toastify';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import Ecom from "../assets/icons/ecom.svg"
import "../css/paymentPage.css"
import Loader from '../pages/Loader';


function InputFields({ setOpenAddInput }) {
    const [savedAdd, setSaveAdd] = useState([])
    const [loader, setLoader] = useState(false);
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        company: '',
        postalCode: '',
        contactNumber: '',
        city: '',
        state: '',
        country: 'INDIA'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value
        });
    };

    const clearAllInput = () => {
        setAddress({
            firstName: '',
            lastName: '',
            addressLine1: '',
            addressLine2: '',
            company: '',
            postalCode: '',
            contactNumber: '',
            city: '',
            state: '',
            country: 'INDIA'
        });
    }

    const handleSaveAdd = async (e) => {
        e.preventDefault()
        const user = auth.currentUser;
        if (!user) {
            toast.error("User is not logged in");
            return;
        }

        setLoader(true)
        try {
            const userDocRef = doc(db, "Users", user.uid);
            await updateDoc(userDocRef, {
                addresses: arrayUnion(address)
            });

            toast.success("Address saved successfully");
            // Update the local state to reflect the new address
            setSaveAdd((prevAddresses) => [...prevAddresses, address]);
            setOpenAddInput(false);
            setLoader(false)
            clearAllInput()
        } catch (error) {
            setLoader(false)
            console.log(error.message);
            toast.error(error.message);
        }
    }
    return (
        <>
            <form action="" onSubmit={handleSaveAdd} className="addressTextFields">
                <p className='accountWelcomeBellavita savedAddHeadPaymentPage'>New Address</p>
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
                                value={address.firstName}
                                name='firstName'
                                size="small"
                                required
                                onChange={handleInputChange}
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
                                value={address.lastName}
                                name='lastName'
                                size="small"
                                required
                                onChange={handleInputChange}
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
                        value={address.addressLine1}
                        name='addressLine1'
                        size="small"
                        required
                        onChange={handleInputChange}
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
                        value={address.addressLine2}
                        name='addressLine2'
                        size="small"
                        required
                        onChange={handleInputChange}
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
                            value={address.company}
                            name='company'
                            size="small"
                            required
                            onChange={handleInputChange}
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
                            value={address.postalCode}
                            name='postalCode'
                            size="small"
                            required
                            onChange={handleInputChange}
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
                            value={address.contactNumber}
                            name='contactNumber'
                            size="small"
                            required
                            onChange={handleInputChange}
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
                            value={address.city}
                            name='city'
                            size="small"
                            required
                            onChange={handleInputChange}
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
                            value={address.state}
                            name='state'
                            size="small"
                            required
                            onChange={handleInputChange}
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
                    <button className='filterBtn addressBtn'>{loader ? <div className='btnLoader'><Loader /></div> : "Save"}</button>
                </div>
                <div className="pricingBottom">
                    <span >Secured by </span>
                    <img src={Ecom} alt="" />
                </div>
            </form >
        </>
    )
}

export default InputFields