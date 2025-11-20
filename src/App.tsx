import { Route, Routes } from "react-router";
import AdminHeader from "./components/layout/Header";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
