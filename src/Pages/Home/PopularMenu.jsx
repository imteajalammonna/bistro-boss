import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
            <SectionTitle title={'FROM OUR MENU'} heading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    > </MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center my-5">
                <Link to={'/menu'}><button className="button">View Full Menu</button></Link>
            </div>
        </div>
    );
};

export default PopularMenu;