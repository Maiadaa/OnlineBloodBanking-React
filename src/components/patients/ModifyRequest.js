import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/ModifyForm/TextInput';
import FormInputError from '../../UI/form//ModifyForm/FormInputError';
import { useNavigate } from 'react-router-dom';

const ModifyRequest = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (formData) => {
        try {   
          const response = await fetch('http://localhost:3000/patient/modifyRequest/' + props.patientId + '/' + props.requestId, {
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
          }else{
            navigate(`/getAllPatients`);
          }
          
        } catch (err) {
          console.log(err.message);
        }
    };
    
    return(
        <form method="POST" className="flex flex-col p-10 gap-5 w-full bg-white shadow-2xl rounded-lg" onSubmit={handleSubmit(submitHandler)}>
          <label className=" text-center text-2xl font-bold" >Modify Request</label>
          <TextInput 
            type = "text"
            name = "BloodType"
            placeholder = "Enter patient's Blood Type"
            register={register}
            defaultValue = {props.Requests.BloodType}
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
            defaultValue = {props.Requests.Amount}
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
            defaultValue = {props.Requests.Date}
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
            defaultValue = {props.Requests.Status}
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
            defaultValue = {props.Requests.Purpose}
            validation={{ required: true }}
          />
          {formState.errors.Purpose && (
            <FormInputError>Patient purpose must not be empty</FormInputError>
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
export default ModifyRequest;