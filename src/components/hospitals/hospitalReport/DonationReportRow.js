import BodyTdDesign from '../../../UI/tablesUI/BodyTdDesign';

const DonationReportRow = (props) => {
    return(
        <tr>
            <BodyTdDesign>{props.report.femaleDonors + "%"}</BodyTdDesign>
            <BodyTdDesign>{props.report.maleDonors + "%"}</BodyTdDesign>
            <BodyTdDesign>{props.report.ATypeFemales}</BodyTdDesign>
            <BodyTdDesign>{props.report.BTypeFemales}</BodyTdDesign>
            <BodyTdDesign>{props.report.OTypeFemales}</BodyTdDesign>
            <BodyTdDesign>{props.report.ABTypeFemales}</BodyTdDesign>
            <BodyTdDesign>{props.report.ATypeMales}</BodyTdDesign>
            <BodyTdDesign>{props.report.BTypeMales}</BodyTdDesign>
            <BodyTdDesign>{props.report.OTypeMales}</BodyTdDesign>
            <BodyTdDesign>{props.report.ABTypeMales}</BodyTdDesign>
        </tr>
    );
};
export default DonationReportRow;