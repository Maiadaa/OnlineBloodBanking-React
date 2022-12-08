import HospitalCard from "./HospitalCard";

const HospitalsList = (props) =>{
    return (
        <div className="justify-center items-center">
            {props.hospitals.map((h) => ( 
                <HospitalCard hospital={h} key={h._id} />
            ))}
        </div>
    );
};

export default HospitalsList;