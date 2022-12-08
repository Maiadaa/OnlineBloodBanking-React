const ReportSummary = (props) => {
    return (
        <center>
            <br/><h1 className="float-center font-medium leading-tight text-xl mt-0 mb-2 text-black-600">
                Number of donation bags rejected: {props.report.rejetedBagsCnt}
            </h1><br/>
        </center>
        
    );
};
export default ReportSummary;