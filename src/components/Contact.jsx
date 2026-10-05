import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-ink-950">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center text-white">
          Contact Me
        </h2>

        <p className="text-center text-white/50 mt-2">
          Let’s Build Something Meaningful Together
        </p>

        <form onSubmit={sendEmail} className="mt-10 card p-6 space-y-5">
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold p-3 rounded-lg"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;