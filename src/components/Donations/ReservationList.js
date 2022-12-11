import ReservationCard from "./ReservationCard";

const ReservationList = (props) =>{
    return (
        <div className="justify-center items-center">
            {props.camps.map((h) => ( 
                <ReservationCard donation={h} key={h._id} />
            ))}
        </div>
    );
};

export default ReservationList;