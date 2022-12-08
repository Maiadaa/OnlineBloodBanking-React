import InventoryReportTable from '../hospitalReport/InventoryReportTable';
import DonationReportTable from '../hospitalReport/DonationReportTable';
import ReportIntro from '../hospitalReport/ReportIntro';
import ReportSummary from '../hospitalReport/ReportSummary';

const HospitalReport = (props) => {

    return (
        <div className="text-center w-3/4 flex flex-col gap-2 rounded-xl overflow-hidden mr-4  bg-slate-200">
            <ReportIntro report={props.report}/>
            <h6 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">
            Inventory report
            </h6>
            <InventoryReportTable report={props.report.inventoryReport}/>
            <br/><h6 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">
            Donation report
            </h6>
            <h6 className="font-medium leading-tight text-l mt-0 mb-2 text-gray-600">
            Donation Camp Location:
            {"   " + props.report.donationReport.campLocation}
            </h6>
            <h1 className="font-medium leading-tight text-l mt-0 mb-2 text-gray-600">
            Donation Camp Date:
            {"   " + props.report.donationReport.campDate}
            </h1>
            <DonationReportTable report={props.report.donationReport}/> 
            <ReportSummary report={props.report}/> 
        </div>
    );
};
export default HospitalReport;