import React, { useState } from 'react'
import rightArrow from "../assets/icons/rightArrow.svg"
import downArrow from "../assets/icons/down.svg"
import Fb from "../assets/icons/fb.svg"
import Twitter from "../assets/icons/twitter.svg"
import Pinterest from "../assets/icons/pinterest.svg"
import Insta from "../assets/icons/insta.svg"
import YT from "../assets/icons/yt.svg"
import { Link } from 'react-router-dom'

function Footer() {
    const Logos = [Fb, Twitter, Pinterest, Insta, YT]
    const BestSellers = ["Ultimate Perfume Box", "Perfume Gift Set For Men", "Perfume Gift Set For Women", "Under Eye Cream for Dark Circles", "Perfume For Men", "Perfume For Women", "Unisex Perfume"]
    const Information = ["Blogs", "Newsroom", "Terms & Conditions", "Privacy Policy", "Refund and Return", "Shipping Policy", "Bulk Order - GST Invoice"]
    const Support = ["About Us", "Contact Us", "Order Tracking", "All Products", "FAQ", "Sitemap"]
    const Contact = ["Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India", "+91-9311732440", "shop@bellavitaorganic.com", "Timing: 10:00 AM to 7:00 PM, Monday to Sunday"]

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='footerMain'>
            <div className="footerMain2">
                {/* Footer Top Main Screen */}
                <div className="footerTop">
                    <div className="footerTopLeft">
                        <div className="footerBestSeller footerCatMain">
                            <div className="footerHeading">
                                <p>BESTSELLERS</p>
                            </div>
                            <div className="footerCatItems">
                                <ul>
                                    {BestSellers.map((items, index) => (
                                        <li key={index}>{items}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="footerInformation footerCatMain">
                            <div className="footerHeading">
                                <p>INFORMATION</p>
                            </div>
                            <div className="footerCatItems">
                                <ul>
                                    {Information.map((items, index) => (
                                        <li key={index}>{items}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="footerSupport footerCatMain">
                            <div className="footerHeading">
                                <p>SUPPORT</p>
                            </div>
                            <div className="footerCatItems">
                                <ul>
                                    {Support.map((items, index) => (
                                        <li key={index}>{items}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="footerContactUs footerCatMain">
                            <div className="footerHeading">
                                <p>CONTACT US</p>
                            </div>
                            <div className="footerCatItems">
                                <ul>
                                    {Contact.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footerTopRIght">
                        <div className="footerTopRight2">
                            <div className="footerHeading">
                                <p>EXCLUSIVE</p>
                            </div>
                            <div className="footerCatItems">
                                <div className='emailType'>
                                    <div className='emailTypeBox'>
                                        <input type="email" className='emailInputBox' placeholder='Enter email here' />
                                        <img src={rightArrow} alt="" className='arrowEMail' />
                                    </div>
                                </div>
                                <div className="bottomTextOfTopRight">
                                    <p className='bottomTextOfTopRight1'>Sign up here to get the latest news, updates and special offers delivered to your inbox.</p>
                                    <p className='bottomTextOfTopRight2'>Plus, you'll be the first to know about our discounts!</p>
                                </div>
                                <div className="bottomTextLogos">
                                    {Logos.map((logo, index) => (
                                        <div className="topRightLogo">
                                            <img src={logo} alt="" key={index} className='bottomTextLogo' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Top 750px Screen */}
                <div className="footerTop750px">
                    <div className="accordionMenu">
                        <div className="accordionTop">
                            <div className="footerHeading footerHeading2">
                                <p>EXCLUSIVE</p>
                            </div>
                            <div className="footerCatItems750px">
                                <div className='emailType'>
                                    <div className='emailTypeBox'>
                                        <input type="email" className='emailInputBox' placeholder='Enter email here' />
                                        <img src={rightArrow} alt="" className='arrowEMail' />
                                    </div>
                                </div>
                                <div className="bottomTextOfTopRight">
                                    <p className='bottomTextOfTopRight1'>Sign up here to get the latest news, updates and special offers delivered to your inbox.</p>
                                    <p className='bottomTextOfTopRight2'>Plus, you'll be the first to know about our discounts!</p>
                                </div>

                            </div>
                        </div>
                        <div className="firstAccordion">
                            <div className="footerHeading750" onClick={() => handleClick(1)} >
                                <p>BESTSELLERS</p>
                                <img src={downArrow} alt="" className={`rightArrowTopFooter ${activeIndex === 1 ? 'rotate-arrow' : ''}`} />
                            </div>
                            <div className={`footer750pxCatItems ${activeIndex === 1 ? 'show' : 'hide'}`}>
                                <ul>
                                    {BestSellers.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="firstAccordion">
                            <div className="footerHeading750" onClick={() => handleClick(2)}>
                                <p>INFORMATION</p>
                                <img src={downArrow} alt="" className={`rightArrowTopFooter ${activeIndex === 2 ? 'rotate-arrow' : ''}`} />
                            </div>
                            <div className={`footer750pxCatItems ${activeIndex === 2 ? 'show' : 'hide'}`}>
                                <ul>
                                    {Information.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="firstAccordion">
                            <div className="footerHeading750" onClick={() => handleClick(3)}>
                                <p>SUPPORT</p>
                                <img src={downArrow} alt="" className={`rightArrowTopFooter ${activeIndex === 3 ? 'rotate-arrow' : ''}`} />
                            </div>
                            <div className={`footer750pxCatItems ${activeIndex === 3 ? 'show' : 'hide'}`}>
                                <ul>
                                    {Support.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="firstAccordion">
                            <div className="footerHeading750" onClick={() => handleClick(4)}>
                                <p>CONTACT US</p>
                                <img src={downArrow} alt="" className={`rightArrowTopFooter ${activeIndex === 4 ? 'rotate-arrow' : ''}`} />
                            </div>
                            <div className={`footer750pxCatItems ${activeIndex === 4 ? 'show' : 'hide'}`}>
                                <ul>
                                    {Contact.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="footerHeading">
                        <p>MOST SEARCHED KEYWORDS</p>
                    </div>
                    <Link to="/collection/shopAll">
                        <div className="keyWord">
                            <p> Perfume | Best perfume for man | attar | Ittar | attar perfume | oud attar | best attar for women | best attar for men | Perfume for men | Vitamin C Face Wash | Perfume for women |</p>
                            <p>Best perfume for women | Perfume set for women | Gift for Men | Face wash for oily skin | Body scrub | Dark circle | Perfume for girls | Dark circles removal cream | Acne face wash |</p>
                            <p>under eye cream | Gift sets for women | Body wash for women | Pocket perfume for men | De tan face pack | Pimple removal cream | Lip scrub | Tan removal face pack | Face wash for acne |</p>
                            <p>Exfoliate scrub | Gift set for men | Coffee Body Scrub | Best long lasting perfume for men | Perfumes for men under 500 | Perfumes for women under 500 | Perfume gift sets | Oud perfume |</p>
                            <p>Ceo perfume | Under eye cream for dark circles | Acne cream | Vitamin c cream for face | Body lotion for women | Long lasting perfume for women | Perfume gift pack for her |</p>
                            <p>Perfume gift pack for him | Charcoal face wash | Body wash for men | Best shower gel for women | Shower Gel for men and Women | Body lotion for dry skin | Body Lotion for men |</p>
                            <p>Body Lotion for women | Shower Gel and Perfume Combo | Shower Travel Kit | Travel Mini Kit | Birthday Gift for Women/Girls | Wedding Gifts for Couples | Gifts for Men Under 500 |</p>
                            <p>Gifts for Women Under 500 | Diwali Gift Ideas | Gifts for Men Under 500 | Gifts for Women Under 500 | Corporate Gifts | Diwali Gifts for Family and Friends | Diwali Gifts for Friends |</p>
                            <p>Diwali Gifts Under 500 | Diwali Gifts Under 1000 | Diwali Premium Gifts | Best Diwali Gifts | ©</p>
                        </div>
                    </Link>
                </div>
                <div className="tradeMark">
                    <div className="bottomTextLogos bottomTextLogosMini">
                        {Logos.map((logo, index) => (
                            <div className="topRightLogo">
                                <img src={logo} alt="" key={index} className='bottomTextLogo bottomTextLogoMini' />
                            </div>
                        ))}
                    </div>
                    <Link to="/"><p className='tradeMarkText'>© 2024, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer