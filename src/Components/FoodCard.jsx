

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card w-96 h-[500px] bg-base-100 shadow-xl">

            <img src={image} alt="Food Image" className="rounded-t-md relative" />
            <p className="absolute top-4 right-6 bg-black text-white p-2 rounded-md">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="button bg-gray-200">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;