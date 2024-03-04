import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post("/users", userInfo)
                    .then(result => {
                        console.log(result.data);
                        toast("Login successfully!");
                        navigate(from, { replace: true })
                    }
                    );
            });
    }
    return (
        <div className="m-10">
            <button onClick={handleGoogleLogin}><FcGoogle className="text-3xl"></FcGoogle></button>
        </div>
    );
};
export default SocialLogin;