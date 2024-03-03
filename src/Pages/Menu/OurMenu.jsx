import { Helmet } from "react-helmet";
import useMenu from "../../Hooks/useMenu";
import MenuCover from "../../Shared/MenuCover";
import PageCover from "../../Shared/PageCover";
import SectionMenu from "../../Shared/SectionMenu";
import SectionTitle from "../../Shared/SectionTitle";
import coverIMG from "../../assets/menu/banner3.jpg"
import pageCoverImg from "../../assets/menu/banner3.jpg"
import "./Spinner.css";
const OurMenu = () => {
    const [menu, loading] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    const dessertsItems = menu.filter(item => item.category === 'dessert');
    const drinksItems = menu.filter(item => item.category === 'drinks');
    const soupItems = menu.filter(item => item.category === 'soup');
    const saladItems = menu.filter(item => item.category === 'salad');
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen"><svg className="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000"></circle>
        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000"></circle>
        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000"></circle>
        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000"></circle>
    </svg>
        </div>
    }
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className="">

                <PageCover title={'Our Menu'} paragraph={'Would you like to try a dish?'} coverImg={pageCoverImg}></PageCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={popularItems}></SectionMenu>
            </div>

            <div className="">
                <MenuCover title={'Dessert'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionMenu items={dessertsItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover title={'soup'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionMenu items={drinksItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover coverImg={coverIMG} title={'Drinks'} paragraph={"Lorem Ipsum has been the industryU+2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionMenu items={soupItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover title={'Pizza'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionMenu items={saladItems}></SectionMenu>
            </div>
        </div>
    );
};

export default OurMenu;