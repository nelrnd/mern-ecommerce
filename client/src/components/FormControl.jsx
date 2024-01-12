import { PiWarningFill } from "react-icons/pi"

const FormControl = ({
  type = "text",
  label,
  value,
  setValue,
  error,
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
      {error && (
        <p className="mt-1 text-sm text-red-500 flex gap-1 items-center">
          <PiWarningFill className="text-base" />
          {error.msg}
        </p>
      )}
    </label>
  )
}

export default FormControl
