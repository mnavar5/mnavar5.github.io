import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/gmail.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a83vlcp",
        "template_lfcljxk",
        formRef.current,
        "user_ur8oIl0qUE3QHOhAibxBv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={`c${darkMode ? " dark" : ""}`} aria-label="Contact Michel Navarro">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone icon" className="c-icon" />
              443 653 5o22
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email icon" className="c-icon" />
              mnava.work@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address icon" className="c-icon" />
              Towson, Maryland
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available to discuss new frameworks and opportunities.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required />
            <input type="email" placeholder="Email" name="user_email" required />
            <textarea rows="5" placeholder="Message" name="message" required />
            <button type="submit">Submit</button>
            {done && <span className="c-thankyou">Thank you for reaching out!</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
