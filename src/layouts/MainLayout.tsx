import { Box, Container, Stack } from "@mui/material";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack spacing={6}>
      <Header />
      <Box>
        <Container maxWidth="xl">
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              bgcolor: "white",
              marginLeft: "auto",
              marginRight: "auto",
              maxHeight: 700,
              borderRadius: 5
            }}
          >
            <Outlet />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default MainLayout;
