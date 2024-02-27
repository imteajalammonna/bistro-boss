import loginImg from "../../assets/others/authentication2.png"
import loginBG from "../../assets/others/authentication.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";




const SignUp = () => {
    const [btnDisabled, setBtnDisabled] = useState(true);

    const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);

    const captchaRef = useRef(null);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        createUser(email, password)
            .then(result => {
                console.log('user', result.user);
                setUser(result.user)
            })

    };
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }
    return (
        <div style={{ backgroundImage: `url(${loginBG})` }} className="flex justify-center items-center min-h-[80vh] py-32 bg-cover bg-no-repeat w-full">
            <div className="w-1/2 pl-32 pr-10">
                <img src={loginImg} alt="Login" className="object-cover h-full w-full" />
            </div>
            <div className="w-1/2">
                <form onSubmit={handleSubmit} className="rounded mb-4">
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                            name="Email"
                            required
                        />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <p className="ml-2">Already have an account? <Link to={'/login'} className="underline text-green-500 font-bold">Login here</Link></p>
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text "><LoadCanvasTemplate></LoadCanvasTemplate></span>
                        </label>
                        <input ref={captchaRef}
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="captcha"
                            type="captcha"
                            placeholder="Type here"
                            required
                        /> <br />
                        <button onClick={handleValidate} className="button ml-32">Validate</button>
                    </div>
                    <div className="flex w-1/2  items-center justify-center">
                        <input
                            disabled={btnDisabled}
                            className="btn-secondary btn w-2/3 active:border-b-[3px] active:border-b-white"
                            type="submit"
                        />
                    </div>
                </form>
                <div className="flex items-center justify-center w-1/2">
                    <button onClick={handleGoogleLogin} className="rounded-full p-5 bg-cyan-400">Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;