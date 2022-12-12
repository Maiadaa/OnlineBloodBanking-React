import { useEffect,useState } from "react";
import PatientsList from "../components/patients/PatientsList";

const PatientsPage = () => {
    const [Patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('https://onlinebloodbank.azurewebsites.net/patient',{
                signal: fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setPatients(data.patietns);
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
    [Patients]
    );
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
    return (
        <div>
            <PatientsList Patients={Patients}/>
        </div>
    );
};

export default PatientsPage;