import { useEffect,useState } from "react";
import ViewPendingBagsList from "../components/BloodInventory/ViewPendingBagsList";
import { useParams } from 'react-router-dom';

const ViewPendingBagsPage = () => {
    const [BloodBags, setBloodBags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const hospitalId = params.hospitalId;

    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchBloodBags = async () => {
            try{
                console.log(hospitalId);
            const response = await fetch('http://localhost:3000/BloodBag/ViewPendingBloodBagsInHospital/' + hospitalId ,{
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
    
    },[BloodBags]);
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