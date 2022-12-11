import { useNavigate } from 'react-router-dom';
import Card from '../../UI/cards/card';
import CardActions from '../../UI/cards/CardActions';
import CardBody from '../../UI/cards/CardBody';

const DonationsCard = (props) => {
    // use the navigate function provided by the useNavigate react router hook
    const navigate = useNavigate();
 
    const viewBtnHandler = () => {
        navigate(`/addDonorReservation`);
    };

    return (
        <Card>

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
                className="bg-white py-3 px-20 font-bold rounded-xl mb-8"
                onClick={viewBtnHandler}    
                > 
                Reserve time slot
                </button>
            </CardActions>
        </Card>
    );
};
export default DonationsCard;