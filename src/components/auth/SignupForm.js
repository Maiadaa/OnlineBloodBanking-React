import { useForm } from 'react-hook-form';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
import RoleSelectInput from '../../UI/form/RoleSelectInput';
import SelectInput from '../../UI/form/SelectInput';
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();

    const hospitalsOptions = props.hospitals.map((h) => {
        return { name: h.name, id: h._id };
    });

    const roles = [
        { name: "Super Admin", value: "Super Admin" },
        { name: "Doctor", value: "Doctor" },
        { name: "Donor", value: "Donor" }
    ];


    const submitHandler = async (formData) => {
        try {
            const response = await fetch('https://bloodera.azurewebsites.net/auth/signup', {
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

            console.log(data);
            navigate(`/signin`);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <form
            className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
            onSubmit={handleSubmit(submitHandler)}
        >
            <SelectInput
                name="hospital"
                register={register}
                options={hospitalsOptions}
                validation={{ required: true }}
            />
            {formState.errors.hospitalId && (
                <FormInputError>Patient hospital must not be empty</FormInputError>
            )}

            <RoleSelectInput
                className='rounded-lg min-w-[250px] p-2'
                name="role"
                type="text"
                register={register}
                validation={{ required: true }}
                options={roles} />
            {formState.errors.role && (
                <FormInputError>Role must not be empty.</FormInputError>
            )}

            <label className="text-white font-bold">Full Name</label>
            <TextInput
                type="text"
                name="name"
                register={register}
                validation={{ required: true }}
            />
            {formState.errors.name && (
                <FormInputError>Name must not be empty</FormInputError>
            )}

            <label className="text-white font-bold">Username</label>
            <TextInput
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
                type="password"
                name="password"
                register={register}
                validation={{ required: true }}
            />
            {formState.errors.password && (
                <FormInputError>Password must not be empty.</FormInputError>
            )}

            <label className="text-white font-bold">Email Address</label>
            <TextInput
                type="text"
                name="email"
                register={register}
                validation={{
                    require: true,
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                }} />
            {formState.errors.email && (
                <FormInputError> Please enter a valid email address </FormInputError>
            )}
            <label className="text-white font-bold">Phone Number</label>
            <TextInput
                type="number"
                name="phoneNumber"
                register={register}
                validation={{ required: true, min: 13 }}
            />
            {formState.errors.phoneNumber && (
                <FormInputError> Please enter a valid phone number </FormInputError>
            )}
            
            <label className="text-white font-bold">BloodType</label>
            <TextInput
                type="text"
                name="bloodType"
                register={register}
                validation={{ required: false}}
            />


            <button
                type="submit"
                className="bg-white rounded-xl my-4 py-2 px-8 self-center"
            >
                Signup
            </button>
        </form>
    );
};

export default SignupForm;
