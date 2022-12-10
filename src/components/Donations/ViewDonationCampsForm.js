import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const ViewDonationCamps = (props) => {

    const navigate = useNavigate();
 
    const viewRequestHandler = () => {
        navigate(`/Donations/ViewDonationCampForm`);
    };
    return(

            <tr>
                <BodyTdDesign>{props.donation.hospital}</BodyTdDesign>
                <BodyTdDesign>{props.donation.PhoneNumebr}</BodyTdDesign>
                <BodyTdDesign>{props.donation.Location}</BodyTdDesign>
                <BodyTdDesign>{props.donation.Date}</BodyTdDesign>
                <BodyTdDesign><button onClick={viewRequestHandler}>View Camps</button></BodyTdDesign>
            </tr>
    );
};

export default ViewDonationCamps; 