import { useState } from "react";
import MenuList from "../components/BloodInventory/MenuList";
import UserDefinedFooter from "../components/Navbar and Footer/UserDefinedFooter";
import UserDefinedNavbar from "../components/Navbar and Footer/UserDefinedNavbar";


const LabAdminHomePage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionID : 1,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Insert Blood Bag',
            optionDesc: 'Send blood bag insertion requests to be managed by your Lab Manager',
            pageLink: '/InsertBloodBag'
        },
        {
            optionID : 2,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'View Blood Inventory',
            optionDesc: 'View available blood bags in your hospital inventory',
            pageLink: '/ViewInventoryPage'

        }
        
    ]

    const onButtonClickHandler = () =>
    {
        setOptions(optionsArray);
        document.getElementById("button").style.display = "none";
    };
    return (
    <div className="inline flex-col items-center justify-center    ">
        
        <button id = "button" className="bg-slate-800 text-white py-3 px-10 my-10 font-bold rounded-xl " onClick={onButtonClickHandler}>
        Get Started!
        </button>
        <MenuList options = {options}></MenuList>
            
    </div>
    );
};

export default LabAdminHomePage;