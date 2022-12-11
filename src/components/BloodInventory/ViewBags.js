import BodyTdDesign from '../../UI/tablesUI/BodyTdDesign';


const ViewBags = (props) => {
    return (
        <tr>
        <BodyTdDesign>{props.BloodBag._id}</BodyTdDesign>
        <BodyTdDesign>{props.BloodBag.bloodType}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HBV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HCV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HIV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.HTLV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.syphilis)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.WNV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.TrypanosomaCruzi)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.CMV)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.Babesia)}</BodyTdDesign>
        <BodyTdDesign>{String(props.BloodBag.BacterialContamination)}</BodyTdDesign>
    </tr>
    );
};
export default ViewBags;