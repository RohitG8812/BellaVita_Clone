import React from 'react'
import Review1 from "../assets/reviews/sanna.webp"
import Review2 from "../assets/reviews/simran.webp"
import Review3 from "../assets/reviews/pulkit.webp"
import Review4 from "../assets/reviews/avantika.webp"
import Review5 from "../assets/reviews/gunveet.webp"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

function ReviewSlider() {
    const Notes = [
        { img: Review1, name: "Sanna Thakur", insta: "sannathakur_", to: 'https://www.instagram.com/sannathakur_/', desc: "BELLAVITA has raised the bar for the perfume industry, Such good quality at very affordable price" },
        { img: Review2, name: "Simran Narang", insta: "simrannaranggg", to: 'https://www.instagram.com/simrannaranggg/', desc: "One of the best luxury perfumes and that too at an affordable price" },
        { img: Review3, name: "Pulkit Bangia", insta: "pulkitbangia", to: 'https://www.instagram.com/reel/CqFSCqbvCmQ/?utm_source=ig_web_copy_link', desc: "Bought it cause it was so affordable but I never thought the fragrance would be this good as well." },
        { img: Review4, name: "Avantika", insta: "avantikaginodia", to: 'https://www.instagram.com/avantikaginodia/', desc: "I have a very different taste when it comes to fragrance, I tried BELLAVITA  and Oh My God I have only been using CEO Women now." },
        { img: Review5, name: "Gunveet", insta: "gunveetdang", to: 'https://www.instagram.com/reel/CocNw7lDrHj/?utm_source=ig_web_copy_link', desc: "I always buy perfumes based on notes and BELLAVITA explain how different notes make you feel so well!" },
    ]

    const settings = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style, display: "block", background: "", borderRadius: "50%",
                }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }
    return (
        <div className='mainDiv'>
            <div className="review2Slider">
                <div className="SectionHeading">
                    WHAT OUR CUSTOMERS HAVE TO SAY
                </div>
                <div className="revSliderMain">
                    <Slider {...settings}>
                        {Notes.map((review) => (
                            <div key={review.id} className="reviewSlide">
                                <div className="reviewProfile">
                                    <img src={review.img} alt={review.name} className="profileImg" />
                                </div>

                                <div className="reviewText">
                                    <p>{review.text}</p>
                                    <span className="reviewName">⭐⭐⭐⭐⭐</span>
                                    <span className="reviewName">{review.desc}</span>
                                    <span className="reviewName rsName">— {review.name}</span>
                                    <Link to={review.to} target='blank'>
                                        <span className="reviewName instaReview">
                                            <svg aria-hidden="true" focusable="false" class="icon icon-instagram" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                            </svg>
                                            <span className='instaReviewHover'> {review.insta}</span>
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider