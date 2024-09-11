import { FaGithub } from "react-icons/fa";

export default function Button({ children, type }) {
  return type === "code" ? (
    <button
      className="border border-[#F9F9F9] text-white flex items-center justify-center gap-3 px-7 py-2 rounded duration-300 hover:bg-white hover:text-[#000319]"
      type="button"
    >
      <FaGithub />
      <span>{children}</span>
    </button>
  ) : (
    <button
      className="bg-[#F9F9F9] text-[#000319] flex items-center justify-center gap-3 px-7 py-2 rounded duration-300 hover:ring-2 hover:bg-transparent hover:text-white"
      type="button"
    >
      <FaGithub />
      <span>{children}</span>
    </button>
  );
}
