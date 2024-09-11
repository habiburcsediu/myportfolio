import { projects } from "../constraints/index";
import Button from '../components/Button'

export default function Projects() {
  return (
    <div id="projects" className="mt-40">
      <h1 className="text-5xl font-black text-center">A small selection <span className="text-[#CBACF9]">recent projects</span></h1>
      <div className="grid-projects">
        {
          projects.map((project, index) => (
            <div key={index} className="mt-20 bg-[#000319] border border-[#16192D] rounded-2xl p-8 flex flex-col gap-5">
              <div className="bg-[#13162D] rounded-2xl p-5">
                <div>
                  <img className="rounded-2xl" src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-white">{project.title}</h2>
                <p className="text-md text-neutral-300 tracking-normal">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {
                  project.libraries.map((library, index) => (
                    <label className="bg-[#10132E] text-white px-2 py-1 rounded-md" key={index}>{library}</label>
                  ))
                }
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button type="code">Source Code</Button>
                <Button>Live Project</Button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
