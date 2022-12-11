import { useNavigate } from 'react-router-dom';
import Card from '../../UI/cards/card';
import CardBody from '../../UI/cards/CardBody';

const ReservationCard = (props) => {
    // use the navigate function provided by the useNavigate react router hook
    const navigate = useNavigate();
    return (
        <Card>
            <CardBody>
                <h1 className='font-bold'>
                    {props.donation.donorID}
                </h1>
                <h3>{props.donation.timeSlot}</h3>
            </CardBody>
        </Card>
    );
};
export default ReservationCard;