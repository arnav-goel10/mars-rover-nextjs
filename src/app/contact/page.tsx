"use client";

import Spinner from "@/components/spinner/Spinner";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/starbg/starbg.css";
import "./contact.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.classList.add("was-validated");
    } else {
      setIsSubmitting(true);
      setError(null);
      const formData = new FormData(formRef.current!);
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Singapore",
        hour12: false,
      };
      const dateTimeString = now.toLocaleString("en-SG", options);

      formData.append("Timestamp", dateTimeString);

      console.log("Sending Data...");

      fetch(
        "https://script.google.com/macros/s/AKfycby3lo2d6ho8vm4nx11WXOTUtwuIYSLfmQdG6koITIPJlB6Cw-jP-DSIZ5fYVlczggtm/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          console.log("Data Sent!");
          formRef.current?.classList.remove("was-validated");
          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch((error) => {
          setError(error);
          console.error("Data not Sent!", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="starry-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="container">
        <form
          className="row g-3 needs-validation"
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          style={{ padding: "10% 20%" }}
        >
          <h2 className="text-center mb-4" style={{ color: "white" }}>
            Contact Us
          </h2>

          <div className="col-md-3">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              name="First_Name"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Enter first name</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              name="Last_Name"
              className="form-control"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">Enter last name</div>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustomEmail" className="form-label">
              Email
            </label>
            <div className="has-validation">
              <input
                type="email"
                name="Email"
                className="form-control"
                id="validationCustomEmail"
                aria-describedby="inputGroupPrepend"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />
              <div className="invalid-feedback">
                Please provide a valid Email
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="Message"
              id="message"
              rows={3}
              required
              style={{ resize: "none" }}
            ></textarea>
            <div className="invalid-feedback">Please provide a message</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12 mt-4">
            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={isSubmitting}
            >
              <div className="d-flex justify-content-center align-items-center">
                {isSubmitting ? <Spinner /> : "Submit"}
              </div>
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
