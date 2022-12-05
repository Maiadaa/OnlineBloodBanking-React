import ViewPatients from "./ViewPatients";

const PatientsList = (props) =>{
    return(
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
            {
                props.Patients.map((p) =>(
                    <ViewPatients Patient={p} key={p._id}/>
                ))
            }
        </div>
    );
};

export default PatientsList;