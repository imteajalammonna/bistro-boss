import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Profile = () => {

    const { user, logOut } = useContext(AuthContext);

    const { displayName, photoURL, email } = user || [];
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="container min-h-[80vh] pt-28 mx-auto p-4">
            <header className="App-header">
                <h1 className="text-3xl font-bold text-white p-4 bg-blue-500">My Profile</h1>
            </header>
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <div className="flex items-center justify-center mb-6">
                    <img
                        className=" rounded "
                        src={photoURL}
                        alt="Profile"
                    />
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{displayName}</h2>
                    <p className="text-lg font-semibold text-gray-600">Web Developer</p>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">About Me</h3>
                    <p className="text-gray-600 leading-relaxed">
                        I am a passionate web developer with a love for creating elegant and efficient
                        solutions. In my free time, I enjoy exploring new technologies and contributing to
                        open-source projects.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
                    <p className="text-gray-600">Email: {email}</p>
                    <p className="text-gray-600">LinkedIn: linkedin.com/in/johndoe</p>
                    {/* Add more contact information as needed */}
                    <button onClick={handleLogOut} className="button">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;