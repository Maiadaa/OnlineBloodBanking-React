import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InsertBloodBag from "../components/BloodInventory/InsertBloodBag"
const InsertBloodBagPage = () =>{
    const [isLoading, setIsLoading] = useState(true);


    if (isLoading) {
        return <p>Loading form information...</p>;
      }

      return (
        <div>
            <InsertBloodBag/> 
        </div>
      );
};