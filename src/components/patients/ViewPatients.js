import Card from "../../UI/cards/Card";
import CardHeader from "../../UI/cards/CardHeader";
import CardBody from "../../UI/cards/CardBody";
import CardActions from "../../UI/cards/CardActions";

const ViewPatients = (props) => {
    return(
        <Card>
            <p>
                {props.Patient.name}
                {props.Patient.email}
                {props.Patient.PhoneNumber}
                {props.Patient.Address}
                {props.Patient.Condition}
                {props.Patient.BloodType}
                {props.Patient.hospitalId}
            </p>
        </Card>
    );
};

export default ViewPatients; 