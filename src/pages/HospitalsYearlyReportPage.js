import { useEffect, useState } from 'react';
import ReportList from '../components/hospitals/hospitalReport/ReportList';

const HospitalsYearlyReportPage = () => {
    // defining state for the hospitals
    // initial state, func to change this state
    const [reports, setHospitals] = useState([]);

    // loading state for loading
    const [isLoading, setIsLoading] = useState(true);


    // call use effect hook 
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
    
        const fetchHospitals = async () =>{
            try{
                // send HTTP GET request 
                const response = await fetch('http://localhost:3000/report',{
                   signal: fetchSignal 
                });
                // parse returned data 
                const data = await response.json();

                // handle http errors 
                if(!response.ok){
                    throw Error(data.error);
                }
                
                setHospitals(data.yearlyReport);
                setIsLoading(false);

            }catch(err){
                console.log(err.message);
            }
        };

        fetchHospitals();

        return () => {
            fetchAbortController.abort();
        };
    }, []);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <ReportList reports={reports} />
        </div>
    );
};

export default HospitalsYearlyReportPage;