import React from 'react';
import { useState, useEffect } from "react";
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  const [Hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
        const fetchPatients = async () => {
            try{
            const response = await fetch('https://onlinebloodbank.azurewebsites.net/hospitals',{
                signal: fetchSignal
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setHospitals(data.hospitals);
            setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchPatients();
        return () =>{
            fetchAbortController.abort();
        };
    },
    []);
    console.log(Hospitals);
    if(isLoading){
        return (<p>please wait whilce we are loading data...</p>);
    }
  return (
    <div>
      <SignupForm hospitals={Hospitals}/>
    </div>
    );
};

export default SignupPage;
