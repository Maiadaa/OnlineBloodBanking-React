import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/TextInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import SelectInput from '../../UI/form/SelectInput';
import FormInputError from '../../UI/form/FormInputError';
import { useNavigate } from 'react-router-dom';
import RoleSelectInput from '../../UI/form/RoleSelectInput';
import AuthContext from '../store/authContext';
import React, { useContext } from 'react';
const CreateLabAdminAccount = (props) =>
{

  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const hospitalID = authContext.hospitalId;

  const submitHandler = async (formData) => {
      try {
        console.log(JSON.stringify(formData));
        formData.hospitalId = hospitalID;
        const response = await fetch('http://localhost:3000/auth/userAccount/CreateLabAdmin' , {
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
        navigate('/signin');
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
  };
    return(
        <form method="POST" className="flex flex-col p-10 gap-5 w-full bg-white shadow-2xl rounded-lg" onSubmit={handleSubmit(submitHandler)}>
        <label className=" text-center text-2xl font-bold" >Create Lab Admin Account</label>
        <TextInput  
          type = "text"
          name = "name"
          placeholder = "Enter Name"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.name && (
          <FormInputError>Name must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "email"
          placeholder = "Enter the Email"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.email && (
          <FormInputError>Email must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "phoneNumber"
          placeholder = "Enter the Phone Number"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.PhoneNumber && (
          <FormInputError>Phone Number must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "username"
          placeholder = "Enter the Username"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.Address && (
          <FormInputError>Username must not be empty</FormInputError>
        )}
        <TextInput 
          type = "text"
          name = "password"
          placeholder = "Enter the Password"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.Condition && (
          <FormInputError>Password must not be empty</FormInputError>
        )}
    <button
      type="submit"
      className="text-white dark:bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/2 place-self-center hover:bg-gray-400 hover:text-black"
    >
      Create Account
    </button>
    </form>
    );
};
export default CreateLabAdminAccount;