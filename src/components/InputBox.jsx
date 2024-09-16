export default function InputBox({
  name,
  formValues,
  setFormValues,
  formError,
  flag = "",
  label,
  ...rest
}) {
  const handleChange = (e) => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">{label}</label>
      {flag === "textarea" ? (
        <textarea
          className="bg-[#000319] border border-[#343539] outline-none focus:ring-2 focus:ring-[#343539] px-3 py-2 rounded-md placeholder:text-sm"
          {...rest}
          value={formValues[name]}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          className="bg-[#000319] border border-[#343539] outline-none focus:ring-2 focus:ring-[#343539] px-3 py-2 rounded-md placeholder:text-sm"
          {...rest}
          value={formValues[name]}
          onChange={handleChange}
        />
      )}
      <p className="text-[#DC3545]">{formError}</p>
    </div>
  );
}
