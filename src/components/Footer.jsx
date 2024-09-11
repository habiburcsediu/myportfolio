import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between items-center py-5 mt-36 border-t border-[#16192D]">
      <p>Copyright &copy; Habibur Rahman</p>
      <div className="flex gap-3">
        <div className="cursor-pointer">
          <FaGithub size={20} />
        </div>
        <div className="cursor-pointer">
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  );
}
