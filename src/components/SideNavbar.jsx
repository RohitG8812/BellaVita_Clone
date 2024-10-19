import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material'
import MenuIcon from "../assets/icons/text2.png"
import CloseIcon from "../assets/icons/close.svg"
import SideBarContent from './SideBarContent';

function SideNavbar({ setSidebarOpen }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value) => {
        setOpen(value)
        console.log(value)
        setSidebarOpen(value)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1030) {
                console.log("SIdebar Option Enabled")
            } else {
                toggleDrawer(false)
                console.log("SIdebar Option disabled")
            }
        };

        handleResize(); // Check on initial render

        window.addEventListener('resize', handleResize); // Add resize event listener
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
        };
    }, []);

    const DrawerList = (
        <Box className="sidebarWidth" role="presentation">
            <SideBarContent />
        </Box>
    );

    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [open]);

    return (
        <div className="hamburgMenu">
            <Button >
                {open ? <img src={CloseIcon} alt="" className='sideBarIcon closeIcon' onClick={() => toggleDrawer(false)} /> : <img src={MenuIcon} alt="" className='sideBarIcon' onClick={() => toggleDrawer(true)} />}
            </Button>
            <Drawer open={open} onClose={() => toggleDrawer(false)} className='sideBarMenu'>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default SideNavbar