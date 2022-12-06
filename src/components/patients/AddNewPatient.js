import { useForm } from 'react-form-hook';
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
          const response = await fetch('', {
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
        <form className="flex flex-col p-10 gap-5 bg-gray-800 w-fit" >
            <label>hagrass</label>
            <TextInput 
                type = "text"
                placeholder = "Enter your name"
            />
            
      </form>
    );
};
export default AddNewPatient;