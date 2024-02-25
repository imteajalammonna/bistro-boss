import person1 from "../../assets/others/Ellipse 2 (1).png";
import person2 from "../../assets/others/Ellipse 2.png";
import quote from "../../assets/others/quote 1.png";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../../Shared/SectionTitle";
const Reviews = () => {

    const reviews = [
        { id: 1, Image: person1, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 5, profession: "Buisnessman", },
        { id: 2, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 3, profession: "Buisnessman", },
        { id: 3, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 4, profession: "Buisnessman", },
        { id: 4, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 5, profession: "Buisnessman", },
        { id: 5, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 4, profession: "Buisnessman", },
        { id: 6, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 5, profession: "Buisnessman", },
        { id: 7, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 2, profession: "Buisnessman", },
        { id: 8, Image: person2, name: 'Awalad Hossain', Comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ", Ratings: 3, profession: "Buisnessman", },
    ]
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
                            <img src={review.Image} alt="Image" />
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