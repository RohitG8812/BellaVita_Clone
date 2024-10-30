import React, { useEffect, useState } from 'react'
import AddToCartPage from './AddToCartPage';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from "../assets/icons/close.svg"
import CartIcon from "../assets/icons/cart12.png"
import "../css/addTOCart.css"
import "../index.css"


function AddToCartSidebar({ setAddToCartOpen }) {
    const [open, setOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    const toggleDrawer = (value) => {
        setOpen(value)
        console.log(value)
        setAddToCartOpen(value)
    }

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartItemCount(totalCount);
    })

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
            <AddToCartPage toggleDrawer={toggleDrawer} />
        </Box>
    );

    return (
        <div className="">
            <button className='nabAddToCartBtnIcon' >
                <div className="cartIconWrapper">
                    <img src={CartIcon} alt="" className='navIcon' onClick={() => toggleDrawer(true)} />
                    {cartItemCount > 0 && (
                        <span className='cartBadge'>{cartItemCount}</span>
                    )}
                </div>
            </button>
            <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)} className='sideBarMenu'>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default AddToCartSidebar
