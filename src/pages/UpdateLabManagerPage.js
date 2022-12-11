import { useState, useEffect } from "react";
import UpdateLabManagerAccount from "../components/userAccounts/UpdateLabManagerAccount";

const UpdateLabManagerPage = () => {
    const [Hospitals, setHospitals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('http://localhost:3000/hospitals',{
                signal: fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setHospitals(data.hospitals);
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
    console.log(Hospitals);
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
    return (
        <div>
            <UpdateLabManagerAccount hospitals={Hospitals} />
        </div>
    );
};

export default UpdateLabManagerPage;