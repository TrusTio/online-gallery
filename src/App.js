import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppRoutes } from "./AppRoutes";
import { AppBar, MainContent } from "./components/Layout";
import { darkTheme, lightTheme } from "./components/Layout/Theme/theme";
import { DarkThemeToggle } from "./components/generic";
import { GlobalStyles } from "./components/Layout/Theme/global";
import { useDarkMode } from "./components/generic/useDarkMode";
import { AuthContextProvider } from "contexts/AuthContext";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <AuthContextProvider>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <AppBar>
              <DarkThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </AppBar>
            <MainContent>
              <AppRoutes></AppRoutes>
            </MainContent>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
