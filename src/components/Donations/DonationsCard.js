import { useNavigate } from 'react-router-dom';
import Card from '../../UI/cards/Card';
import CardActions from '../../UI/cards/CardActions';
import CardBody from '../../UI/cards/CardBody';
import CardHeader from '../../UI/cards/CardHeader';

const DonationsCard = (props) => {
    // use the navigate function provided by the useNavigate react router hook
    const navigate = useNavigate();
 
    const viewBtnHandler = () => {
        navigate(`/Donations/DonationCamps/${props.donation._id}`);
    };
    const editBtnHandler = () => {
        navigate(`/Donations/addDonationCamp/${props.donation._id}`);
    };

    const deleteBtnHandler = async () => {
        try{
            const response = await fetch(`http://localhost:3000/donations/Retrieve-donation-camps/${props.donationCamp._id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if(!response.ok){
                throw Error(data.error);
            }

            console.log("done");

        }catch(err){
            alert("Failed to delete Hospital");
        }
    };
    return (
        <Card>
            <CardHeader>
            <img
            className="object-scale-down h-[200px]"
            src={props.donation.hospital} //Model's attribute
            alt={props.donation.name}
            />
            </CardHeader>
            <CardBody>
                <h1 className='font-bold'>
                    {props.donation.hospital}
                </h1>
                <h3>{props.donation.PhoneNumber}</h3>
                <h3>{props.donation.Location}</h3>
                <h3>{props.donation.Date}</h3> 
            </CardBody>
            <CardActions>
                <button 
                className="bg-white py-3 px-5 font-bold rounded-xl float-left"
                onClick ={editBtnHandler}> 
                    Edit donationCamp
                </button>
                <button 
                className="bg-white py-3 px-5 font-bold rounded-xl"
                onClick={deleteBtnHandler}> 
                    Delete donationCamp
                </button>
            </CardActions>
            <CardActions>
                <button 
                className="bg-white py-3 px-20 font-bold rounded-xl mb-8"
                onClick={viewBtnHandler}    
                > 
                View Donation camp
                </button>
            </CardActions>
        </Card>
    );
};
export default DonationsCard;