import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const ViewBloodBagRequest = (props) => {

    const navigate = useNavigate();
 
    const ModifyRequestHandler = () => {
        navigate(`/patients/ModifyRequest/${props._id}/${props.Request._id}`);
    };
    const AcceptRequestHandler = () => {
        navigate(`/patients/AcceptRequest/${props._id}/${props.Request._id}`);
    };
    /*const deleteBtnHandler = () => {
        navigate(`/hospitals/${props.hospital._id}`);
    };*/
    console.log(props.Request);
    return(
            <tr>
                <BodyTdDesign>{props.Request.BloodType}</BodyTdDesign>
                <BodyTdDesign>{props.Request.Amount}</BodyTdDesign>
                <BodyTdDesign>{props.Request.Date}</BodyTdDesign>
                <BodyTdDesign>{props.Request.Status}</BodyTdDesign>
                <BodyTdDesign>{props.Request.Purpose}</BodyTdDesign>
                <BodyTdDesign><button onClick={ModifyRequestHandler}>Update</button></BodyTdDesign>
                <BodyTdDesign><button onClick={AcceptRequestHandler}>Accept Request</button></BodyTdDesign>
            </tr>
    );
};

export default ViewBloodBagRequest; 