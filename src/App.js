import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Maiada */
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";
import HospitalsPage from "./pages/HospitalsPage";
import AddHospitalPage from "./pages/AddHospitalPage";
import EditHospitalPage from './pages/EditHospitalPage';
import HospitalReportPage from './pages/HospitalReportPage';
import HospitalsYearlyReportPage from "./pages/HospitalsYearlyReportPage";
import SuperAdminHomePage from "./pages/SuperAdminHomePage";
import Layout from "./UI/layout/Layout";
import AuthProvider from './components/store/AuthProvider';

/* Abdelrahman Hagrass */
import PatientsPage from "./pages/patientsPage";
import AddPatientPage from "./pages/AddPatientPage";
import ViewPatientRequests from "./pages/ViewPatientRequests";
import AcceptPatientRequests from "./pages/AcceptRequestPage";
import UpdateSuperAdminPage from "./pages/UpdateSuperAdminPage";
import UpdateLabManagerPage from "./pages/UpdateLabManagerPage";
import UpdateLabAdminPage from "./pages/UpdateLabAdminPage";
import ModifyRequestPage from "./pages/ModifyRequestPage";
import MakeRequestPage from "./pages/MakeRequestPage";

/* Mahmoud Assem */
import InsertBloodBagPage from "./pages/InsertBloodBag";
import ViewInventoryPage from "./pages/ViewInventory";
import LabAdminHomePage from "./pages/LabAdminHomePage";
import LabManagerHomePage from "./pages/LabManagerHomePage";

/* Mohamed Taie */
import DonorHomePage from "./pages/DonorHomePage";
import ViewDonationCampsPage from "./pages/ViewDonationCampsPage";
import AddReservationPage from "./pages/AddReservationPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            

            {/* Maiada */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/SuperAdminHomePage" element={
              <div className="flex justify-center">
                <SuperAdminHomePage />
              </div>
            } />
            <Route path="/hospitals" element={
              <div className="flex justify-center">
                <HospitalsPage />
              </div>
            } />
            <Route path="/hospitals/report" element={
              <div className="flex justify-center">
                <HospitalsYearlyReportPage />
              </div>
            } />
            <Route path="/hospitals/report/:hospitalId" element={
              <div className="flex justify-center">
                <HospitalReportPage />
              </div>
            } />
            <Route path="/hospitals/addHospital" element={
              <div className="flex justify-center">
                <AddHospitalPage />
              </div>
            } />
            <Route path="/hospitals/editHospital/:hospitalID" element={
              <div className="flex justify-center">
                <EditHospitalPage />
              </div>
            } />

            {/* Abdelrahman Hagrass */}
            <Route path="/getAllPatients" element={
              <div className="flex justify-center">
                <PatientsPage />
              </div>
            } />
            <Route path="/AddNewPatient" element={
              <div className="flex justify-center bg-gray-50 ">
                <AddPatientPage />
              </div>
            } />
            <Route path="/patients/makeRequest" element={
              <div className="flex justify-center">
                <MakeRequestPage />
              </div>
            } />
            <Route path="/patients/viewReuest/:patientId" element={
              <div className="flex justify-center">
                <ViewPatientRequests />
              </div>
            } />
            <Route path="/patients/ModifyRequest/:patientId/:requestId" element={
              <div className="flex justify-center">
                <ModifyRequestPage />
              </div>
            } />
            <Route path="/patients/AcceptRequest/:patientId/:requestId" element={
              <div className="flex justify-center">
                <AcceptPatientRequests />
              </div>
            } />
            <Route path="/superAdmin/Update" element={
              <div className="flex justify-center">
                <UpdateSuperAdminPage />
              </div>
            } />
            <Route path="/LabManager/Update" element={
              <div className="flex justify-center">
                <UpdateLabManagerPage />
              </div>
            } />
            <Route path="/LabAdmin/Update" element={
              <div className="flex justify-center">
                <UpdateLabAdminPage />
              </div>
            } />

            {/* Mahmoud Assem */}
            <Route path="/LabAdminMenu" element={
              <div className="flex justify-center">
                <LabAdminHomePage />
              </div>
            } />
            <Route path="/LabManagerMenu" element={
              <div className="flex justify-center">
                <LabManagerHomePage />
              </div>
            } />
            <Route path="/InsertBloodBag" element={
              <div className="flex justify-center">
                <InsertBloodBagPage /> 
              </div>
            } />
            <Route path="/" element={
              <div className="flex justify-center">
                <ViewInventoryPage />
              </div>
            } />
            {/* ViewPendingRequests */}
            
            {/* Mohamed Taie */}
            <Route path="/DonorHomePage" element={
              <div className="flex justify-center">
                <DonorHomePage />
              </div>
            } />
            <Route path="/Donations" element={
              <div className="flex justify-center">
                <ViewDonationCampsPage />
              </div>
            } />
            <Route path="/addDonorReservation" element={
              <div className="flex justify-center">
                <AddReservationPage />
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
