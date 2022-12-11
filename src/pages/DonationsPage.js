import { useState } from "react";
import DonationsList from "../components/Donations/DonationsList";

const DonationsPage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionID : 1,
            imgURL: 'https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2021/06/Blood-Donation-2.jpg?w=802&ssl=1',
            optionName: 'View Donation camps',
            optionDesc: 'View all donation camps available in our system, you can edit them, remove them, or view their donation & inventory report',
            pageLink: '/Donations/Donation-Camps'
        },
        {
            optionID : 2,
            imgURL: 'https://cdn-icons-png.flaticon.com/512/1476/1476897.png',
            optionName: 'Add Donor reservation',
            optionDesc: 'Viewing all donor reservations,',
            pageLink: '/Donations/Add-Reservation'
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
        <DonationsList options = {options}></DonationsList>
    </div>
    );
};

export default DonationsPage;