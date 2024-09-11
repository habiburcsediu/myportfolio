import { aboutDescription } from "../constraints";
import { skills } from "../constraints";

export default function About() {
  return (
    <div id="about" className="grid-about mt-20">
      <div className="grid-item-1 p-[20px] md:p-[40px] flex flex-col gap-3">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-[#c1c2d3] leading-normal">{aboutDescription}</p>
      </div>
      <div className="grid-item-2 p-[20px] md:p-[40px] flex flex-col gap-5 items-start justify-center">
        <div className="flex flex-col">
          <p className="text-sm text-[#828392]">I constantly try to improve</p>
          <h2 className="text-2xl lg:text-3xl font-bold">My tech stack</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <label key={index} className="p-2 text-sm opacity-50 lg:text-lg lg:opacity-100 bg-[#10132E] rounded-md">
              {skill}
            </label>
          ))}
        </div>
      </div>
      <div className="grid-item-3 p-[20px] md:p-[40px] flex flex-col justify-center items-center gap-3 text-center bg-gradient-to-r from pink-600 to blue-400">
        <h2 className="text-xl lg:text-3xl font-bold">Do you want to start a <br /> project together?</h2>
        <button className="bg-white text-[#000319] px-5 py-2 text-md lg:text-xl font-bold rounded-lg duration-300 hover:shadow-[4px_4px_0_rgba(255,255,255,0.3)]">Let's Discuss</button>
      </div>
    </div>
  );
}
