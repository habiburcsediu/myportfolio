import InputBox from "./InputBox";
import ConicGradientAnimationButton from "../features/ConicGradientAnimationButton";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center mt-40">
      <h1 className="text-5xl font-black text-center">Get In Touch</h1>
      <div className="bg-[#0C1324] mt-20 p-10 rounded-3xl w-[90%] sm:w-[70%] md:w-[50%]">
        <form action="" className="flex flex-col gap-5">
          <InputBox
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <InputBox
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <InputBox
            label="Subject"
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
          />
          <InputBox
            flag="textarea"
            rows={4}
            cols={20}
            label="Your Message"
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
          />
          <div className="flex justify-center">
            <ConicGradientAnimationButton>
              Send Message
              <IoIosSend />
            </ConicGradientAnimationButton>
          </div>
        </form>
      </div>
    </div>
  );
}
