import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"
import img6 from "../../assets/home/slide3.jpg"
import img7 from "../../assets/home/slide4.jpg"
import img8 from "../../assets/home/slide5.jpg"

const Category = () => {
    return (
        <section className="container mx-auto">
            <SectionTitle heading={'From 11:00am to 10:00pm'} title={'Order Online'}></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={6}
                freeMode={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;