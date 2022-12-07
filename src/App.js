import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";
import AddPatientPage from "./pages/AddPatientPage";
import HospitalsPage from "./pages/HospitaslPage";
import LabAdminHomePage from "./pages/LabAdminHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/getAllPatients" element={
          <div className="flex justify-center">
          <PatientsPage />
        </div>
        }/>
        <Route path="/AddNewPatient" element={
          <div className="flex justify-center">
          <AddPatientPage />
        </div>
        }/>
        <Route path="/getAllHospitals" element={
          <div className="flex justify-center">
          <HospitalsPage />
        </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
