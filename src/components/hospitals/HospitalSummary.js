import { useNavigate } from 'react-router-dom';
import Card from '../../UI/cards/Card';
import CardActions from '../../UI/cards/CardActions';
import CardBody from '../../UI/cards/CardBody';
import CardHeader from '../../UI/cards/CardHeader';

const HospitalSummary = (props) => {
    // use the navigate function provided by the useNavigate react router hook
    const navigate = useNavigate();
 
    const viewBtnHandler = () => {
        navigate(`/hospitals/report/${props.hospital._id}`);
    };
    const editBtnHandler = () => {
        navigate(`/hospitals/editHospital/${props.hospital._id}`);
    };
    const deleteBtnHandler = () => {
        navigate(`/hospitals/${props.hospital._id}`);
    };

    return (
        <Card>
            <CardHeader>
                <h2 className='font-bold'>
                    {props.hospital.name}
                </h2>
            </CardHeader>
            <CardBody>
                <h3>{props.hospital.email}</h3>
                <h3>{props.hospital.hotline}</h3>
                <h3>{props.hospital.Address}</h3> 
            </CardBody>
            <CardActions>
                <button 
                className="bg-white py-3 px-10 font-bold rounded-xl"
                onClick={viewBtnHandler}    
                > 
                    View Report
                </button>
                <button 
                className="bg-white py-3 px-10 font-bold rounded-xl"
                onClick ={editBtnHandler}> 
                    Edit Hospital
                </button>
                <button 
                className="bg-white py-3 px-10 font-bold rounded-xl"
                onClick={deleteBtnHandler}> 
                    Delete Hospital
                </button>
            </CardActions>
        </Card>
    );
};
export default HospitalSummary;