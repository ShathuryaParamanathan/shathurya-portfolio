import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-ink-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Contact Me
        </h2>

        <p className="text-center text-white/50 mt-2">
          Let’s build something meaningful together
        </p>

        {/* Form */}
        <form className="mt-10 card p-6 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white focus:outline-none focus:border-brand-500 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white focus:outline-none focus:border-brand-500 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-ink-800 border border-white/10 text-white focus:outline-none focus:border-brand-500 transition"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold p-3 rounded-lg transition shadow-glow"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;