import TableDesign from "../../UI/tablesUI/TableDesign";
import HeaderDesign from "../../UI/tablesUI/HeaderDesign";
import HeaderTh from "../../UI/tablesUI/HeaderTh";
import BodyDesign from "../../UI/tablesUI/BodyDesign";
import ViewBloodBagRequest from "./ViewBloodBagRequest";

const RequestsList = (props) =>{
    return(
        <div className="justify-center items-center">
            <TableDesign>
                <HeaderDesign>
                    <HeaderTh>
                        Blood Type
                    </HeaderTh>
                    <HeaderTh>
                        Amount
                    </HeaderTh>
                    <HeaderTh>
                        Date
                    </HeaderTh>
                    <HeaderTh>
                        Status
                    </HeaderTh>
                    <HeaderTh>
                        Purpose
                    </HeaderTh>
                    <HeaderTh>
                        Update
                    </HeaderTh>
                    <HeaderTh>
                        Accept Requests
                    </HeaderTh>
                </HeaderDesign>
                <BodyDesign>
                    <ViewBloodBagRequest Request = {props.Requests} _id = {props._id}/>
                </BodyDesign>
            </TableDesign>
        </div>
    );
};

export default RequestsList;