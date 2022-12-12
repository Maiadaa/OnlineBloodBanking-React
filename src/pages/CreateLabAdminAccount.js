import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CreateLabAdminAccount from '../components/BloodInventory/CreateLabAdminAccount'
const CreateLabAdminAccountPage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [hospitals, setHospitals] = useState();
    useEffect(()=> {
      const fetchAbortController = new AbortController();
      const fetchSignal = fetchAbortController.signal;
      const fetchLabAdmins = async () => {
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
      fetchLabAdmins();
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
            <CreateLabAdminAccount hospitals={hospitals}/> 
        </div>
      );
};
export default CreateLabAdminAccountPage;