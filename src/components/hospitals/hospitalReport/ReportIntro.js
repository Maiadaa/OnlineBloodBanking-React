const ReportIntro = (props) => {
    return (
        <div>
            <img
            className="object-scale-down h-[250px] w-full float-left"
            src={props.report.hospital.imageURL}
            alt={props.report.hospital.name}
            />
            <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-2 text-black-600"> 
                {props.report.hospital.name}
            </h1><br/><br/>
        </div>
    );
};
export default ReportIntro;