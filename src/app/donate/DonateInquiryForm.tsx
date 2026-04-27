"use client";

import { useState } from "react";

const giftTypes = [
  "One-time gift",
  "Recurring gift",
  "Corporate sponsorship",
  "Foundation grant",
  "Donor-advised fund (DAF)",
  "Stock or securities",
  "Planned gift / bequest",
  "Other",
];

const amountRanges = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000+",
  "Prefer not to say",
];

export default function DonateInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    giftType: giftTypes[0],
    amountRange: amountRanges[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Major Gift Inquiry — ${formData.giftType}`,
        message: [
          `Gift type: ${formData.giftType}`,
          `Estimated amount: ${formData.amountRange}`,
          formData.organization ? `Organization: ${formData.organization}` : null,
          "",
          formData.message,
        ]
          .filter((line) => line !== null)
          .join("\n"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        giftType: giftTypes[0],
        amountRange: amountRanges[0],
        message: "",
      });
    } catch {
      setError(
        "Something went wrong sending your message. Please email info@gpfoundationforwellness.org directly."
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-sage-light border border-sage rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-deep-brown mb-2">
          Thank you for reaching out.
        </h3>
        <p className="text-deep-brown/80">
          A member of our development team will follow up within two business days
          to discuss your gift.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-terracotta/10 border border-terracotta text-deep-brown p-4 rounded text-sm">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
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

        <div>
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
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block mb-1.5 font-semibold text-deep-brown text-sm"
          >
            Phone <span className="font-normal text-warm-gray">(optional)</span>
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

        <div>
          <label
            htmlFor="organization"
            className="block mb-1.5 font-semibold text-deep-brown text-sm"
          >
            Organization{" "}
            <span className="font-normal text-warm-gray">(optional)</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="giftType"
            className="block mb-1.5 font-semibold text-deep-brown text-sm"
          >
            Gift type
          </label>
          <select
            id="giftType"
            name="giftType"
            value={formData.giftType}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
          >
            {giftTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="amountRange"
            className="block mb-1.5 font-semibold text-deep-brown text-sm"
          >
            Estimated amount
          </label>
          <select
            id="amountRange"
            name="amountRange"
            value={formData.amountRange}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white"
          >
            {amountRanges.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-1.5 font-semibold text-deep-brown text-sm"
        >
          Tell us about your gift
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Programs you'd like to support, timing, questions about tax receipts, matching gifts, or anything else we should know."
          className="w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white min-h-[150px]"
        />
      </div>

      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={sending}
          className="bg-terracotta text-white px-10 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Start the Conversation"}
        </button>
      </div>
    </form>
  );
}
