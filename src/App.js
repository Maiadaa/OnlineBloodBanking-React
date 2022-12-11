import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/patientsPage";
import AddPatientPage from "./pages/AddPatientPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import HospitalsPage from "./pages/HospitalsPage";
import AddHospitalPage from "./pages/AddHospitalPage";
import HospitalReportPage from './pages/HospitalReportPage';
import HospitalsYearlyReportPage from "./pages/HospitalsYearlyReportPage";
import LabAdminHomePage from "./pages/LabAdminHomePage";
import LabManagrHomePage from "./pages/LabManagerHomePage";
import MakeRequestPage from "./pages/MakeRequestPage";
import ViewPatientRequests from "./pages/ViewPatientRequests";
import ModifyRequestPage from "./pages/ModifyRequestPage";
import AcceptPatientRequests from "./pages/AcceptRequestPage";
import Layout from "./UI/layout/Layout";
import AuthProvider from './components/store/AuthProvider';
import UpdateSuperAdminPage from "./pages/UpdateSuperAdminPage";
import UpdateLabManagerPage from "./pages/UpdateLabManagerPage";
import UpdateLabAdminPage from "./pages/UpdateLabAdminPage";
//import AddDonationCampPage from "./page/AddDonationCampPage";
//import AddReservationPage from "./page/AddReservationPage";
//import DonationCampsPage from "./pages/DonationCampsPage";
//import DonationsPage from "./pages/DonationsPage";
//import ReservationHistoryPage from "./pages/ReservationHistoryPage";
import DoctorHomePage from "./pages/DoctorHomePage";
import ManagePatientPage from "./pages/ManagePatientsPage";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
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
            <Route path="/hospitals/:hospitalId" element={
              <div className="flex justify-center">
                <HospitalReportPage />
              </div>
            } />
            <Route path="/hospitals/addHospital" element={
              <div className="flex justify-center">
                <AddHospitalPage />
              </div>
            } />
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
            <Route path="LabAdminMenu" element={
              <div className="flex justify-center">
                <LabAdminHomePage />
              </div>
            } />
            <Route path="LabManagerMenu" element={
              <div className="flex justify-center">
                <LabManagrHomePage />
              </div>
            } />
            <Route path="InsertBloodBag" element={
              <div className="flex justify-center">
                <LabManagrHomePage />
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

{/*             <Route path="/Donations" element={
              <div className="flex justify-center">
                <DonationsPage />
              </div>
            } />

           <Route path="/Donations" element={
              <div className="flex justify-center">
                <AddDonationCampPage />
              </div>
            } />
            <Route path="/Donations" element={
              <div className="flex justify-center">
                <AddReservationPage />
              </div>
            } />
            <Route path="/Donations" element={
              <div className="flex justify-center">
                <DeleteReservationPage />
              </div>
            } />
            <Route path="/Donations" element={
              <div className="flex justify-center">
                <ReservationHistoryPage />
              </div>
            } />
            <Route path="/Donations" element={
              <div className="flex justify-center">
                <DonationCampsPage />              
                </div>
            } /> */}

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
            <Route path="/patient/Update/:patientId" element={
              <div className="flex justify-center">
                <ManagePatientPage />
              </div>
            } />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/DoctorHomePage" element={
              <div className="flex justify-center">
                <DoctorHomePage />
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
