import quote from "../../assets/others/quote 1.png";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../../Shared/SectionTitle";
import { useEffect, useState } from "react";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
   
    
    return (
        <div className="space-y-4">
            <SectionTitle title={'Testimonials'} heading={'What Our Clients Say'}></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id} className="mb-12 border-2 p-10 rounded-lg sm:grid sm:grid-cols-1 md:grid-cols-3">
                        <div className="flex space-x-8">
                            <img className="w-[70px] h-[70px] rounded-full" src={review.Image} alt="Image" />
                            <div>
                                <h3 className="text-2xl">{review.name}</h3>
                                <h4 className="text-xl">{review.profession}</h4>
                            </div>
                            <img className="pl-10" src={quote} alt="Quote" />
                        </div>
                        <div className="">
                            <p>{review.Comment}</p>
                        </div>
                        <div className="text-4xl flex items-center justify-center"><Rating style={{ maxWidth: 250 }} value={review.Ratings} /></div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Reviews;