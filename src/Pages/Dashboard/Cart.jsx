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
            <div className="bg-slate-200 mx-20 px-8 rounded-t-2xl">
                <div className="flex item-center justify-between px-14 text-style text-3xl p-5">
                    <h2 className="text-style text-4xl font-bold">Total Orders: <span className="text-3xl font-normal">{cart.length}</span></h2>
                    <h2 className="text-style text-4xl font-bold">Total Price: <span className="text-3xl font-normal">${totalPrice.toFixed(2)}</span></h2>
                    <button className="button bg-slate-300 text-xl !py-2">Pay</button>
                </div>
                <div className="flex">
                    <div className="overflow-x-auto w-full">
                        <table className="table text-center">
                            {/* head */}
                            <thead className="rounded-t-2xl">
                                <tr className="text-xl !rounded-t-2xl text-white bg-gray-400 rounded-3xl ">
                                    <th>Serial No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, idx) => <tr key={item._id} className="text-xl pl-5">
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center justify-center gap-3">
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