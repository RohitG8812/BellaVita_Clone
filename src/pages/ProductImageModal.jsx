import React, { useEffect } from 'react'
import "../css/modal.css"
import Close from "../assets/icons/x.svg"


function ProductImageModal({ closeModal, product }) {
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';

        // Add `show` class to enable animation
        const modalWrapper = document.querySelector('.modalWrapper');
        setTimeout(() => {
            modalWrapper?.classList.add('show');
        }, 10);

        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, []);
    return (
        <>
            <div className='modalWrapper'>
                <div className="modalMain">
                    <div className="modalImgMapping">
                        {product.mainImg.map((img, index) => {
                            return <div>
                                <img src={img} alt="" className='modalMapSingleImg' />
                            </div>
                        })}
                    </div>
                    <div className="productCardModalCloseBtn" onClick={closeModal} >
                        <img src={Close} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductImageModal