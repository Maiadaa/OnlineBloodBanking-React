const ReportSummary = (props) => {
    return (
        <center>
            <h1>
                Total number of donation bags rejected: 
            </h1>
            <h2>
            {props.report.rejetedBagsCnt}
            </h2>
        </center>
        
    );
};
export default ReportSummary;