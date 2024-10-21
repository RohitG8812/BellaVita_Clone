import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import IndianFlag from "../assets/icons/india.svg"
import IndianFlagRound from "../assets/icons/indiaRounded.svg"

function Profile() {
  const userDetails = useOutletContext()
  return (
    <div className='accountProfileSecMain'>
      <div className='ProfileTextFieldMain'>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="First Name"
            size='small'
            defaultValue={userDetails.firstName}
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "black",
              },
            }}
          />
        </div>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="Last Name"
            size='small'
            defaultValue={userDetails.lastName}
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "black", // This will ensure the text is black when disabled
              },
            }}
          />
        </div>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="Email"
            size='small'
            defaultValue={userDetails.email}
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "black", // This will ensure the text is black when disabled
              },
            }}
          />
        </div>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="Contact Number"
            size='small'
            defaultValue={`+91 ${userDetails.number ? userDetails.number : "Not Available"}`}
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "black",
              },
            }}
          />
        </div>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="Gender"
            size='small'
            defaultValue={userDetails.gender ? userDetails.gender : "null"}
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: userDetails.gender ? "black" : "", // This will ensure the text is black when disabled
              },
            }}
          />
        </div>
        <div>
          <TextField
            className='profileTextField'
            disabled
            focused
            id="outlined"
            label="Country"
            size='small'
            defaultValue="INDIA"
            InputLabelProps={{
              style: { fontFamily: 'myFont', letterSpacing: "1px", fontSize: "17.2px" }
            }}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "black", // This will ensure the text is black when disabled
              },
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
    </div>
  )
}

export default Profile