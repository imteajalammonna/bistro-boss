import loginImg from "../../assets/others/authentication2.png"
import loginBG from "../../assets/others/authentication.png"

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <div style={{ backgroundImage: `url(${loginBG})` }} className="flex justify-center items-center min-h-[80vh] py-32 bg-cover bg-no-repeat w-full">
            <div className="w-1/2 pl-32 pr-10">
                <img src={loginImg} alt="Login" className="object-cover h-full w-full" />
            </div>
            <div className="w-1/2">
                <form onSubmit={handleSubmit} className="rounded mb-4">
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex w-1/2  items-center justify-center">
                        <button
                            className="button w-2/3 active:border-b-[3px] active:border-b-white"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;