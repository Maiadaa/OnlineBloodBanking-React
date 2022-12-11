import { useNavigate } from 'react-router-dom';
import Card from '../../UI/cards/card';
import CardActions from '../../UI/cards/CardActions';
import CardBody from '../../UI/cards/CardBody';
import CardHeader from '../../UI/cards/CardHeader';

const HospitalCard = (props) => {
    // use the navigate function provided by the useNavigate react router hook
    const navigate = useNavigate();
 
    const viewBtnHandler = () => {
        navigate(`/hospitals/report/${props.hospital._id}`);
    };
    const editBtnHandler = () => {
        navigate(`/hospitals/${props.hospital._id}`);
    };
    const deleteBtnHandler = async () => {
        try{
            const response = await fetch(`http://localhost:3000/hospitals/${props.hospital._id}`,{
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
            alert("Failed to add Hospital");
        }
    };

    return (
        <Card>
            <CardHeader>
            <img
            className="object-scale-down h-[200px]"
            src={props.hospital.imageURL} //Model's attribute
            alt={props.hospital.name}
            />
            </CardHeader>
            <CardBody>
                <h1 className='font-bold'>
                    {props.hospital.name}
                </h1>
                <h3>{props.hospital.email}</h3>
                <h3>{props.hospital.hotline}</h3>
                <h3>{props.hospital.Address}</h3> 
            </CardBody>
            <CardActions>
                <button 
                className="bg-white py-3 px-5 font-bold rounded-xl float-left"
                onClick ={editBtnHandler}> 
                    Edit Hospital
                </button>
                <button 
                className="bg-white py-3 px-5 font-bold rounded-xl"
                onClick={deleteBtnHandler}> 
                    Delete Hospital
                </button>
                <div>
            </div>
            </CardActions>
            <CardActions>
                <button 
                className="bg-white py-3 px-20 font-bold rounded-xl mb-8"
                onClick={viewBtnHandler}    
                > 
                View Report
                </button>
                
            </CardActions>
        </Card>
    );
};
export default HospitalCard;