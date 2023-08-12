import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { UserContextProvider } from "./contexts/UserContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <GlobalStyles />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}
