import Boton from "../../../components/others/Button";
import FondoUmss from "../../../components/others/FondoUmss";
import { useNavigate } from "react-router-dom";

function Votar() {
  const navigate = useNavigate();
  return (
    <>
      <FondoUmss>
        <Boton
          texto='Votar'
          ancho='170px'
          largo='70px'
          borde='10px'
          tamañoTexto='25px'
          onClick={() => navigate("/verificacion")}
        />
      </FondoUmss>
    </>
  );
}

export default Votar;
