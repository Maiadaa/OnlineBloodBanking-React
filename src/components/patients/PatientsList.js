import TableDesign from "../../UI/tablesUI/TableDesign";
import HeaderDesign from "../../UI/tablesUI/HeaderDesign";
import HeaderTh from "../../UI/tablesUI/HeaderTh";
import BodyDesign from "../../UI/tablesUI/BodyDesign";
import ViewPatients from "./ViewPatients";

const PatientsList = (props) =>{
    return(
        <div className="justify-center items-center">
            <TableDesign>
                <HeaderDesign>
                    <HeaderTh>
                        Name
                    </HeaderTh>
                    <HeaderTh>
                        Email
                    </HeaderTh>
                    <HeaderTh>
                        PhoneNumber
                    </HeaderTh>
                    <HeaderTh>
                        Address
                    </HeaderTh>
                    <HeaderTh>
                        Condition
                    </HeaderTh>
                    <HeaderTh>
                        BloodType
                    </HeaderTh>
                    <HeaderTh>
                        hospitalId
                    </HeaderTh>
                    <HeaderTh>
                        View Requests
                    </HeaderTh>
                    <HeaderTh>
                        Update Actions
                    </HeaderTh>
                </HeaderDesign>
                <BodyDesign>
                    {
                        props.Patients.map((p) =>(
                            <ViewPatients Patient={p} key={p._id}/>
                        ))
                    }
                </BodyDesign>
            </TableDesign>
        </div>
    );
};

export default PatientsList;