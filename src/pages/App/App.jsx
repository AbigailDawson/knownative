import { Routes, Route } from "react-router-dom";
import "./App.css";
import DemoTextPage from "../../demo/demo-pages/DemoTextPage/DemoTextPage";
import AboutPage from "../AboutPage/AboutPage";
import LandingPage from "../LandingPage/LandingPage";
import ContactPage from "../ContactPage/ContactPage";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/demo" element={<DemoTextPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
