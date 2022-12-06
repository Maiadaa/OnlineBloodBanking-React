const SelectInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-black font-bold px-4">{props.label}</label>
      <select
        className="rounded-lg min-w-[250px] px-4"
        {...props.register(props.name, props.validation)}
      >
        {props.options.map((o) => (
          <option value={o.id} key={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
