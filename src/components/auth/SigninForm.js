import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
import RoleSelectInput from '../../UI/form/RoleSelectInput';

const SigninForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const roles = [
    { name: "Super Admin", value: "Super Admin" },
    {name: "Lab Manager", value: "Lab Manager" },
    {name: "Lab Admin", value: "Lab Admin"},
    {name: "Doctor", value: "Doctor"},
    {name: "Donor", value: "Donor"} 
  ];
  

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      if(data.role == "Super Admin" || data.role == "Donor"){
        authContext.login(data.userId, data.username, data.jwt, data.role, "0");
      }
      else{
        authContext.login(data.userId, data.username, data.jwt, data.role, data.hospitalId._id);
      }
      // invoke the login function in our auth context

      if (data.role == "Lab Manager") {
        // navigate to the home page
        navigate('/LabManagerMenu');
      } else if (data.role == "Lab Admin") {
        // navigate to the home page
        navigate('/LabAdminMenu');
      }
      else if (data.role == "Super Admin") {
        // navigate to the home page
        navigate('/SuperAdminHomePage');
      } else if (data.role == "Doctor") {
        // navigate to the home page
        navigate('/DoctorHomePage');
      } else if (data.role == "Donor") {
        // navigate to the home page
        navigate('/DonorHomePage');
      }

      console.log(data);

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
      <RoleSelectInput 
        className='rounded-lg min-w-[250px] p-2'
        name="role"
        label="Role"
        type="text"
        register={register}
        validation={{ required: true }}
        options={roles}/>
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
