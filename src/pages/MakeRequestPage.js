import { useState, useEffect } from "react";
import MakeRequest from "../components/patients/MakeRequest";

const MakeRequestPage = () => {
    const [Patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('http://localhost:3000/patient',{
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
            <MakeRequest patients={Patients} />
        </div>
    );
};

export default MakeRequestPage;