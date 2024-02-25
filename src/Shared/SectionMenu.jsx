
import { Link, useParams } from "react-router-dom";
import MenuItem from "./MenuItem";


const SectionMenu = ({ items }) => {
  const {category} = useParams();
  console.log(category);
  console.log(items);
    return (
        <div>

            <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        items?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)

                    }
                </div>
                <div className="flex justify-center items-center">
                    <Link to={`/shop/${items.name}`}><button className="button mt-7">order your favorite food</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;