import {useForm} from 'react-hook-form';
import { useState } from 'react';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const AddReservationForm = () =>{
    // register input values with name identifiers 
    // holds the function to define submission actions
    // accesses the form properties like formState.errors.name where name is a registered input 
    const {register, handleSubmit, formState} = useForm();
    const [open, setOpen] = useState(false);

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('https://onlinebloodbank.azurewebsites.net/donations/addDonationCamp',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if(!response.ok){
                throw Error(data.error);
            }

            // showPopUp();
            setOpen(true);
            console.log("done");

        }catch(err){
            alert("Failed to add Donation camp");
        }
    };

    return(
        <div>
            <div>
                <form 
                className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
                onSubmit={handleSubmit(submitHandler)}
                >
                    <label className="text-white font-bold">Donor ID</label>
                    <TextInput
                    label="Name"
                    type="text"
                    name="DonorID"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.name && (
                        <FormInputError> Donor ID must not be empty </FormInputError>
                    )}

                    <label className="text-white font-bold">Reservation time slot</label>
                    <TextInput
                    label="Location"
                    type="text"
                    name="timeSlot"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.Address && (
                        <FormInputError>Time slot must not be empty </FormInputError>
                    )}


                    <button type = "submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                        Add Donor Reservation
                    </button>
                </form>
            </div>
            <div>
                {open ? 
                    <Popup 
                    text="Reservation Added Successfully" 
                    closePopup={() => setOpen(false)} /> 
                : null}
            </div>
        </div>
    );

};

export default AddReservationForm;