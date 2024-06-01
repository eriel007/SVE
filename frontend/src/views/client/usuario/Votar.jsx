import Boton from "../../components/Button";
import FondoUmss from "../../components/FondoUmss";

function Votar() {
  return (
    <>
      <FondoUmss>
        <Boton
          texto='Votar'
          ancho='170px'
          largo='70px'
          borde='10px'
          tamañoTexto='25px'
        />
      </FondoUmss>
    </>
  );
}

export default Votar;
