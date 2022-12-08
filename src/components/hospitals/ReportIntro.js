const ReportIntro = (props) => {
    return (
        <div>
            <h1 className="text-center">
                Hospital Name: 
                {"   " + props.report.hospital}
            </h1>
            <h2 className="text-center">
                Camp Location
                {"   " + props.report.donationReport.campLocation}
            </h2>
            <h2 className="text-center">
                Camp Date
                {"   " + props.report.donationReport.campDate}
            </h2>
        </div>
    );
};
export default ReportIntro;