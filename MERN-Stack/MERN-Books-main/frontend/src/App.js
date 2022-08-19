import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./layout/Header";
import theme from "./utils/Theme";

import AppRoutes from "./AppRoutes";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
