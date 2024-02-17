import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
    ArrowLongRightIcon, ArrowLongLeftIcon
} from "@heroicons/react/24/solid";

function SlickCarousel({ children }) {
    let slickRef = useRef(null);

    const handleNextClick = () => {
        slickRef.slickNext();
    }

    const handlePrevClick = () => {
        slickRef.slickPrev();
    }
    const settings = {
        className: "slider variable-width",
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: true,
        focusOnSelect: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full lg:w-1/2 h-fit'>

            <div className="slider-container">
                <Slider {...settings} ref={slider => {
                    slickRef = slider;
                }}>
                    {children}
                </Slider>

                <div className="flex flex-row md:justify-start justify-center gap-4 mt-4">
                    <button className="btn" onClick={handlePrevClick}>
                        <ArrowLongLeftIcon className="w-5 h-5" />
                    </button>
                    <button className="btn" onClick={handleNextClick}>
                        <ArrowLongRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SlickCarousel;
