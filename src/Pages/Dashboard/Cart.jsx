import { RiDeleteBin6Fill } from "react-icons/ri";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js'


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((prevTotal, item) => prevTotal + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Toastify({
                                text: "You have deleted a Item.",
                                className: "Deleted",
                                style: {
                                    background: "linear-gradient(to right, #ffc907, #01ff0a)",
                                }
                            }).showToast();
                        }
                    })

            }
        });
    }
    return (
        <div>
            <SectionTitle title={'WANNA ADD MORE?'} heading={'My Cart'}></SectionTitle>
            <div className="bg-slate-200 m-20 rounded-t-2xl">
                <div className="flex item-center justify-between text-3xl p-5">
                    <h2>Total Orders: {cart.length}</h2>
                    <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                    <button className="button text-xl !py-2">Pay</button>
                </div>
                <div className="flex">
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead className="">
                                <tr className="text-xl text-white !w-3/4 bg-gray-400 !my-20">
                                    <th>Serial</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, idx) => <tr key={item._id} className="text-xl pl-5">
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{item.name}</div>
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-3xl"><RiDeleteBin6Fill className="text-red-500"></RiDeleteBin6Fill></button>
                                        </th>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;