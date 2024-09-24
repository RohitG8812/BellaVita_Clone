import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material'
import MenuIcon from "../assets/icons/text2.png"
import CloseIcon from "../assets/icons/close.svg"

function SideNavbar({ setSidebarOpen }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (value) => {
        setOpen(value)
        console.log(value)
        setSidebarOpen(value)
    }

    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={() => toggleDrawer(false)}>
            
        </Box>
    );

    return (
        <div className="hamburgMenu">
            <Button >
                {open ? <img src={CloseIcon} alt="" className='sideBarIcon' onClick={() => toggleDrawer(false)} /> : <img src={MenuIcon} alt="" className='sideBarIcon' onClick={() => toggleDrawer(true)} />}
            </Button>
            <Drawer open={open} onClose={() => toggleDrawer(false)} className='sideBarMenu'>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default SideNavbar