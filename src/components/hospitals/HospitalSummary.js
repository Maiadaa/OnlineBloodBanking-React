const HospitalSummary = (props) => {
    return (
        <Card>
            <CardHeader>
                <img
                className="object-scale-down w-[400px]"
                src = {props.hospital.imgURL}
                alt = {props.hospital.name}
                />
            </CardHeader>
            <CardBody>
                <h3>{props.product.price}</h3>
            </CardBody>
            <CardActions>
                <button> </button>
            </CardActions>
        </Card>
    );
};
export default HospitalSummary;