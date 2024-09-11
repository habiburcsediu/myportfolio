import MyPhoto from "../assets/images/hero.png";
import ConicGradientAnimationButton from "../features/ConicGradientAnimationButton";
import { FaAngleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row pt-16 md:pt-28">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 md:gap-16 pt-24 md:pt-32">
        <div className="flex flex-col gap-3">
          <h2 className="uppercase text-blue-100 text-base md:text-xl text-center tracking-wider md:text-start">
            Hi! I am Habibur Rahman
          </h2>
          <h1 className="text-5xl md:text-6xl text-center md:text-start font-bold">
            React Developer
          </h1>
          <p className="text-2xl md:text-3xl text-center md:text-start">
            based in Bangladesh. 🇧🇩
          </p>
        </div>

        <ConicGradientAnimationButton>
          See my recent works
          <FaAngleDown />
        </ConicGradientAnimationButton>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center pt-16 md:items-end md:justify-end">
        <img className="flex-shrink-0 w-54 h-54" src={MyPhoto} alt="Habibur" />
      </div>
    </div>
  );
}
