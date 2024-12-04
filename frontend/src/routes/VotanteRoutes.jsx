import Votar from "../views/client/votante/Votar";
import Candidatos from "../views/client/votante/Candidatos";
import VerificadorBiometric from "../views/client/votante/VerificadorBiometric";
import Informacion from "../views/client/votante/Informacion";
import ProtectedRoute from "../components/others/ProtectedRoute";

const VotanteRoutes = [
  {
    path: "/",
    element: <Votar />,
  },
  {
    path: "/verificacion",
    element: <VerificadorBiometric />,
  },
  {
    path: "/informacion",
    element: (
      <ProtectedRoute>
        <Informacion />
      </ProtectedRoute>
    ),
  },
  {
    path: "/candidatos",
    element: (
      <ProtectedRoute>
        <Candidatos />
      </ProtectedRoute>
    ),
  },
];

export default VotanteRoutes;
