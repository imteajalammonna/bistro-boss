import useMenu from "../../Hooks/useMenu";
import MenuCover from "../../Shared/MenuCover";
import SectionMenu from "../../Shared/SectionMenu";
import SectionTitle from "../../Shared/SectionTitle";


const OurMenu = () => {
    const [menu, loading] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    const dessertsItems = menu.filter(item => item.category === 'dessert');
    const drinksItems = menu.filter(item => item.category === 'drinks');
    const soupItems = menu.filter(item => item.category === 'soup');
    const saladItems = menu.filter(item => item.category === 'salad');
    console.log(popularItems);
    if (loading) {
        return <div className="flex items-center justify-center max-h-screen">
            <span className="loading loading-spinner text-secondary"></span>
        </div>
    }
    return (
        <div className="">
            <div className="">

                <MenuCover title={'Our Menu'} paragraph={'Would you like to try a dish?'}></MenuCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={popularItems}></SectionMenu>
            </div>

            <div className="">
                <MenuCover title={'Dessert'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={dessertsItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover title={'Dessert'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={drinksItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover title={'Dessert'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={soupItems}></SectionMenu>
            </div>
            <div className="">
                <MenuCover title={'Dessert'} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCover>
                <SectionTitle heading={"Don't Miss"} title={"TODAY'S OFFER"}></SectionTitle>
                <SectionMenu items={saladItems}></SectionMenu>
            </div>
        </div>
    );
};

export default OurMenu;