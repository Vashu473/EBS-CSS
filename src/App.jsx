import React from "react";
import { Route, Routes } from "react-router-dom";

import View from "./components/View";
import { Footer, Navbar } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./components/Privacy/Privacy";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TermsAndConditions from "./components/Terms/Terms";
import ContactPage from "./components/Contact/Contact";

const App = () => {
  const queryClient = new QueryClient();
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar isLogin={true}  />
        <ToastContainer />
        <Routes>
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<TermsAndConditions />} />
          <Route exact path="/Contact" element={<ContactPage />} />
          <Route exact path="/" element={<View />} />
          <Route exact path="*" element={<View />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
