import HospitalReport from "../hospitalReport/HospitalReport";

const ReportList = (props) =>{
    return (
        <div className="justify-center items-center">
            {props.reports.map((h) => ( 
                <HospitalReport report={h.test} key={h.test._id} />
            ))}
        </div>
    );
};

export default ReportList;