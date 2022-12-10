import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const ViewReservations = (props) => {

    const navigate = useNavigate();
 
    const viewRequestHandler = () => {
        navigate(`/Donations/ReservationHistoryForm`);
    };
    return(

            <tr>
                <BodyTdDesign>{props.donation.donorID}</BodyTdDesign>
                <BodyTdDesign>{props.donation.timeSlot}</BodyTdDesign>
                <BodyTdDesign><button onClick={viewRequestHandler}>View Reservations</button></BodyTdDesign>
            </tr>
    );
};

export default ViewReservations; 