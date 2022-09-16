import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from './imgs/slide1.png'
import slide2 from './imgs/slide2.png'
import slide3 from './imgs/slide3.png'
import slide4 from './imgs/slide4.png'
import slide5 from './imgs/slide5.png'


export default function SliderComponent() {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper w-96 ml-auto mt-14"
            >
                <SwiperSlide>
                    <img
                        className="object-fill h-96"
                        src={slide1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-96"
                        src={slide2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-96"
                        src={slide3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-96"
                        src={slide4}
                        alt="image slide 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-96"
                        src={slide5}
                        alt="image slide 5"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}