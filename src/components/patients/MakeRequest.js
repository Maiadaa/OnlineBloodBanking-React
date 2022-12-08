import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/TextInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import SelectInput from '../../UI/form/SelectInput';
import FormInputError from '../../UI/form/FormInputError';

const MakeRequest = (props) => {
    const { register, handleSubmit, formState } = useForm();

    const patientOptions = props.patients.map((p) => {
        return {name: p.name, id: p._id};
    });
    const submitHandler = async (formData) => {
        try {   
          const response = await fetch('http://localhost:3000/patient/requestBloodBag/' + formData.patientId, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
              //Authorization: `BEARER ${authContext.token}`
            },
            body: JSON.stringify(formData)
          });
          console.log(formData);
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
          <label className=" text-center text-2xl font-bold" >Add New Request</label>
          <TextInput 
            type = "text"
            name = "BloodType"
            placeholder = "Enter patient's Blood Type"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.BloodType && (
            <FormInputError>Patient blood type must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Amount"
            placeholder = "Enter patien's Amount"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Amount && (
            <FormInputError>Patient Amount must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Date"
            placeholder = "Enter request date"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Date && (
            <FormInputError>Patient date must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Status"
            placeholder = "Enter your status"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Status && (
            <FormInputError>Patient status must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "Purpose"
            placeholder = "Enter patient's purpose"
            register={register}
            validation={{ required: true }}
          />
          {formState.errors.Purpose && (
            <FormInputError>Patient purpose must not be empty</FormInputError>
          )}
          <SelectInput
            label="Patients"
            name= "patientId"
            register={register}
            options={patientOptions}
            validation={{ required: true }}
          />
          {formState.errors.patientId && (
            <FormInputError>Patient must not be empty</FormInputError>
          )}
      <button
        type="submit"
        className="text-white dark:bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 place-self-center hover:bg-gray-400 hover:text-black"
      >
        Send Request
      </button>
      </form>
    );
};
export default MakeRequest;