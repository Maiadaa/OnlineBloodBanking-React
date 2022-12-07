import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/TextInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import SelectInput from '../../UI/form/SelectInput';
import FormInputError from '../../UI/form/FormInputError';

const AddNewPatient = (props) => {
    const { register, handleSubmit, formState } = useForm();

    const hospitalsOptions = props.hospitals.map((h) => {
        return {name: h.name, id: h._id};
    });
    const submitHandler = async (formData) => {
        try {
          formData.Request = [];
          const response = await fetch('http://localhost:3000/patient', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              //Authorization: `BEARER ${authContext.token}`
            },
            body: JSON.stringify(formData)
          });
          const data = await response.json();
          
          if (!response.ok) {
            throw Error(data.error);
          }
    
          console.log(data);
        } catch (err) {
          console.log(err.message);
        }
    };
    
    return(
        <form method="POST" className="flex flex-col p-10 gap-5 w-full bg-white shadow-2xl rounded-lg" onSubmit={handleSubmit(submitHandler)}>
          <label className=" text-center text-2xl font-bold" >Add New Patient</label>
          <TextInput 
            type = "text"
            name = "name"
            placeholder = "Enter your name"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.name && (
            <FormInputError>Patient name must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "email"
            placeholder = "Enter your email"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.email && (
            <FormInputError>Patient email must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "PhoneNumber"
            placeholder = "Enter your phoneNumber"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.PhoneNumber && (
            <FormInputError>Patient number must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Address"
            placeholder = "Enter your address"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Address && (
            <FormInputError>Patient address must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Condition"
            placeholder = "Enter your Condition"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Condition && (
            <FormInputError>Patient Condition must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "BloodType"
            placeholder = "Enter your blood type"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.BloodType && (
            <FormInputError>Patient blood type must not be empty</FormInputError>
          )}
          <SelectInput
            label="Hospitals"
            name= "hospitalId"
            register={register}
            options={hospitalsOptions}
            validation={{ required: true }}
          />
          {formState.errors.hospitalId && (
            <FormInputError>Patient hospital must not be empty</FormInputError>
          )}
      <button
        type="submit"
        className="text-white dark:bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 place-self-center hover:bg-gray-400 hover:text-black"
      >
        Add Patient
      </button>
      </form>
    );
};
export default AddNewPatient;