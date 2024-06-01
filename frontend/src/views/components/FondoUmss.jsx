import Box from "@mui/material/Box";
import LogoUmss from "../../assets/image/LogoUmss.png";

function FondoUmss({ children }) {
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        position='relative'
        sx={{
          "::before": {
            content: '""',
            backgroundImage: `url(${LogoUmss})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "500px 500px",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          },
        }}>
        {children}
      </Box>
    </>
  );
}

export default FondoUmss;
