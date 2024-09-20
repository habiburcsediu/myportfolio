import { projects } from "../constraints/index";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn, textReveal } from "../variants";

export default function Projects() {
  return (
    <div id="projects" className="mt-40">
      <h1 className="text-5xl font-black text-center">
        A small selection{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h1>
      <div
        transition={{ staggerChildren: 0.2 }}
        className="grid-projects mt-20"
      >
        {projects.map((project, index) => (
          <div className="bg-[#000319] border border-[#16192D] rounded-2xl p-8 flex flex-col gap-5">
            <div className="bg-[#13162D] rounded-2xl p-5">
              <div className="rounded-2xl overflow-hidden cursor-pointer">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-white">{project.title}</h2>
              <p className="text-md text-neutral-300 tracking-normal">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.libraries.map((library, index) => (
                <motion.label
                  variants={textReveal()}
                  initial="hidden"
                  whileInView="reveal"
                  custom={index}
                  transition={{ duration: 5 }}
                  viewport={{ once: true }}
                  className="bg-[#10132E] text-white px-2 py-1 rounded-md"
                  key={index}
                >
                  {library}
                </motion.label>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button type="code">Source Code</Button>
              <Button>Live Project</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
