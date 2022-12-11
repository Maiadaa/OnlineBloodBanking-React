import DonationsList from '../components/Donations/DonationsList';
import { useEffect, useState } from 'react';

const ViewDonationCampsPage = (props) => {
    const [camps, setCamps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // call use effect hook 
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchCamps = async () => {
            try {
                // send HTTP GET request 
                const response = await fetch('http://localhost:3000/donations/Retrieve-donation-camps', {
                    signal: fetchSignal
                });
                // parse returned data 
                const data = await response.json();

                // handle http errors 
                if (!response.ok) {
                    throw Error(data.error);
                }

                setCamps(data.camps);
                setIsLoading(false);

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchCamps();

        return () => {
            fetchAbortController.abort();
        };
    }, [camps]);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <DonationsList camps={camps} />
        </div>
    );
};

export default ViewDonationCampsPage;

