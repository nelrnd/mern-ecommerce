const FileInput = ({ label, value, setValue, ...restProps }) => {
  const handleChange = (e) => setValue(e.target.files[0])

  return (
    <label className="block mb-4">
      <span className="block mb-2">{label}</span>
      <input
        className="w-full"
        type="file"
        onChange={handleChange}
        {...restProps}
      />
    </label>
  )
}

export default FileInput
