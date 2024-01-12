const FormControl = ({
  type = "text",
  label,
  value,
  setValue,
  ...restProps
}) => {
  const handleChange = (e) => setValue(e.target.value)

  return (
    <label className="block">
      <span className="text-gray-600">{label}</span>
      {type === "textarea" ? (
        <textarea
          className="w-full mt-1.5 p-3 border-gray-300 rounded focus:border-blue-500"
          name={label}
          value={value}
          onChange={handleChange}
          {...restProps}
        ></textarea>
      ) : (
        <input
          className="w-full mt-1.5 p-3 border-gray-300 rounded focus:border-blue-500"
          name={label}
          type={type}
          value={value}
          onChange={handleChange}
          {...restProps}
        />
      )}
    </label>
  )
}

export default FormControl
