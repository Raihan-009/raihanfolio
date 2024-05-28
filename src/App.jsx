import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageSection from "./pages/Landing-Page";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={<LandingPageSection />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
