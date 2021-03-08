import React, { useEffect } from "react";
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
import { getMe } from "components/api/gallery";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [isLoading, setIsLoading] = React.useState(true);
  const [userData, setUserdata] = React.useState(null);

  useEffect(() => {
    getMe()
      .then((response) => {
        setUserdata(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div> Loading </div>;
  }
  return (
    <AuthContextProvider userData={userData}>
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
