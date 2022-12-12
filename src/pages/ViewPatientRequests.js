import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import RequestsList from "../components/patients/RequestsList";
import { useNavigate } from 'react-router-dom';

const ViewPatientRequests = () => {
    const [Requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const id = params.patientId;
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('https://bloodera.azurewebsites.net/patient/viewRequest/' + id,{
                signal: fetchSignal
            });
            const data = await response.json();
            if(data.msg == "empty"){
                navigate(`/getAllPatients`);
            }
            setRequests(data.viewRequest);
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
    [Requests]
    );
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
    
    return (
        <div>
            <RequestsList Requests={Requests} _id={id}/>
        </div>
    );
};

export default ViewPatientRequests;