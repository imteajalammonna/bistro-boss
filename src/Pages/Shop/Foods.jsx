import FoodCard from "../../Components/FoodCard";
import Tab from "../../Components/Tab";
import useMenu from "../../Hooks/useMenu";


const Foods = () => {
    const [menu] = useMenu();
    const dessertsItems = menu.filter(item => item.category === 'dessert');
    const pizzaItems = menu.filter(item => item.category === 'pizza');
    const soupItems = menu.filter(item => item.category === 'soup');
    const saladItems = menu.filter(item => item.category === 'salad');
    const drinksItems = menu.filter(item => item.category === 'drinks');
    const tabs = [
        {
            id: 1,
            title: 'Dessert',
            content: <div className="grid grid-cols-1 gap-10 md:grid-cols-3 place-items-center">{
                dessertsItems.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
            </div>,
        },
        {
            id: 2,
            title: 'Pizza',
            content: <div className="grid grid-cols-1 gap-10 md:grid-cols-3 container place-items-center">{
                pizzaItems.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
            </div>,
        },
        {
            id: 3,
            title: 'Soup',
            content: <div className="grid grid-cols-1 gap-10 md:grid-cols-3 container place-items-center">{
                soupItems.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
            </div>,
        },
        {
            id: 4,
            title: 'Salad',
            content: <div className="grid grid-cols-1 gap-10 md:grid-cols-3 container place-items-center">{
                saladItems.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
            </div>,
        },
        {
            id: 5,
            title: 'Drinks',
            content: <div className="grid grid-cols-1 gap-10 md:grid-cols-3 container place-items-center">{
                drinksItems.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
            </div>,
        },
    ];

    return (
        <div className="mb-20">
            <Tab tabs={tabs}></Tab>
        </div>
    );
};

export default Foods;
