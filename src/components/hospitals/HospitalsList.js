import HospitalSummary from "./HospitalSummary";

const HospitalsList = (props) =>{
    return (
        <div className="justify-center items-center">
            {
                props.Hospitals.map((h) =>( 
                <HospitalSummary hospital={h} key={h._id} />
                ))
            }

        </div>
    );
};

export default HospitalsList;