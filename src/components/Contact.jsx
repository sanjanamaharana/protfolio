import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import bannerImg from '../assets/saiTemple.jpeg';



const Contact = () => {
  const [state, handleSubmit] = useForm("xzzjdpzd");

  // Custom CSS for aesthetic and mobile background logic using Bootstrap breakpoints
  const customStyles = `
    /* Custom Styles for Bootstrap Integration */
    .contact-section {
        background-color: #0b1120ff; /* Dark background for overall section */
        color: white;
    }
        .text-accent-orange {
        color: #bc8400ff !important;
        text-shadow: 0 0 10px rgba(245, 158, 11, 0.4); /* Subtle orange glow */
    }

    .contact-form-wrapper {
        border-radius: 1.5rem; /* Custom border radius */
        position: relative;
        overflow: hidden;
        /* Default desktop appearance */
        background: #111722ff; /* Dark card background on desktop */
        box-shadow: 0 1rem 3rem rgba(218, 182, 50, 0.5);
        padding: 2.5rem; /* Equivalent to p-4/p-md-5 */
    }

    /* Mobile Background Logic: Max-width 767.98px is the Bootstrap 'md' breakpoint limit */
    @media (max-width: 767.98px) {
        .contact-form-wrapper {
            /* Apply background image on mobile */
            background-image: url('${bannerImg}');
            background-size: cover;
            background-position: center;
            /* Ensure form takes up sufficient space on mobile */
            min-height: 500px;
            display: flex; /* Helps center content if needed */
            align-items: center;
        }

        /* Dark Blue Space Overlay for mobile */
        .contact-form-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: transparent; 
            
            border-radius: 1.5rem;
            z-index: 1;
        }

        /* Adjust padding for mobile view to look better with overlay */
        .contact-form-wrapper {
            padding: 2rem;
        }
    }

    /* Ensure form content is above overlay */
    .form-content {
        position: relative;
        z-index: 2;
    }

    /* Form Control Styling */
    .contact-form-wrapper .form-control {
        background-color: rgba(15, 22, 33, 0.9);  /*Dark background */
        border: 1px solid #de8929ff; /* Blue border */
        color: white;
        box-shadow: inset 0 1px 2px rgba(242, 242, 242, 0.39);
        transition: all 0.3s ease;
        padding: 0.75rem 1rem; /* Adjust padding */
    }

    .contact-form-wrapper .form-control::placeholder {
        color: #999898ff; /* Light blue placeholder */
    }

    .contact-form-wrapper .form-control:focus {
        background-color: #1e293b;
        border-color: #e78312ff;
        box-shadow: 0 0 0 .25rem rgba(143, 141, 89, 0.29);
    }

    /* Custom Gradient Button */
    .btn-space-gradient {
        font-size: 1.1rem;
  background: linear-gradient(45deg, #f59e0b, #ffb347);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  color: #0f172a;
  padding: 0.8em 1.5em;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 15px #f59e0b, 0 0 30px #ffb347 inset;
    }

    .btn-space-gradient:hover:not(:disabled) {
         background: #d97706;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0 0 25px #f59e0b, 0 0 40px #ffb347 inset;
    }
    
    .status-message {
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        margin-top: 1rem;
    }
    .status-success {
        background-color: rgba(67, 182, 114, 0.2);
        border: 1px solid #43b672;
        color: #43b672;
    }
    .status-danger {
        background-color: rgba(248, 113, 113, 0.2);
        border: 1px solid #f87171;
        color: #f87171;
    }
  `;

  return (
    <>
      {/* Inject custom styles into the DOM for Bootstrap aesthetic adjustments */}
      <style>{customStyles}</style>

      <section id="contact" className="contact-section py-5 py-md-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">

            {/* Contact Image (Desktop Only: d-none on mobile, d-md-block on medium and up) */}
            <div className="col-12 col-md-6 d-none d-md-block">
              <img
                src={bannerImg}
                alt="Sanjana Maharana professional portrait"
                className="img-fluid rounded-3 shadow-lg transition duration-500"
                loading="lazy"
                style={{ transition: 'transform 0.5s ease', transform: 'scale(1.05)' }}
              />
            </div>

            {/* Contact Form Container */}
            <div className="col-12 col-md-6">
              <div className="contact-form-wrapper">
                
                <div className="form-content">
                  <h2 className="display-5 fw-bold mb-4 text-center text-md-start text-accent-orange">
                    Get In Touch
                  </h2>

                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="form-control"
                      />
                      <ValidationError field="email" errors={state.errors} />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                        className="form-control"
                        style={{ resize: 'none' }}
                      ></textarea>
                      <ValidationError field="message" errors={state.errors} />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn btn-space-gradient w-100 text-center"
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>

                  {/* Success / Error Messages */}
                  {state.succeeded && (
                    <div className="status-message status-success">
                      ✅ Thanks for your message! I’ll get back to you soon.
                    </div>
                  )}

                  {state.errors && state.errors.length > 0 && (
                    <div className="status-message status-danger">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
