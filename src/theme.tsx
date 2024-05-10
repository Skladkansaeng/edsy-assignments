import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: { primary: { main: "#1F46B1" } },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  components: { MuiButton: { styleOverrides: { root: { borderRadius: 22} } } }
});

export default theme;
