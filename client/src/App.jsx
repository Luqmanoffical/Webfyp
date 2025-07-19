import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Register from "./Components/Login/Login";
import Setting from "./Components/Setting/Setting";
import History from "./Components/History/History";
import {
  AboutUs,
  ContactUs,
  FAQ,
  PrivacyPolicy,
  TermsConditions,
  WhyChooseUs,
} from "./Components/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop";

function RouteErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return <Navigate to="/" replace />;
  }

  return children;
}

const App = () => {
  return (
    <BrowserRouter>
      <RouteErrorBoundary>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQ />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Register />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </RouteErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
