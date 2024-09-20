import InputBox from "./InputBox";
import ConicGradientAnimationButton from "../features/ConicGradientAnimationButton";
import { IoIosSend } from "react-icons/io";
import { inputs } from "../constraints";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Contact() {
  // form validation
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  let counter;

  // form validation
  const validate = (values) => {
    const errors = {};
    const nameValidateRegex = /([a-zA-Z\s]{5,12})/;
    const emailValidateRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const subjectValidateRegex = /([a-zA-Z\s]{8,50})/;
    const messageValidateRegex = /([a-zA-Z\s]{10,100})/;

    if (!values.name) {
      errors.name = "Name is required!";
    } else if (!nameValidateRegex.test(values.name)) {
      errors.name = "Name must be 5-12 characters!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailValidateRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    } else if (!subjectValidateRegex.test(values.subject)) {
      errors.subject = "Subject must be 8-50 characters!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } else if (!messageValidateRegex.test(values.message)) {
      errors.message = "Message must be 10-100  characters!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center mt-40"
    >
      <h1 className="text-5xl font-black text-center">Get In Touch</h1>
      <div className="bg-[#0C1324] mt-20 p-10 rounded-3xl w-[90%] sm:w-[70%] md:w-[50%]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {inputs.map((input, index) => {
            const name = input.name;
            let counter = index / 10;
            return (
              <motion.div
                variants={fadeIn("down", counter)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <InputBox
                  key={index}
                  {...input}
                  name={name}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  formError={formErrors[name]}
                />
              </motion.div>
            );
          })}
          <motion.div
            variants={fadeIn("down", counter)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ConicGradientAnimationButton>
              Send Message
              <IoIosSend />
            </ConicGradientAnimationButton>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
