import { Helmet } from "react-helmet";
import PageCover from "../../Shared/PageCover";
import coverImg from "../../assets/home/banner.jpg"
import Foods from "./Foods";

const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <PageCover title={'Our Shop'} paragraph={'Would you like to try a dish?'} coverImg={coverImg}></PageCover>
            <Foods></Foods>
        </div>
    );
};

export default OurShop;