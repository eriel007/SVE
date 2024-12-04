import { FacultadContextProvider } from "../context/FacultadProvider";
import { CarreraContextProvider } from "../context/CarreraProvider";
import { UsuarioContextProvider } from "../context/UsuarioProvider";
import { RolContextProvider } from "../context/RolProvider";
import { JuradoContextProvider } from "../context/JuradoProvider";
import { TecnicoContextProvider } from "../context/TecnicoProvider";

const AdministradorProvider = ({ children }) => {
  return (
    <FacultadContextProvider>
      <CarreraContextProvider>
        <UsuarioContextProvider>
          <RolContextProvider>
            <JuradoContextProvider>
              <TecnicoContextProvider>{children}</TecnicoContextProvider>
            </JuradoContextProvider>
          </RolContextProvider>
        </UsuarioContextProvider>
      </CarreraContextProvider>
    </FacultadContextProvider>
  );
};

export default AdministradorProvider;
