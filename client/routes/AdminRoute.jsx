import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Make sure the path is correct

const AdminRoute = () => {
  const { isAdmin } = useAuth(); // Check if user is admin

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
