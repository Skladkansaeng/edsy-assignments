import { AppBar, Button, Container, Toolbar } from "@mui/material";
import EdsyLogo from "@assets/edsy-logo.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            <EdsyLogo />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
