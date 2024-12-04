import React from "react";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1300,
      }}>
      {children}
    </Box>
  );
}
export default Layout;
