import { useEffect, useState } from 'react';
import HospitalsList from '../components/hospitals/HospitalsList';

const HospitalsPage = () => {
    // defining state for the hospitals
    // initial state, func to change this state
    const [hospitals, setHospitals] = useState([]);

    // loading state for loading
    const [isLoading, setIsLoading] = useState(true);


    // call use effect hook 
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
    
        const fetchHospitals = async () =>{
            try{
                // send HTTP GET request 
                const response = await fetch('http://localhost:3000/hospitals',{
                   signal: fetchSignal 
                });
                // parse returned data 
                const data = await response.json();

                // handle http errors 
                if(!response.ok){
                    throw Error(data.error);
                }
                
                setHospitals(data.hospitals);
                setIsLoading(false);

            }catch(err){
                console.log(err.message);
            }
        };

        fetchHospitals();

        return () => {
            fetchAbortController.abort();
        };
    }, [hospitals]);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <HospitalsList hospitals={hospitals} />
        </div>
    );
};

export default HospitalsPage;