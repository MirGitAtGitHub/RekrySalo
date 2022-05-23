import './App.css';
import Home from "./pages/Home";
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import FourthStep from "./pages/FourthStep";
import FifthStep from "./pages/FifthStep";
import SixthStep from "./pages/SixthStep";
import Verification from "./pages/Verification";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="FirstStep" element={<FirstStep />} />
          <Route path="SecondStep" element={<SecondStep />} />
          <Route path="ThirdStep" element={<ThirdStep />} />
          <Route path="FourthStep" element={<FourthStep />} />
          <Route path="FifthStep" element={<FifthStep />} />
          <Route path="SixthStep" element={<SixthStep />} />
          <Route path="Verification" element={<Verification />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
