import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const AddHospitalForm = (props) => {
    // registers and opt. validates inputs 
    // holds the func to run for submitting the form 
    // defined validation errors states e.g. formState.errors.name
    const { register, handleSubmit, formState } = useForm();

    const submitHandler = (formData) =>{
        console.log(formData);
    };

    return (
        <Form
        className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
        onSubmit={handleSubmit(submitHandler)}
        >
            <div className="flex felx-col justify-center gap-2">
                <label className="text-white font-bold">
                    Hospital Name 
                </label>
                <input 
                className="rounded-lg min-w-[250px] p-2"
                type = "text"
                {...register('name', {required: true})}
                />
            </div>

            {formState.errors.name && (
                <p className="rounded-lg min-w0[250px] p-2 bg-red-900 text-white fiont-bold">
                    You shouldn't leave hospital name empty.
                </p>
            )}

            <button
            type="submit"
            className="bg-white rounded-xl my-4 py-2 px-8 self-center"  
            >
                Add hospital 
            </button>
        </Form>
    );

}