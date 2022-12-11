import BodyTdDesign from '../../../UI/tablesUI/BodyTdDesign';

const campRow = (props) => {
    return(
        <tr>
            <BodyTdDesign>{props.report.inventoryBagsCnt}</BodyTdDesign>
            <BodyTdDesign>{props.report.AType}</BodyTdDesign>
            <BodyTdDesign>{props.report.BType}</BodyTdDesign>
            <BodyTdDesign>{props.report.OType}</BodyTdDesign>
            <BodyTdDesign>{props.report.ABType}</BodyTdDesign>
        </tr>
    );
};
export default campRow;