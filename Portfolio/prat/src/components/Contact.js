import React from "react";
import "./Contact.css";
import mk from "../assets/mk.jpg";
import { FaGithub, FaLinkedin, FaArrowCircleUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="lay">
        <div className="contact-info">
          <h2>📧: m.monishkanna@outlook.com</h2>
          <h2>📞: +91 8668129523</h2>
          <h2>🏠: Anna Nagar, Dindigul, Tamil Nadu</h2>
        </div>
        <div className="form-container">
          <form className="contact-form" method="POST" action="/send-email">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email 📧</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Suggestion 📫</label>
              <textarea name="suggestion" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <img src={mk} className="logo" alt="MK Logo" />
        <h3>©️ CopyRight @Mk</h3>
        <div className="social-icons">
          <a
            href="https://github.com/MONISH-KANNA-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
        <FaArrowCircleUp size={40} className="scroll-up" />
      </footer>
    </div>
  );
};

export default Contact;
