import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ManagePatient from "../components/patients/ManagePatient";

const ManagePatientPage = () => {
    const params = useParams();
    const [Hospitals, setHospitals] = useState([]);
    const [patient, setPatient] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const patientId = params.patientId;
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('http://localhost:3000/hospitals',{
                signal: fetchSignal
            });
            const response2 = await fetch('http://localhost:3000/patient/' + patientId, {
                signal: fetchSignal
            });
            const data = await response.json();
            const data2 = await response2.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setHospitals(data.hospitals);
            setPatient(data2.patient);
            setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchPatients();
        return () =>{
            fetchAbortController.abort();
        };
    
    },
    [patient, Hospitals]
    );
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
    return (
        <div>
            <ManagePatient hospitals={Hospitals} Patient={patient}/>
        </div>
    );
};

export default ManagePatientPage;