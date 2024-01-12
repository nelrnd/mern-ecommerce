const FormControl = ({
  type = "text",
  label,
  value,
  setValue,
  ...restProps
}) => {
  const handleChange = (e) => setValue(e.target.value)

  return (
    <label className="block mb-4">
      <span className="block mb-2">{label}</span>
      {type === "textarea" ? (
        <textarea
          className="w-full"
          name={label}
          value={value}
          onChange={handleChange}
          {...restProps}
        ></textarea>
      ) : (
        <input
          className="w-full"
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
