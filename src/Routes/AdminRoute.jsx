import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminPending] = useAdmin();
    const location = useLocation();
    if (loading || isAdminPending) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;