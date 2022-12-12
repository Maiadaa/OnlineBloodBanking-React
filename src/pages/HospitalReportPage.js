import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HospitalReport from '../components/hospitals/hospitalReport/HospitalReport';

const HospitalReportPage = () => {
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const hospitalId = params.hospitalId;

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchReportDetails = async () => {
      try {
        const response = await fetch(
          `https://onlinebloodbank.azurewebsites.net/hospitals/report/${hospitalId}`, {
            signal: fetchSignal
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setReport(data.test);
        setIsLoading(false);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchReportDetails();

    return () => {
      fetchAbortController.abort();
    };
  }, [hospitalId]);

  if (isLoading) {
    return <h1>Please wait while loading report details...</h1>;
  }

  if (!report) {
    return <h1>Couldn't find hospital report...</h1>;
  }

  return(
    <HospitalReport report={report}/>
  );
};

export default HospitalReportPage;
