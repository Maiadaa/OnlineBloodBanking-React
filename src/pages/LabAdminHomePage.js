import { useState } from "react";
import MenuOption from "../components/BloodInventory/MenuOption";
import MenuList from "../components/BloodInventory/MenuList";
const LabAdminHomePage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionName: 'Insert Blood Bag',
            optionDesc: 'Send blood bag insertion requests to be managed by your Lab Manager'
        },
        {
            optionName: 'View Blood Inventory',
            optionDesc: 'View available blood bags in your hospital inventory'
        }
    ]

    const onButtonClickHandler = () =>
    {
        setOptions(optionsArray);
    };
    return (
    <div className="fles flex-col items-center justify-center">
        <button className="bg-slate-800 text-white py-3 px-10 my-10 font-bold rounded-xl" onClick={onButtonClickHandler}>
        Get Started!
        </button>
        <MenuList options = {options}></MenuList>
    </div>
    );
};

export default LabAdminHomePage;