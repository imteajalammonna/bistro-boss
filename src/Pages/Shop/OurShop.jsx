import { Helmet } from "react-helmet";
import PageCover from "../../Shared/PageCover";
import coverImg from "../../assets/menu/banner3.jpg"

const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <PageCover title={'Our Shop'} paragraph={'Would you like to try a dish?'} coverImg={coverImg}></PageCover>
        </div>
    );
};

export default OurShop;