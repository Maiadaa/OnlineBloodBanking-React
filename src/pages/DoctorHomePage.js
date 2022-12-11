import { useState } from "react";
import MenuList from "../components/BloodInventory/MenuList";
const DoctorHomePage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionID : 1,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Add patient',
            optionDesc: 'insert new patient'
        },
        {
            optionID : 2,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Manage Patients',
            optionDesc: 'View available blood bags in your hospital inventory'
        },
        {
            optionID : 3,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Request Blood Bag',
            optionDesc: 'View blood bag requests made by doctors within you hospital'
        },
        {
            optionID : 4,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Modify Blood Request',
            optionDesc: 'View blood bag requests made by doctors within you hospital'
        },
        {
            optionID : 5,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'View Blood Bag',
            optionDesc: 'View blood bag requests made by doctors within you hospital'
        },
        {
            optionID : 6,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Request Blood Bag',
            optionDesc: 'View blood bag requests made by doctors within you hospital'
        },
        {
            optionID : 6,
            imgURL: 'https://img.freepik.com/premium-vector/red-blood-drop-icon-flat-design-vector-illustration-concept-donating-blood_118339-891.jpg?w=740',
            optionName: 'Add Donation Camp',
            optionDesc: 'Add a new donation camp offered by the hospital to donor of our system',
            pageLink: '/addDonationCamp'
        }
    ]

    const onButtonClickHandler = () =>
    {
        setOptions(optionsArray);
        document.getElementById("button").style.display = "none";
    };
    return (
    <div className="inline flex-col items-center justify-center">
        <button id = "button" className="bg-slate-800 text-white py-3 px-10 my-10 font-bold rounded-xl" onClick={onButtonClickHandler}>
        Get Started!
        </button>
        <MenuList options = {options}></MenuList>
    </div>
    );
};

export default DoctorHomePage;