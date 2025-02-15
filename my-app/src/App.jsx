import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OtpPage from "./pages/OtpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
