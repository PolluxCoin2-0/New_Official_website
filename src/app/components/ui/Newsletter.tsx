"use client";
import React, { useState } from "react";
import { MdNotificationAdd } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
const Newsletter = () => {
  // State to manage the email input
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Function to handle email submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);

      // Define the recipient email and subject
      const recipientEmail = "priyanshu@poxscan.io"; // Replace with your email
      const subject = "New Subscription Request";
      const body = `User with email: ${email} has subscribed to the mailing list.`;

      // Create Gmail compose URL
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Redirect to Gmail compose
      window.location.href = gmailComposeUrl;

      // Reset the email input
      setEmail("");
      setIsSubmitting(false);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-xl space-y-6 px-2 md:px-4 lg:px-6 xl:px-44 mb-20 mt-0 md:mt-20">
      {/* Heading */}
      <p className="text-2xl md:text-4xl font-medium text-center">
        Discover the PolluxChain Ecosystem
        <br />
        <span className="text-lg md:text-2xl pt-4 text-[#a7a4a4]">
         Subscribe to Our Newsletter{" "}
        </span>
        <br />
        
      </p>

      {/* Input and Button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center w-full max-w-md space-y-4 sm:space-y-0 sm:space-x-8 mt-20 "
      >
        {/* Position the email icon inside the input field */}
        <div className="relative flex items-center">
          <HiOutlineMailOpen
            className="absolute left-3 text-gray-500"
            size={20}
          />
          <input
            type="email"
            placeholder="Enter your Email Address "
            className="flex-grow pl-10 pr-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-[#1C5A04] focus:ring-1 focus:ring-[#68A541] transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-[#1C5A04] to-[#68A541] rounded-lg text-nowrap font-semibold hover:from-[#68A541] hover:to-[#68A541] transition shadow-md hover:shadow-lg transform hover:scale-105 duration-200 mt-4 sm:mt-0"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{isSubmitting ? "Submitting..." : "Subscribe Now"}</span>
          <MdNotificationAdd className="ml-2" size={28} />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
