import React, { useEffect, useState } from 'react';
import ReservationHistoryForm from '../components/donations/ReservationHistoryForm';

const ReservationHistoryPage = () => {
  const [report, setReservation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchReportDetails = async () => {
      try {
        const response = await fetch(
          `https://bloodera.azurewebsites.net/donation/`, {
            signal: fetchSignal
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setReservation(data.donation);
        setIsLoading(false);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchReportDetails();

    return () => {
      fetchAbortController.abort();
    };
  },[]);

  if (isLoading) {
    return <h1>Please wait while loading reservation details...</h1>;
  }

  if (!report) {
    return <h1>Couldn't find Reservation History...</h1>;
  }

  return(
    <ReservationHistoryForm donation={donation}/>
  );
};

export default ReservationHistoryPage;
