import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";
import AddPatientPage from "./pages/AddPatientPage";
import HospitalsPage from "./pages/HospitalsPage";
import LabAdminHomePage from "./pages/LabAdminHomePage";
import MakeRequestPage from "./pages/MakeRequestPage";

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
          <div className="flex justify-center bg-gray-50 ">
          <AddPatientPage />
        </div>
        }/>
        <Route path="/hospitals" element={
          <div className="flex justify-center">
          <HospitalsPage />
        </div>
        }/>
        <Route path="/patients/makeRequest" element={
          <div className="flex justify-center">
          <MakeRequestPage />
        </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
