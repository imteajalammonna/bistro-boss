import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js'
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleFoodAddToCart = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Toastify({
                            text: "Wow! You have added to cart.",
                            className: "success",
                            style: {
                                background: "linear-gradient(to right, #ffc907, #01ff0a)",
                            }
                        }).showToast();
                        refetch();
                    }
                });
        }
        else {
            Swal.fire({
                title: "Sorry. You are not logged in.",
                text: "Please Login to add this to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Okay. Login Now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });

                }
            });
        }
    }
    return (
        <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
            <img src={image} alt="Food Image" className="rounded-t-md relative" />
            <p className="absolute top-4 right-6 bg-black text-white p-2 rounded-md">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleFoodAddToCart} className="button bg-gray-200">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;