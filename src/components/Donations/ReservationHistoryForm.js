import { useEffect, useState } from 'react';
import ReservationList from '../components/Donations/ReservationList';

const ReservationHistoryPage = (props) => {
    const [reservations, setReservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // call use effect hook 
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchReservations = async () => {
            try {
                // send HTTP GET request 
                const response = await fetch('https://bloodera.azurewebsites.net/donations/Retrieve-Donor-reservation', {
                    signal: fetchSignal
                });
                // parse returned data 
                const data = await response.json();

                // handle http errors 
                if (!response.ok) {
                    throw Error(data.error);
                }

                setReservations(data.reservations);
                setIsLoading(false);

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchReservations();

        return () => {
            fetchAbortController.abort();
        };
    }, [reservations]);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <ReservationList reservations={reservations} />
        </div>
    );
};

export default ReservationHistoryPage;