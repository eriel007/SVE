import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import FondoUmss from "../../components/FondoUmss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Boton from "../../components/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    // Aquí puedes manejar el inicio de sesión
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <FondoUmss>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        bgcolor='rgba(242,243,244,0.95)'
        borderRadius='10px'
        border='2px solid #1976d2'
        p={3}>
        <Typography variant='h3' component='h3' gutterBottom color='#1976d2'>
          Login
        </Typography>
        <TextField
          label='Usuario'
          variant='standard'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 1, width: "100%", margin: "0 0 20px 0" }}
        />
        <FormControl
          sx={{
            width: "100%",
            mb: 1,
            margin: "0 0 30px 0",
          }}
          variant='standard'>
          <InputLabel htmlFor='standard-adornment-password'>
            Contraseña
          </InputLabel>
          <Input
            id='standard-adornment-password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Boton
          texto='Ingresar'
          ancho='160px'
          largo='50px'
          borde='10px'
          tamañoTexto='20px'
        />
      </Box>
    </FondoUmss>
  );
}

export default Login;
