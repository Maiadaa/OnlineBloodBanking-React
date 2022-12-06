import HospitalSummary from "./HospitalSummary";
import TableDesign from "../../UI/tablesUI/TableDesign";
import HeaderDesign from "../../UI/tablesUI/HeaderDesign";
import HeaderTh from "../../UI/tablesUI/HeaderTh";
import BodyDesign from "../../UI/tablesUI/BodyDesign";

const HospitalsList = (props) =>{
    return (
        <div className="justify-center items-center">

            {
                props.Hospitals.map((h) =>( 
                <HospitalSummary hospital={h} key={h._id} />
                ))
            }

        </div>
    );
};

export default HospitalsList;