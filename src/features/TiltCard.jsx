import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import myPhoto from '../assets/images/hero.png';

export default function TiltCard({children}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-5.5deg", "5.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["5.5deg", "-5.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(x);

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}
        // className="absolute inset-4 grid place-content-center rounded-xl bg-[#000319] shadow-lgf"
      >
        {/* <img src={myPhoto} alt="Habibur" /> */}
        {children}
      </div>
    </motion.div>
  );
}
