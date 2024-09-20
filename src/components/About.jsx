import { aboutDescription } from "../constraints";
import { skills } from "../constraints";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const circleWidth = width / 2;
  const circleHeight = height / 2;
  const finalCircle = (circleWidth + circleHeight) / 6;

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, [ref.current]);

  return (
    <div id="about" className="grid-about mt-40 relative">
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="grid-item-1 p-[20px] md:p-[40px] flex flex-col gap-3"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-[#c1c2d3] leading-normal">{aboutDescription}</p>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="grid-item-2 p-[20px] md:p-[40px] flex flex-col gap-5 items-start justify-center"
      >
        <div className="flex flex-col">
          <p className="text-sm text-[#828392]">I constantly try to improve</p>
          <h2 className="text-2xl lg:text-3xl font-bold">My tech stack</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <label
              key={index}
              className="p-2 text-sm opacity-50 lg:text-lg lg:opacity-100 bg-[#10132E] rounded-md"
            >
              {skill}
            </label>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="grid-item-3 flex flex-col justify-center items-center gap-3 text-center bg-gradient-to-r from pink-600 to blue-400"
      >
        <div className="w-full h-full bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] rounded-xl flex items-center justify-center relative">
          <motion.div
            whileInView={{ x: width - finalCircle }}
            transition={{
              duration: 10,
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{ width: `${finalCircle}px`, height: `${finalCircle}px` }}
            className="bg-[red] blur-[60px] absolute left-0"
          ></motion.div>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl lg:text-3xl font-bold">
              Do you want to start a <br /> project together?
            </h2>
            <button className="bg-white text-[#000319] px-5 py-[4px] text-md lg:text-lg font-bold rounded-lg duration-300 hover:shadow-[4px_4px_0_rgba(255,255,255,0.3)]">
              Let's Discuss
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
