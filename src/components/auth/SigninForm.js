import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const SigninForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log(formData);
      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      // invoke the login function in our auth context
      authContext.login(data.userId, data.username, data.jwt, data.role);

      // navigate to the home page
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >

      <label className="text-white font-bold">Role</label>
      <select 
        name="role"
        label="Role"
        type="text"
        register={register}
        validation={{ required: true }}>
        <option value="Super Admin">Super Admin</option>
        <option value="Lab Manager">Lab Manager</option>
        <option value="Lab Admin">Lab Admin</option>
        <option value="Doctor">Doctor</option>
        <option value="Donor">Donor</option>
      </select>
      {formState.errors.role && (
        <FormInputError>Role must not be empty.</FormInputError>
      )}

      <label className="text-white font-bold">Username</label>
      <TextInput
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Username must not be empty.</FormInputError>
      )}
      <label className="text-white font-bold">Password</label>
      <TextInput
        label="Password"
        type="password"
        name="password"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
