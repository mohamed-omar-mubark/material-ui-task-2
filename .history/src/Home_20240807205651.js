import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Material-UI App
        </Typography>
        <Typography variant="body1">
          This is a simple section on the home page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
