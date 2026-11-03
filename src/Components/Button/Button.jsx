import { Link } from "react-router-dom";

function Button({ text, link }) {
  return (
    <Link
      to={link}
      className="flex-1 inline-flex items-center justify-center h-[46px] px-[24px] bg-[#F8F9FB] text-[#0A1D37] font-['Montserrat'] text-[16px] font-medium rounded-[10px] hover:bg-gray-200 transition-colors duration-200"
    >
      {text}
    </Link>
  );
}

export default Button;
