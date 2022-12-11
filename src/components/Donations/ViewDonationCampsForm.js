import TableDesign from '../../../UI/tablesUI/TableDesign';
import HeaderDesign from '../../../UI/tablesUI/HeaderDesign';
import HeaderTh from '../../../UI/tablesUI/HeaderTh';
import BodyDesign from '../../../UI/tablesUI/BodyDesign';
import { useNavigate } from 'react-router-dom';

const ViewDonationCamps = (props) => {

    const navigate = useNavigate();
 
    const viewRequestHandler = () => {
        navigate(`/Donations/ViewDonationCampForm`);
    };

    return(
        <TableDesign>
            <HeaderDesign>
                <HeaderTh>Hospital Name</HeaderTh>
                <HeaderTh>Camp phone number</HeaderTh>
                <HeaderTh>Camp Location</HeaderTh>
                <HeaderTh>Camp date</HeaderTh>
            </HeaderDesign>
            <BodyDesign>{
                // neb3at details all camps by map func
                //<BodyTdDesign>
            }</BodyDesign> 
        </TableDesign>
    );
};

export default ViewDonationCamps; 