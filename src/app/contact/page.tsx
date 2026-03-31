"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We&apos;d love to hear from you."
      />

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Visit Us */}
            <div className="text-center p-8">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-terracotta">
                📍
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">Visit Us</h3>
              <p className="text-warm-gray">Missouri City, Texas 77459</p>
            </div>

            {/* Email Us */}
            <div className="text-center p-8">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-terracotta">
                ✉
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">Email Us</h3>
              <p className="text-warm-gray">
                <a
                  href="mailto:info@gpfoundationforwellness.org"
                  className="text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  info@gpfoundationforwellness.org
                </a>
              </p>
            </div>

            {/* Office Hours */}
            <div className="text-center p-8">
              <div className="w-14 h-14 bg-sage-light rounded-full flex items-center justify-center text-2xl mx-auto mb-4 text-terracotta">
                🕐
              </div>
              <h3 className="text-lg font-bold text-deep-brown mb-2">Office Hours</h3>
              <p className="text-warm-gray">Mon&ndash;Fri: 9AM&ndash;5PM CST</p>
              <p className="text-warm-gray">Sat: By appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            Send Us a Message
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10"></div>

          {submitted && (
            <div className="bg-sage-light text-deep-brown p-4 rounded mb-6 text-center font-semibold">
              Thank you! We&apos;ll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-1.5 font-semibold text-deep-brown text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-1.5 font-semibold text-deep-brown text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-1.5 font-semibold text-deep-brown text-sm"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
              />
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block mb-1.5 font-semibold text-deep-brown text-sm"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
              >
                <option>General Inquiry</option>
                <option>Care Scholarship Application</option>
                <option>Volunteer</option>
                <option>Partnership</option>
                <option>Media/Press</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-1.5 font-semibold text-deep-brown text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white min-h-[150px]"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-terracotta text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors cursor-pointer"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Hours Table */}
      <section className="py-20">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-2">
            Office Hours
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10"></div>

          <table className="w-full">
            <tbody>
              <tr className="border-b border-light-warm">
                <td className="py-4 font-semibold text-deep-brown">
                  Monday &ndash; Friday
                </td>
                <td className="py-4 text-warm-gray text-right">
                  9:00 AM &ndash; 5:00 PM CST
                </td>
              </tr>
              <tr className="border-b border-light-warm">
                <td className="py-4 font-semibold text-deep-brown">Saturday</td>
                <td className="py-4 text-warm-gray text-right">By appointment</td>
              </tr>
              <tr>
                <td className="py-4 font-semibold text-deep-brown">Sunday</td>
                <td className="py-4 text-warm-gray text-right">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
