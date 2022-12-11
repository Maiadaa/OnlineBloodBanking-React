import DonationCard from "./DonationsCard";

const DonationsList = (props) =>{
    return (
        <div className="justify-center items-center">
            {props.camps.map((h) => ( 
                <DonationCard donation={h} key={h._id} />
            ))}
        </div>
    );
};

export default DonationsList;