import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ModifyRequest from "../components/patients/ModifyRequest";

const ModifyRequestPage = () => {
    const [Requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const requestId = params.requestId;
    const patientId = params.patientId;
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('http://localhost:3000/patient/viewRequest/' + patientId,{
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
    []
    );
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
    
    return (
        <div>
            <ModifyRequest Requests={Requests} patientId={patientId} requestId={requestId}/>
        </div>
    );
};

export default ModifyRequestPage;