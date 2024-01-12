const FileInput = ({ label, value, setValue, ...restProps }) => {
  const handleChange = (e) => setValue(e.target.files[0])

  return (
    <label className="block mb-4">
      <span className="text-gray-600">{label}</span>
      <input
        className="w-full mt-1.5"
        type="file"
        onChange={handleChange}
        {...restProps}
      />
    </label>
  )
}

export default FileInput
