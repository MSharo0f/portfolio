import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const formData = new FormData(event.target);

    formData.append("g-recaptcha-response", recaptchaValue);

    fetch(event.target.action, {
      method: event.target.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thanks for your submission!");
          event.target.reset();
        } else {
          alert("Failed to submit. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was a problem submitting the form. Please try again.");
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        action={import.meta.env.VITE_EMAIL} //Please Enter your Formspree email address here
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div
          className="formGroup"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} //Please enter your recaptcha code here
            onChange={handleRecaptchaChange}
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
