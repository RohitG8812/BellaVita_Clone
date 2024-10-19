import React, { useEffect, useState } from 'react'
import AddToCartPage from './AddToCartPage';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material'
import CloseIcon from "../assets/icons/close.svg"
import CartIcon from "../assets/icons/cart12.png"
import "../css/addTOCart.css"
import "../index.css"


function AddToCartSidebar({ setAddToCartOpen }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value) => {
        setOpen(value)
        console.log(value)
        setAddToCartOpen(value)
    }

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth < 1030) {
    //             console.log("AddToCartPage Option Enabled")
    //         } else {
    //             toggleDrawer(false)
    //             console.log("AddToCartPage Option disabled")
    //         }
    //     };

    //     handleResize(); // Check on initial render

    //     window.addEventListener('resize', handleResize); // Add resize event listener
    //     return () => {
    //         window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
    //     };
    // }, []);

    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [open]);

    const DrawerList = (
        <Box className="sidebarWidth" role="presentation">
            <AddToCartPage />
        </Box>
    );

    return (
        <div className="">
            <button className='nabAddToCartBtnIcon' >
                {open ? <img src={CloseIcon} alt="" className='closeIcon sideBarIcon' onClick={() => toggleDrawer(false)} /> : <img src={CartIcon} alt="" className='navIcon' onClick={() => toggleDrawer(true)} />}
            </button>
            <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)} className='sideBarMenu'>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default AddToCartSidebar