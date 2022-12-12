import {useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FormInputError from '../../../UI/form/FormInputError';
import Textinput from '../../../UI/form/TextInput';
import Popup from './PopUp';

const EditHospitalForm = () =>{
    // register input values with name identifiers 
    // holds the function to define submission actions
    // accesses the form properties like formState.errors.name where name is a registered input 
    const {register, handleSubmit, formState} = useForm();
    const [open, setOpen] = useState(false);

    const params = useParams();
    const hospitalID = params.hospitalID;

    const submitHandler = async (formData) => {
        try{
            const response = await fetch(`http://localhost:3000/hospitals/editHospital/${hospitalID}`,{
                method:'PUT',
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
            alert("Failed to add Hospital");
        }
    };

    return(
        <div>
            <div>
                <form 
                className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
                onSubmit={handleSubmit(submitHandler)}
                >
                    <label className="text-white font-bold">Hospital Name</label>
                    <Textinput
                    label="Name"
                    type="text"
                    name="name"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.name && (
                        <FormInputError> Hospital name must not be empty </FormInputError>
                    )}

                    <label className="text-white font-bold">Hospital Email</label>
                    <Textinput
                    label="Email"
                    type="text"
                    name="email"
                    register={register}
                    validation={{
                        require:true, 
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                        }
                    }/>
                    {formState.errors.email && (
                        <FormInputError> Please enter a valid email address </FormInputError>
                    )}

                    <label className="text-white font-bold">Hospital Hotline</label>
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

                    <label className="text-white font-bold">Hospital Logo URL</label>
                    <Textinput 
                    label="Image"
                    type="text"
                    name="imageURL"
                    register={register}
                    validation={{
                            require:false, 
                            pattern: {
                                value: /\S\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        }
                    }/>
                    {formState.errors.imageURL && (
                        <FormInputError> Please enter a valid URL </FormInputError>
                    )}

                    <button type = "submit" className="bg-white rounded-xl my-4 py-2 px-8 self-center">
                        Submit
                    </button>
                </form>
            </div>
            <div>
                {open ? 
                    <Popup 
                    text="Hospital Details Edited Successfully" 
                    closePopup={() => setOpen(false)} /> 
                : null}
            </div>
        </div>
    );

};

export default EditHospitalForm;