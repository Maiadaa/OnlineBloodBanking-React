import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const ViewPatients = (props) => {

    const navigate = useNavigate();
 
    const viewRequestHandler = () => {
        navigate(`/patients/viewReuest/${props.Patient._id}`);
    };
    /*const editBtnHandler = () => {
        navigate(`/hospitals/editHospital/${props.hospital._id}`);
    };
    const deleteBtnHandler = () => {
        navigate(`/hospitals/${props.hospital._id}`);
    };*/
    return(

            <tr>
                <BodyTdDesign>{props.Patient.name}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.email}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.PhoneNumber}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.Address}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.Condition}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.BloodType}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.hospitalId}</BodyTdDesign>
                <BodyTdDesign><button onClick={viewRequestHandler}>View Request</button></BodyTdDesign>
                <BodyTdDesign><a>Update</a></BodyTdDesign>
            </tr>
    );
};

export default ViewPatients; 