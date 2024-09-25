export const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  accept = "null",
}) => {
  return (
    <div className="flex flex-col my-4">
      <label className="font-semibold">{label}</label>
      <input
        className="bg-slate-100 border-2 border-gray-300 shadow-md rounded-md w-full"
        value={value}
        onChange={onChange}
        type={type}
        accept={accept}
        required
      />
    </div>
  );
};

export const MultiTextField = ({
  label,
  value,
  onChange,
  type = "text",
  accept = "null",
}) => {
  return (
    <div className="flex flex-col my-4">
      <label className="font-semibold">{label}</label>
      <textarea
        className="bg-slate-100 border-2 border-gray-300 shadow-md rounded-md w-full"
        value={value}
        onChange={onChange}
        type={type}
        accept={accept}
        rows="6"
        cols="40"
        required
      />
    </div>
  );
};

export const DropDown = ({
  label,
  name,
  id,
  value,
  onChange,
  list,
  data = null,
}) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedText = event.target.options[event.target.selectedIndex].text;

    // Pass both courseId and courseName to onChange
    onChange({ value: selectedValue, name: selectedText });
  };

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id} className="font-semibold mb-2">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={data ? handleSelectChange : onChange}
        className="border-2 bg-slate-100 border-gray-300 rounded-md p-2"
        required
      >
        <option value="" disabled>
          Select an option
        </option>

        {data
          ? list?.map((option, idx) => (
              <option key={idx} value={option.course_id}>
                {option.course_name}
              </option>
            ))
          : list?.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
      </select>
    </div>
  );
};
