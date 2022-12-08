import TableDesign from '../../UI/tablesUI/TableDesign';
import HeaderDesign from '../../UI/tablesUI/HeaderDesign';
import HeaderTh from '../../UI/tablesUI/HeaderTh';
import BodyDesign from '../../UI/tablesUI/BodyDesign';
import DonationReportRow from './DonationReportRow';

const InventoryReportTable = (props) => {
    return (
        <TableDesign>
            <HeaderDesign>
                <HeaderTh>Percentage of female donors</HeaderTh>
                <HeaderTh>Percentage of male donors</HeaderTh>
                <HeaderTh>Count of A type females</HeaderTh>
                <HeaderTh>Count of B type females </HeaderTh>
                <HeaderTh>Count of O type females </HeaderTh>
                <HeaderTh>Count of AB type females </HeaderTh>
                <HeaderTh>Count of A type males </HeaderTh>
                <HeaderTh>Count of B type males </HeaderTh>
                <HeaderTh>Count of O type males </HeaderTh>
                <HeaderTh>Count of AB type males </HeaderTh>
            </HeaderDesign>
            <BodyDesign>{<DonationReportRow report={props.report}/>}</BodyDesign> 
        </TableDesign>
    );
};
export default InventoryReportTable;