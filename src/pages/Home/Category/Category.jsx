import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slider1.png';
import slide2 from '../../../assets/home/slider2.png';
import slide3 from '../../../assets/home/slider3.png';
import slide4 from '../../../assets/home/slider4.png';
import slide5 from '../../../assets/home/slider5.png';


import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"কাইয়ুম চৌধুরী"}
                heading={"শিল্পরীতি"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-black">Book Cover</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Drawing</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Painting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Poster</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Sketch</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;