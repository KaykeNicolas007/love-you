import { Route, Routes } from "react-router";
import Click from "./pages/Click";
import Lia from "./pages/Lia";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Click />} />
      <Route path="/lia" element={<Lia />} />
    </Routes>
  );
}

export default App;
