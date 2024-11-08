import React, { useEffect, useState } from 'react'
import "../css/modal.css"
import Close from "../assets/icons/x.svg"
import Star from "../assets/icons/star.svg"
import OutlinedStar from "../assets/icons/outlinedStar.svg"

function ReviewImageModel({ closeModal, review }) {
    const [selectedImg, setSelectedImg] = useState(0)
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';

        const modalWrapper = document.querySelector('.modalWrapper');
        setTimeout(() => {
            modalWrapper?.classList.add('show');
        }, 10);

        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, []);

    const handleImgClick = (index) => {
        setSelectedImg(index)
    }
    return (
        <>
            <div className='modalWrapper uuuu'>
                <div className="modalMain reviewModelMainMain">
                    <div className="reviewModelMain">
                        <div className='reviewModelImageMain'>
                            <div className='reviewModelSelectedImg'>
                                <img src={review.img[selectedImg]} alt="" />
                            </div>
                            <div className='reviewModelSelectionImgMapping'>
                                {review.img.map((img, index) => {
                                    return <img src={img} alt="reviewImage" onClick={() => handleImgClick(index)} className={`reviewModelImageMapping ${index === selectedImg ? "reviewsSelectedImgBorder" : ""}`} />
                                })}
                            </div>
                        </div>
                        <div className='reviewModelImageDetails'>
                            <div className="nameIconCircleAndStarAnd">
                                <div className='modelReviewDetailNameIcon'>
                                    <p>{review.name[0]}</p>
                                </div>
                                <div className='starAndNameModel'>
                                    <span className='modelStarMapping'>
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src={i < review.stars ? Star : OutlinedStar}
                                                alt={i < review.stars ? "filled star" : "outlined star"}
                                                className='modelRatingStar'
                                            />
                                        ))}
                                    </span>
                                    <span className='reviewCostumerName'>{review.name}</span>
                                </div>
                            </div>
                            <div className="reviewsModelDesc">
                                <span className='verifiedText'>Verified</span>
                                <p className='reviewModelDescHead'>{review.descHead}</p>
                                <p>{review.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="productCardModalCloseBtn reviewModalCloseBtn" onClick={closeModal} >
                        <img src={Close} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewImageModel