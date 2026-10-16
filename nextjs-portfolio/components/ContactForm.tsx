"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  // Same behaviour as the static site: no backend yet, just confirm and reset.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    e.currentTarget.reset();
  }

  return (
    <form id="contact-form" className="hx-form" onSubmit={handleSubmit}>
      <h3>Send a message</h3>
      <p>Fill in the form and I&apos;ll be in touch soon.</p>
      <div className="hx-form-row">
        <div className="hx-field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" required placeholder="John Doe" />
        </div>
        <div className="hx-field">
          <label htmlFor="cf-email">Your email</label>
          <input id="cf-email" name="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>
      <div className="hx-field">
        <label htmlFor="cf-subject">Subject</label>
        <input id="cf-subject" name="subject" type="text" placeholder="Project enquiry" />
      </div>
      <div className="hx-field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={5} required placeholder="Tell me a little about your project..." />
      </div>
      <button type="submit">Send message <span>↗</span></button>
    </form>
  );
}
