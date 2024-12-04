import { Navigate } from "react-router-dom";
import { useSession } from "../../context/SessionProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
