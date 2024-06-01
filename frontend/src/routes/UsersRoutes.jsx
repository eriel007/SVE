import Votar from "../views/client/usuario/Votar";
import Candidatos from "../views/client/usuario/Candidatos";
import ErrorPage from "../views/Error/ErrorPage";

const UserRoutes = [
  {
    path: "/",
    element: <Votar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/candidatos",
    element: <Candidatos />,
    errorElement: <ErrorPage />,
  },
];

export default UserRoutes;
