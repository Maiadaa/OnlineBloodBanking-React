import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AcceptPatientRequests = () => {
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
            const response = await fetch('http://localhost:3000/patient/acceptBagRequest/' + patientId + '/' + requestId ,{
                method: 'PUT',
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            navigate(`/getAllPatients`);
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

    return(
        <div>

        </div>
    );
};

export default AcceptPatientRequests;