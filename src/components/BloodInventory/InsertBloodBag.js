import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/TextInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import SelectInput from '../../UI/form/SelectInput';
import FormInputError from '../../UI/form/FormInputError';

const InsertBloodBag = (props) =>
{
  const { register, handleSubmit, formState } = useForm();
  const inventoryOptions = props.inventories.map((i) => {
    return {name: i.name, id: i._id};
});
const hostpitalID = "638dfc9591c066990c434584";
  const submitHandler = async (formData) => {
      try {
        formData.Request = [];
        const response = await fetch('http://localhost:3000/BloodBag', {
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
        <label className=" text-center text-2xl font-bold" >Insert new Blood Bag requestt</label>
        <TextInput 
          type = "text"
          name = "bloodtype"
          placeholder = "Enter Blood Type"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.name && (
          <FormInputError>Blood Type must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "HBV"
          placeholder = "Enter the HBV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.email && (
          <FormInputError>HBV must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "HCV"
          placeholder = "Enter the HCV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.PhoneNumber && (
          <FormInputError>HCV must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "HIV"
          placeholder = "Enter the HIV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.Address && (
          <FormInputError>HIV must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "HTLV"
          placeholder = "Enter the HTLV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.Condition && (
          <FormInputError>HTLV must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "syphilis"
          placeholder = "Enter the syphilis"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>Syphilis must not be empty</FormInputError>
        )}
       <TextInput 
          type = "text"
          name = "WNV"
          placeholder = "Enter the WNV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>WNV must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "TrypanosomaCruzi"
          placeholder = "Enter the TrypanosomaCruzi"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>TrypanosomaCruzi must not be empty</FormInputError>
        )}
         <TextInput 
          type = "text"
          name = "CMV"
          placeholder = "Enter the CMV"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>CMV must not be empty</FormInputError>
        )}
         <TextInput 
          type = "text"
          name = "Babesia"
          placeholder = "Enter the Babesia"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>Babesia must not be empty</FormInputError>
        )}
         <TextInput 
          type = "text"
          name = "BacterialContamination"
          placeholder = "Enter the Bacterial Contamination"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.BloodType && (
          <FormInputError>BacterialContamination must not be empty</FormInputError>
        )}
    <button
      type="submit"
      className="text-white dark:bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 place-self-center hover:bg-gray-400 hover:text-black"
    >
      Insert Blood Bag Request
    </button>
    </form>
    );
};
export default InsertBloodBag;