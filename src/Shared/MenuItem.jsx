

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item || [];
    return (
        <div className="flex border rounded m-2 space-x-5 p-5">
            <div className="">
            <div className="flex justify-center" >
                <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[95px] h-20" src={image} alt="" />
            </div>
            </div>
           <div className="flex w-full justify-between">
           <div className="">
                <h3 className="text-2xl uppercase">{name} ----------</h3>
                <p className="text-sm">{recipe}</p>
            </div>
            <div className="text-yellow-400 ml-3">
                <p>{price}</p>
            </div>
           </div>
        </div>
    );
};

export default MenuItem;