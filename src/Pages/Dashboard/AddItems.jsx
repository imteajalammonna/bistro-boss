import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // send the data to server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post("/menu", menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset();
                toast(`${data.name} added Successfully!`)
            }
        }
        console.log('without img url ', res.data)
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <SectionTitle title={'Add New Item'} heading="What's New?"></SectionTitle>
            <div className="m-20 mx-40 border p-10 bg-slate-300 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-3">
                        <div className="label">
                            <span className="label-text">Recipe Name?</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <div className="flex items-center w-full justify-between my-2">
                        <label className="form-control w-full mr-3">
                            <div className="label">
                                <span className="label-text">Which</span>
                            </div>
                            <select defaultValue={'default'}  {...register("category")} className="select select-bordered">
                                <option disabled value="default">Select a Category.</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                            </select>
                        </label>
                        <label className="form-control w-full ml-3">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="text" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <label className="form-control my-4">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <input {...register("image")} className="my-5 " type="file" name="image" id="" />
                    <br />
                    <button className="button btn">Add Item <FaUtensils className="mx-3"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;