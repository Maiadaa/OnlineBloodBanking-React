import {useForm} from 'react-hook-form';
import { useState } from 'react';
import FormInputError from '../../../UI/form/FormInputError';
import Textinput from '../../../UI/form/TextInput';
import Popup from './PopUp';

const AddHospitalForm = () =>{
    // register input values with name identifiers 
    // holds the function to define submission actions
    // accesses the form properties like formState.errors.name where name is a registered input 
    const {register, handleSubmit, formState} = useForm();
    const [open, setOpen] = useState(false);

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('http://localhost:3000/hospitals/addHospital',{
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
                className="flex flex-col p-10 gap-5 w-full bg-white shadow-2xl rounded-lg"
                onSubmit={handleSubmit(submitHandler)}
                >
                    <label className=" text-center text-2xl font-bold" >Add New Hospital</label>
                    <Textinput
                    type="text"
                    name="name"
                    placeholder = "Hospital Name"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.name && (
                        <FormInputError> Hospital name must not be empty </FormInputError>
                    )}

                    <Textinput
                    type="text"
                    name="Address"
                    placeholder = "Hospital Address"
                    register={register}
                    validation={{required:true}}
                    />
                    {formState.errors.Address && (
                        <FormInputError> Hospital address must not be empty </FormInputError>
                    )}

                    <Textinput
                    type = "text"
                    name = "email"
                    placeholder = "Hospital Email"
                    register={register}
                    validation={{required:true, 
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                        }
                    }/> 
                    {formState.errors.email && (
                        <FormInputError> Please enter a valid email address </FormInputError>
                    )}

                    <Textinput
                    type="number"
                    name="hotline"
                    placeholder="Hospital Hotline"
                    register={register}
                    validation={{required:true, min:5}}
                    />
                    {formState.errors.hotline && (
                        <FormInputError> Please enter a valid hotline number </FormInputError>
                    )}

                    <Textinput 
                    type="text"
                    name="imageURL"
                    placeholder = "Hospital Logo URL (Optional)"
                    register={register}
                    validation={{
                            required:false, 
                            pattern: {
                                value: /\S\.\S+/,
                                message: "Entered value does not match URL format"
                            }
                        }
                    }/>
                    {formState.errors.imageURL && (
                        <FormInputError> Please enter a valid URL </FormInputError>
                    )}

                    <button type = "submit" className="text-white dark:bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 place-self-center hover:bg-gray-400 hover:text-black">
                        Add Hospital
                    </button>
                </form>
            </div>
            <div>
                {open ? 
                    <Popup 
                    text="Hospital Added Successfully" 
                    closePopup={() => setOpen(false)} /> 
                : null}
            </div>
        </div>
    );

};

export default AddHospitalForm;