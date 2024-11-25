import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import emailjs
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // EmailJS Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <ToastContainer /> {/* Toast Container for displaying notifications */}
      <h1>Contact Me</h1>
      <motion.p
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        Email: parnapalliyogeshhanuman@gmail.com
      </motion.p>
      <motion.p
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        Phone: +91 9581933245
      </motion.p>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name" // Matches the formData key
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Your Email</label>
        <input
          type="email"
          name="email" // Matches the formData key
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <textarea
          name="message" // Matches the formData key
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
          transition={{ duration: 0.2 }}>
          Send
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
