import { useEffect, useState } from 'react';
import DonationsList from '../components/Donations/DonationsList';

const DonationsPage = () => {
    // defining state for the donations
    // initial state, func to change this state
    const [donations, setDonationCamps] = useState([]);

    // loading state for loading
    const [isLoading, setIsLoading] = useState(true);


    // call use effect hook 
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
    
        const fetchDonationCamps = async () =>{
            try{
                // send HTTP GET request 
                const response = await fetch('http://localhost:3000/donation',{
                   signal: fetchSignal 
                });
                // parse returned data 
                const data = await response.json();

                // handle http errors 
                if(!response.ok){
                    throw Error(data.error);
                }
                
                setDonationCamps(data.donation);
                setIsLoading(false);

            }catch(err){
                console.log(err.message);
            }
        };

        fetchDonationCamps();

        return () => {
            fetchAbortController.abort();
        };
    }, []);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <DonationsList donation={donation} />
        </div>
    );
};

export default DonationsPage;