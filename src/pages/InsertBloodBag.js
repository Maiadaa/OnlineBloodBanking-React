import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InsertBloodBag from "../components/BloodInventory/InsertBloodBag"

const InsertBloodBagPage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [hospitals, setHospitals] = useState();
    
    useEffect(()=> {
      const fetchAbortController = new AbortController();
      const fetchSignal = fetchAbortController.signal;
      const fetchBloodBags = async () => {
          try{
            const response = await fetch('https://bloodera.azurewebsites.net/hospitals',{
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
      fetchBloodBags();
      return () =>{
          fetchAbortController.abort();
      };
  
  },
  []
  );
    if (isLoading) {
        return <p>Loading form information...</p>;
      }

      return (
        <div>
            <InsertBloodBag hospitals={hospitals}/> 
        </div>
      );
};
export default InsertBloodBagPage;