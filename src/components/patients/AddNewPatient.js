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
        <form method="POST" className="flex flex-col p-10 gap-5 w-full bg-gray-100" onSubmit={handleSubmit(submitHandler)}>
          <label className=" text-center text-2xl font-bold" >Add New Patient</label>
          <TextInput 
            type = "text"
            name = "name"
            placeholder = "Enter your name"
            register={register}
          />
          <TextInput 
            type = "text"
            name = "email"
            placeholder = "Enter your email"
            register={register}
          />
          <TextInput 
            type = "text"
            name = "PhoneNumber"
            placeholder = "Enter your phoneNumber"
            register={register}
          />
          <TextInput 
            type = "text"
            name = "Address"
            placeholder = "Enter your address"
            register={register}
          />
          <TextInput 
            type = "text"
            name = "Condition"
            placeholder = "Enter your Condition"
            register={register}
          />
          <TextInput 
            type = "text"
            name = "BloodType"
            placeholder = "Enter your blood type"
            register={register}
          />
          <SelectInput
            label="Hospitals"
            name= "hospitalId"
            register={register}
            options={hospitalsOptions}
          />
      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Patient
      </button>
      </form>
    );
};
export default AddNewPatient;