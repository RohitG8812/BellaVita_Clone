import React, { useState } from 'react'
import PlusRounded from "../assets/icons/plusRounded.svg"
import IndianFlag from "../assets/icons/india.svg"
import { InputAdornment, TextField } from '@mui/material'

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
  return (
    <div>
      {openAddInput ?
        (<div>
          <div className="addressTextFields">
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
                  label="Company"
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
              <button className='filterBtn addressBtn'>Save</button>
            </div>
          </div>
        </div>)
        : (
          <div className='login_bottom'>
            <div>
              {savedAdd.length > 0 ? ""
                :
                (
                  <div className='noSavedAddress'>No Saved Address, Click below To Save Address</div>
                )}
            </div>
            <button onClick={() => setOpenAddInput(true)} className='googleBtn addAddressBtn'><img src={PlusRounded} alt="" className='google-icon' />Add New Address</button>
          </div>
        )}
    </div>
  )
}

export default Address

