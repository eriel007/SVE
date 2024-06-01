import Votar from "../views/client/usuario/Votar";
import ErrorPage from "../views/Error/ErrorPage";

const AdminRoutes = [
  {
    path: "/",
    element: <Votar />,
    errorElement: <ErrorPage />,
  },
];

export default AdminRoutes;
