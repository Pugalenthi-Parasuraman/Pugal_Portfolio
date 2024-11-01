import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="container  flex flex-col text-center  gap-10"
    >
      <h1
        className="lg:text-4xl md:text-3xl text-2xl font-black font-rubik uppercase sectionTitle"
        data-aos="zoom-in"
      >
        Contact
      </h1>
      <form
        action=""
        className="flex flex-col gap-[30px] xl:gap-[40px] md:gap-[40px]"
        data-aos="zoom-in"
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
            className="pl-[16px]"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="pl-[16px]"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="pt-[16px] pl-[16px] resize-none h-[250px]"
          />
        </div>
        <div>
          <input
            className="border-none rounded-2xl w-[126px] h-[45px] text-xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-shadow ease-in-out transform hover:scale-105 active:translate-y-[2px] active:drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] "
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
}

export default Contact;
