"use client";
import React  from "react";
// import { FaTelegramPlane } from "react-icons/fa";
import JoinUs from "../components/ui/JoinUs";
import Calendly from "../Calendly";

// Define interfaces for formData and errors
// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormErrors {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const ContactForm = () => {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState<FormErrors>({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const validateForm = () => {
  //   const newErrors: FormErrors = {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   };
  //   if (!formData.name) newErrors.name = "Name is required";
  //   if (!formData.email) newErrors.email = "Email is required";
  //   else if (!/\S+@\S+\.\S+/.test(formData.email))
  //     newErrors.email = "Email is invalid";
  //   if (!formData.subject) newErrors.subject = "Subject is required";
  //   if (!formData.message) newErrors.message = "Message is required";
  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     // Create the mailto link with pre-filled fields
  //     const recipientEmail = "priyanshu@poxscan.io"; // Replace with your email
  //     const subject = encodeURIComponent(formData.subject);
  //     const body = encodeURIComponent(`
  //       Name: ${formData.name}
  //       Email: ${formData.email}
  //       Message: ${formData.message}
  //     `);

  //     const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
  //       subject
  //     )}&body=${encodeURIComponent(body)}`;
  //     // Open the user's default email client with the pre-filled details
  //     window.location.href = mailtoLink;

  //     // Optionally reset the form after submission
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   }
  // };

  return (
    <div className="text-center min-h-screen px-2 md:px-4 lg:px-6 xl:px-32 mt-32">
      {/* <p className="text-2xl md:text-4xl font-medium">Contact Us</p> */}
      
        
      {/* <div className="border-[1px] border-[#2e2d2d] rounded-3xl mt-12 w-full md:w-[70%] mx-auto p-2 md:p-16">
        <div className="flex flex-row justify-center items-center space-x-1 md:space-x-2 pt-4 md:pt-0">
          <div>
            <FaTelegramPlane color="#8af969" size={28} />
          </div>
          <div className="text-lg md:text-2xl font-medium">
            Get in touch with us
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-6 px-2 lg:px-4 py-4 space-y-4 w-full lg:w-[65%] mx-0 md:mx-auto"
        >
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 justify-between">
            <div className="w-full lg:w-[48%]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 border-[1px] border-[#504f4f] bg-black rounded-xl"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="w-full lg:w-[48%] mt-4 md:mt-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 border-[1px] border-[#504f4f] bg-black rounded-xl"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-6 py-4  border-[1px] border-[#504f4f] bg-black rounded-xl"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject}</span>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 border-[1px] border-[#504f4f] bg-black rounded-xl"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-l from-[#1C5A04] to-[#68A541] rounded-lg text-white font-medium"
          >
            Send Message
          </button>
        </form>
      </div> */}

      {/* Join Us */}
      <div className="mt-24">
        <JoinUs />
      </div>

      {/* Calendly */}
      <div>
        <Calendly />
      </div>
    </div>
  );
};

export default ContactForm;
