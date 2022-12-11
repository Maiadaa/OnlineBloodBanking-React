import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const View = (props) => {
    return (
        
        <tr>
        <BodyTdDesign>{props.BloodBag._id}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.bloodType}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.HBV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.HCV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.HIV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.HTLV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.WNV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.TrypanosomaCruzi}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.CMV}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.Babesia}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.BacterialContamination}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.pending}</BodyTdDesign>      
    </tr>
    );
};

export default ViewInventory;