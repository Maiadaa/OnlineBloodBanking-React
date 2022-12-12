import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/ModifyForm/TextInput';
import FormInputError from '../../UI/form//ModifyForm/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import React, { useContext } from 'react';

const UpdateSuperAdminAccount = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const superAdminId = authContext.id;
    const submitHandler = async (formData) => {
        try {   
          const response = await fetch('https://onlinebloodbank.azurewebsites.net/auth/userAccount/UpdateSuperAdmin/' + superAdminId, {
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
          navigate('/signin');
        } catch (err) {
          console.log(err.message);
        }
    };
    
    return(
        <form method="POST" className="flex flex-col p-10 gap-5 w-full bg-white shadow-2xl rounded-lg" onSubmit={handleSubmit(submitHandler)}>
          <label className=" text-center text-2xl font-bold" >Manage Super Admin Account</label>
          <TextInput 
            type = "text"
            name = "name"
            placeholder = "Enter Super Admin new name"
            register={register}
            //fdefaultValue = {props.superAdmin.name}
            validation={{ required: true }}
          />
          {formState.errors.BloodType && (
            <FormInputError>Patient blood type must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "email"
            placeholder = "Enter Super Admin new email"
            register={register}
            //defaultValue = {props.superAdmin.email}
            validation={{ required: true }}
          />
          {formState.errors.Amount && (
            <FormInputError>Patient Amount must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "phoneNumber"
            placeholder = "Enter Super Admin new phoneNumber"
            register={register}
            //defaultValue = {props.superAdmin.phoneNumber}
            validation={{ required: true }}
          />
          {formState.errors.Date && (
            <FormInputError>Patient date must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "username"
            placeholder = "Enter Super Admin new username"
            register={register}
            //defaultValue = {props.superAdmin.username}
            validation={{ required: true }}
          />
          {formState.errors.Status && (
            <FormInputError>Patient status must not be empty</FormInputError>
          )}
          <TextInput 
            type = "text"
            name = "password"
            placeholder = "Enter Super Admin new password"
            register={register}
            //defaultValue = {props.superAdmin.password}
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
export default UpdateSuperAdminAccount;