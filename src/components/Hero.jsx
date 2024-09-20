import MyPhoto from "../assets/images/hero.png";
import ConicGradientAnimationButton from "../features/ConicGradientAnimationButton";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 md:flex-row pt-16 md:pt-28">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 md:gap-16 pt-24 md:pt-32">
        <div
          className="flex flex-col gap-3"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="uppercase text-blue-100 text-base md:text-xl text-center tracking-wider md:text-start"
          >
            Hi! I am Habibur Rahman
          </motion.h2>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-center md:text-start font-bold"
          >
            React Developer
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center md:text-start"
          >
            based in Bangladesh. 🇧🇩
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass="active"
          >
            <ConicGradientAnimationButton>
              See my recent works
              <FaAngleDown />
            </ConicGradientAnimationButton>
          </Link>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center pt-16 md:items-end md:justify-end">
        <div className="w-64 h-80 bg-[#8E6AC8] ring-4 ring-white rounded-sm">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: -4 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="w-64 h-80 bg-[#000319] ring-4 ring-white rounded-sm relative left-[-30px] top-[-40px]"
          >
            <img
              className="flex-shrink-0 w-full h-full"
              src={MyPhoto}
              alt="Habibur"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
