import TableDesign from "../../UI/tablesUI/TableDesign";
import HeaderDesign from "../../UI/tablesUI/HeaderDesign";
import HeaderTh from "../../UI/tablesUI/HeaderTh";
import BodyDesign from "../../UI/tablesUI/BodyDesign";
import BodyTdDesign from "../../UI/tablesUI/BodyTdDeisgn";
import Card from "../../UI/cards/Card";

const ViewPatients = (props) => {
    return(

            <tr>
                <BodyTdDesign>{props.Patient.name}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.email}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.PhoneNumber}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.Address}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.Condition}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.BloodType}</BodyTdDesign>
                <BodyTdDesign>{props.Patient.hospitalId}</BodyTdDesign>
                <BodyTdDesign><a>Update</a></BodyTdDesign>
                <BodyTdDesign><a>Delete</a></BodyTdDesign>
            </tr>
    );
};

export default ViewPatients; 