import { useState } from "react";
import MenuList from "../components/BloodInventory/MenuList";

const SuperAdminHomePage = () => 
{
    const [options, setOptions] = useState([]);

    const optionsArray = 
    [
        {
            optionID : 1,
            imgURL: 'https://media.istockphoto.com/id/467960730/vector/hospital-icon.jpg?s=612x612&w=0&k=20&c=OjVRcz9evT3OmQFSoaXb-mnvRTh5PwTJvtoRa8SpfD0=',
            optionName: 'View All Hospitals',
            optionDesc: 'View all hospitals available in our system, you can edit them, remove them, or view their donation & inventory report',
            pageLink: '/hospitals'
        },
        {
            optionID : 2,
            imgURL: 'https://img.freepik.com/premium-vector/hand-holding-medical-hospital-icon-symbol-vector_77417-324.jpg?w=2000',
            optionName: 'Add Hospital',
            optionDesc: 'Upon adding a hospital to the system, a lab manager account is created with temp creds, which are sent to the hospital emailAddress',
            pageLink: '/hospitals/addHospital'
        },
        {
            optionID : 3,
            imgURL: 'https://www.signis.net/2017/userfiles/ckeditor/raport_2021.jpg',
            optionName: 'View Yearly Report',
            optionDesc: 'View aggregated results of hospitals donation and inventory report accross 1 year',
            pageLink: '/hospitals/report'
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

export default SuperAdminHomePage;