import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/themes";
export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

