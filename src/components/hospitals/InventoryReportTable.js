import TableDesign from '../../UI/tablesUI/TableDesign';
import HeaderDesign from '../../UI/tablesUI/HeaderDesign';
import HeaderTh from '../../UI/tablesUI/HeaderTh';
import BodyDesign from '../../UI/tablesUI/BodyDesign';
import InventoryReportRow from './InventoryReportRow';

const InventoryReportTable = (props) => {
    return (
        <TableDesign>
            <HeaderDesign>
                <HeaderTh>Hospital Name</HeaderTh>
                <HeaderTh>Count of inventory's blood bags</HeaderTh>
                <HeaderTh>Count of A blood bags</HeaderTh>
                <HeaderTh>Count of B blood bags</HeaderTh>
                <HeaderTh>Count of O blood bags</HeaderTh>
                <HeaderTh>Count of AB blood bags</HeaderTh>
            </HeaderDesign>
            <BodyDesign>{<InventoryReportRow report={props.report}/>}</BodyDesign> 
        </TableDesign>
    );
};
export default InventoryReportTable;