import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Boton from "../others/Button";
function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "13%",
        width: "100%",
        padding: "0px 16px",
        borderBottom: "2px solid #1565c0",
      }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon sx={{ fontSize: "65px", marginRight: "10px" }} />
        <Box>
          <Typography variant='body1'>Rol del Usuario</Typography>
          <Typography variant='h5'>Nombre del Usuario</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
