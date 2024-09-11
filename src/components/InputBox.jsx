export default function InputBox({ flag = "", label, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">{label}</label>
      {flag === "textarea" ? (
        <textarea
          className="bg-[#000319] border border-[#343539] outline-none focus:ring-2 focus:ring-[#343539] px-3 py-2 rounded-md placeholder:text-sm"
          {...rest}
        ></textarea>
      ) : (
        <input
          className="bg-[#000319] border border-[#343539] outline-none focus:ring-2 focus:ring-[#343539] px-3 py-2 rounded-md placeholder:text-sm"
          {...rest}
        />
      )}
    </div>
  );
}
