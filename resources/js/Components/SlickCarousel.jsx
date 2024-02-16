import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SlickCarousel({children}) {
    const settings = {
        className: "slider variable-width",
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
        <Slider {...settings}>
            {children}
        </Slider>
        </div>
    );
}

export default SlickCarousel;
