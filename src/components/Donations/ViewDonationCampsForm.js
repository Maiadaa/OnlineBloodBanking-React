import TableDesign from '../../UI/tablesUI/TableDesign';
import HeaderDesign from '../../UI/tablesUI/HeaderDesign';
import HeaderTh from '../../UI/tablesUI/HeaderTh';
import BodyDesign from '../../UI/tablesUI/BodyDesign';
import { useNavigate } from 'react-router-dom';
import DonationsList from './DonationsList';

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
  <div className="justify-center items-center">
                {props.reports.map((c) => ( 
                    <DonationsList camp={c.camp} key={c.camp._id} />
                ))}
            </div>
            }</BodyDesign> 
        </TableDesign>
    );
};

export default ViewDonationCamps; 