import React from 'react'
import ProfileIcon from '../assets/icons/profile.svg'
import { Link, useNavigate } from 'react-router-dom'

function SideBarContent() {
    const navigate = useNavigate()

    const goToAccount = () => {
        navigate('/account')
    }

    return (
        <div className='sideBarContent'>
            <div className="installApp" onClick={goToAccount}>
                <div className="profileLogo">
                    <img src={ProfileIcon} alt="" className="appProfileLogo" />
                </div>
                <div className="appText">
                    <div className="topText">
                        <span className="yellowText">
                            Use <span className="black-bold">99%</span> of your <span className="black-bold">Cashback</span>
                        </span> &nbsp;
                    </div>
                    <div className="botText">
                        <span className='underlineText'>To Redeem</span> <span className='DownloadBtn'>Download App</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarContent