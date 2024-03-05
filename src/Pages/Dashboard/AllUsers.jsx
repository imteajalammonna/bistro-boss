import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log(users);
            return res.data;
        }
    });
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast(`${user.name} is ADMIN now!`)
                    refetch();
                }
            })
    }
    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast('You have deleted a user.')
                        }
                    })

            }
        });
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <SectionTitle title={'Manage All Users'} heading={'How Many???'}></SectionTitle>
            <div className="bg-slate-200 mx-20 px-8 rounded-t-2xl">
                <div className="flex item-center justify-between px-14 text-style text-3xl p-5">
                    <h2 className="text-style text-4xl font-bold">Total Orders: <span className="text-3xl font-normal">{users.length}</span></h2>
                    <h2 className="text-style text-4xl font-bold">Total Price: <span className="text-3xl font-normal">$</span></h2>
                    <button className="button bg-slate-300 text-xl !py-2">Pay</button>
                </div>
                <div className="flex">
                    <div className="overflow-x-auto w-full">
                        <table className="table text-center">
                            {/* head */}
                            <thead className="rounded-t-2xl">
                                <tr className="text-xl !rounded-t-2xl text-white bg-gray-400 rounded-3xl ">
                                    <th>Serial No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) => <tr key={idx} className="text-xl pl-5">
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="font-bold">{user.name}</div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            <div className="flex items-center justify-center gap-3">
                                                {user.role === 'admin' ? <button className="text-white font-bold btn bg-pink-600 hover:bg-pink-600">ADMIN</button> : <button className="btn bg-pink-300" onClick={() => handleMakeAdmin(user)}><FaUsers className="text-3xl"></FaUsers></button>}
                                            </div>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteUser(user)} className="btn text-3xl"><RiDeleteBin6Fill className="text-red-500"></RiDeleteBin6Fill></button>
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

export default AllUsers;