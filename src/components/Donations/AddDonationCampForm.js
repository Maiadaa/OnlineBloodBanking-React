import {useForm} from 'react-hook-form';
import { useState } from 'react';
import FormInputError from '../../UI/form/FormInputError';
import Textinput from '../../UI/form/TextInput';

const AddDonationCampForm = () =>{
    // register input values with name identifiers 
    // holds the function to define submission actions
    // accesses the form properties like formState.errors.name where name is a registered input 
    const {register, handleSubmit, formState} = useForm();
    const [open, setOpen] = useState(false);

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('https://bloodera.azurewebsites.net/donations/addDonationCamp',{
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
                    <label className="text-white font-bold">Hospital name</label>
                    <Textinput
                    label="Name"
                    type="text"
                    name="hospital"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.name && (
                        <FormInputError> hospital name must not be empty </FormInputError>
                    )}

                    <label className="text-white font-bold">Number</label>
                    <Textinput
                    label="Number"
                    type="number"
                    name="PhoneNumber"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.Number && (
                        <FormInputError> Number must not be empty </FormInputError>
                    )}

                    <label className="text-white font-bold">Camp Location</label>
                    <Textinput
                    label="Location"
                    type="text"
                    name="Location"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.Location && (
                        <FormInputError> Please enter a valid email address </FormInputError>
                    )}

                    <label className="text-white font-bold">Date</label>
                    <Textinput
                    label="Hotline"
                    type="number"
                    name="hotline"
                    register={register}
                    validation={{required:true, min:5}}
                    />
                    {formState.errors.hotline && (
                        <FormInputError> Please enter a valid hotline number </FormInputError>
                    )}
                    
                    <button type = "submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                        Add Donation camp
                    </button>
                </form>
            </div>
            <div>
                {open ? 
                    <Popup 
                    text="Camp Added Successfully" 
                    closePopup={() => setOpen(false)} /> 
                : null}
            </div>
        </div>
    );

};

export default AddDonationCampForm;