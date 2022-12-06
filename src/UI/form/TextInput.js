const TextInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        className="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
        type={props.type}
        placeholder={props.placeholder}
        //{...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInput;
