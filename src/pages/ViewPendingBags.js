import { useEffect,useState } from "react";
import ViewPendingBagsList from "../components/BloodInventory/ViewPendingBagsList";

const ViewPendingBagsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [BloodBags, setBloodBags] = useState([]);
    const hospitalID = "638e7c0f8dce3f12d68269dd";
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchBloodBags = async () => {
            try{
            const response = await fetch('http://localhost:3000/BloodBag/ViewPendingBloodBagsInHospital/638e7c0f8dce3f12d68269dd' ,{
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
            <h1 className=" text-center text-2xl font-bold">Pending Blood Insertion Requests</h1>
            <ViewPendingBagsList BloodBags={BloodBags}/>
        </div>
    );
};

export default ViewPendingBagsPage;