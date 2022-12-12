import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/ModifyForm/TextInput';
import TextAreaInput from '../../UI/form/ModifyForm/TextAreaInput';
import SelectInput from '../../UI/form/SelectInput';
import FormInputError from '../../UI/form/FormInputError';
import { useNavigate } from 'react-router-dom';

const ManagePatient = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const hospitalsOptions = props.hospitals.map((h) => {
        return {name: h.name, id: h._id};
    });
    const submitHandler = async (formData) => {
        try {
          const response = await fetch('https://onlinebloodbank.azurewebsites.net/patient/managePatient/' + props.Patient._id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
              //Authorization: `BEARER ${authContext.token}`
            },
            body: JSON.stringify(formData)
          });
          const data = await response.json();
          
          if (!response.ok) {
            throw Error(data.error);
          }else{
            navigate('/getAllPatients');
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
            defaultValue = {props.Patient.name}
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
            defaultValue = {props.Patient.email}
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
            defaultValue = {props.Patient.PhoneNumber}
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
            defaultValue = {props.Patient.Address}
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
            defaultValue = {props.Patient.Condition}
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
            defaultValue = {props.Patient.BloodType}
            validation={{ required: true }}
          />
          {formState.errors.BloodType && (
            <FormInputError>Patient blood type must not be empty</FormInputError>
          )}
          <SelectInput
            label="Hospitals /Note: select the hospital again/"
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
export default ManagePatient;