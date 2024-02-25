import SectionCover from "../../Shared/SectionCover";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import coverImg from "../../assets/home/chef-service.jpg"
import Calling from "./Calling";
import Featured from "./Featured";
import Reviews from "./Reviews";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SectionCover coverImg={coverImg}></SectionCover>
            <PopularMenu></PopularMenu>
            <Calling></Calling>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;