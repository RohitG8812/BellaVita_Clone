import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        id: 1,
        name: "Sanna Thakur",
        text: "BELLAVITA has raised the bar for the perfume industry. Such good quality at a very affordable price.",
        profileImg: "/path/to/profile1.jpg",
    },
    {
        id: 2,
        name: "John Doe",
        text: "Amazing products! The quality and fragrance are unmatched.",
        profileImg: "/path/to/profile2.jpg",
    },
    {
        id: 3,
        name: "Jane Smith",
        text: "Great value for money. Will definitely recommend it to my friends.",
        profileImg: "/path/to/profile3.jpg",
    },
];

function ReviewsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enables next and prev buttons
        // autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }
    return (
        <div className="reviewSlider">
            <h2>WHAT OUR CUSTOMERS HAVE TO SAY</h2>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} className="reviewSlide">
                        <div className="reviewProfile">
                            <img src={review.profileImg} alt={review.name} className="profileImg" />
                        </div>
                        <div className="reviewText">
                            <p>{review.text}</p>
                            <span className="reviewName">— {review.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ReviewsSlider