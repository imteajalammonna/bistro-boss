

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item || [];
    return (
        <div className="flex border rounded m-2 justify-center space-x-4 p-5">
            <div className="flex justify-center" >
                <img style={{borderRadius:'0 180px 180px 200px'}} className="w-20 h-20" src={image} alt="" />
            </div>
            <div className="">
                <h3 className="text-2xl uppercase">{name} ----------</h3>
                <p className="text-sm">{recipe}</p>
            </div>
            <div className="text-yellow-400">
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;