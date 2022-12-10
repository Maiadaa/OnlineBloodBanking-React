import React, { useEffect, useState } from 'react';
import ViewDonationCampsForm from '../components/donations/ViewDonationCampsForm';

const DonationCampsPage = () => {
  const [report, setDonationCamps] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchReportDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/donation/`, {
            signal: fetchSignal
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setDonationCamps(data.donation);
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
    <ViewDonationCampsForm donation={donation}/>
  );
};

export default DonationCampsPage;
