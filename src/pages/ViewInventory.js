import { useEffect,useState } from "react";
import ViewInventoryList from "../components/BloodInventory/ViewInventoryList";
import AuthContext from '../components/store/authContext';
import React, { useContext } from 'react';

const ViewInventoryPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [BloodBags, setBloodBags] = useState([]);

    const authContext = useContext(AuthContext);
    const hospitalID = authContext.hospitalId;
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        console.log(hospitalID);
        const fetchBloodBags = async () => {
            try{
                const response = await fetch('http://localhost:3000/BloodBag/ViewAcceptedBloodBagsInHospital/' + hospitalID ,{
                signal: fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setBloodBags(data.output);
            
            setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchBloodBags();
        return () =>{
            fetchAbortController.abort();
        };
    
    },
    [BloodBags]
    );
    if(isLoading){
        return (<p>please wait while we are loading data...</p>);
    }
    
    return (
        <div>
            <h1 className=" text-center text-2xl font-bold">Accepted Blood Bags available in your hospital</h1>
            <ViewInventoryList BloodBags={BloodBags}/>
        </div>
    );
};

export default ViewInventoryPage;