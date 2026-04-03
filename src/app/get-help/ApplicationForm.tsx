"use client";

import { useState } from "react";

const CONCERNS = [
  "Depression",
  "Anxiety",
  "Postpartum depression or anxiety",
  "Grief or loss",
  "Trauma or PTSD",
  "Family conflict",
  "Relationship challenges",
  "Parenting stress",
  "Child behavioral issues",
  "Substance use",
  "Other",
];

const inputClass =
  "w-full px-4 py-3 border-2 border-light-warm rounded focus:outline-none focus:border-terracotta transition-colors bg-white text-deep-brown";
const labelClass = "block mb-1.5 font-semibold text-deep-brown text-sm";
const requiredStar = <span className="text-terracotta ml-0.5">*</span>;

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    // Step 1: Personal Info
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    preferredContact: "Email",
    // Step 2: Address & Household
    address: "",
    city: "",
    state: "TX",
    zip: "",
    county: "",
    householdSize: "",
    income: "",
    employment: "",
    insurance: "",
    // Step 3: Applicant Details
    applicantType: "",
    childName: "",
    childAge: "",
    relationship: "",
    // Step 4: Mental Health Needs
    concerns: [] as string[],
    otherConcern: "",
    inCrisis: "",
    previousTherapy: "",
    description: "",
    // Step 5: Preferences & Consent
    genderPref: "",
    languagePref: "",
    culturalPref: "",
    referralSource: "",
    additionalInfo: "",
    consentTruthful: false,
    consentContact: false,
    consentConfidential: false,
  });

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const toggleConcern = (concern: string) => {
    setForm((f) => ({
      ...f,
      concerns: f.concerns.includes(concern)
        ? f.concerns.filter((c) => c !== concern)
        : [...f.concerns, concern],
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-12 shadow-sm text-center">
        <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-deep-brown mb-4">
          Application Received
        </h3>
        <p className="text-warm-gray leading-relaxed mb-4">
          Thank you for applying for the Care Scholarship. Our team will review
          your application and contact you within 5–7 business days.
        </p>
        <p className="text-warm-gray text-sm">
          A confirmation has been sent to{" "}
          <strong className="text-deep-brown">{form.email || "your email"}</strong>.
          If you have questions in the meantime, please contact us at{" "}
          <a
            href="mailto:apply@goodandplentyfoundation.org"
            className="text-terracotta hover:text-terracotta-dark"
          >
            apply@goodandplentyfoundation.org
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-light-warm p-6">
        <div className="flex justify-between items-center max-w-lg mx-auto">
          {["Personal Info", "Household", "Details", "Needs", "Review"].map(
            (label, i) => (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    i + 1 <= step
                      ? "bg-terracotta text-white"
                      : "bg-white text-warm-gray border-2 border-light-warm"
                  }`}
                >
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                <span className="text-xs text-warm-gray mt-1 hidden sm:block">
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="p-8 md:p-10">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-deep-brown mb-6">
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  First Name {requiredStar}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={update}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Last Name {requiredStar}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={update}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass}>
                Date of Birth {requiredStar}
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={update}
                required
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div>
                <label className={labelClass}>
                  Email Address {requiredStar}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Phone Number {requiredStar}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  required
                  placeholder="(xxx) xxx-xxxx"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass}>Preferred Contact Method</label>
              <select
                name="preferredContact"
                value={form.preferredContact}
                onChange={update}
                className={inputClass}
              >
                <option>Email</option>
                <option>Phone</option>
                <option>Text</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Address & Household */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-deep-brown mb-6">
              Address &amp; Household Information
            </h3>

            <div className="mb-5">
              <label className={labelClass}>
                Street Address {requiredStar}
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={update}
                required
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>City {requiredStar}</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={update}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={update}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>ZIP Code {requiredStar}</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={update}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass}>County {requiredStar}</label>
              <select
                name="county"
                value={form.county}
                onChange={update}
                required
                className={inputClass}
              >
                <option value="">Select your county</option>
                <option value="Fort Bend County">Fort Bend County</option>
                <option value="Harris County">Harris County</option>
                <option value="Other">Other (may affect eligibility)</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div>
                <label className={labelClass}>
                  Household Size {requiredStar}
                </label>
                <select
                  name="householdSize"
                  value={form.householdSize}
                  onChange={update}
                  required
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8+</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Annual Household Income {requiredStar}
                </label>
                <select
                  name="income"
                  value={form.income}
                  onChange={update}
                  required
                  className={inputClass}
                >
                  <option value="">Select range</option>
                  <option>Under $20,000</option>
                  <option>$20,000 – $30,000</option>
                  <option>$30,000 – $40,000</option>
                  <option>$40,000 – $50,000</option>
                  <option>$50,000 – $60,000</option>
                  <option>$60,000 – $75,000</option>
                  <option>Over $75,000</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div>
                <label className={labelClass}>Employment Status</label>
                <select
                  name="employment"
                  value={form.employment}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>Employed full-time</option>
                  <option>Employed part-time</option>
                  <option>Self-employed</option>
                  <option>Unemployed</option>
                  <option>Stay-at-home parent</option>
                  <option>Student</option>
                  <option>Disabled / Unable to work</option>
                  <option>Retired</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Insurance Status</label>
                <select
                  name="insurance"
                  value={form.insurance}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>No insurance</option>
                  <option>Medicaid / CHIP</option>
                  <option>Medicare</option>
                  <option>Employer-provided insurance</option>
                  <option>Marketplace / ACA plan</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Applicant Details */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold text-deep-brown mb-6">
              Who Is This Application For?
            </h3>

            <div className="mb-5">
              <label className={labelClass}>
                I am applying for {requiredStar}
              </label>
              <select
                name="applicantType"
                value={form.applicantType}
                onChange={update}
                required
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Myself">Myself</option>
                <option value="My child (under 18)">
                  My child (under 18)
                </option>
                <option value="Myself and my child">
                  Myself and my child
                </option>
                <option value="My family (couples/family therapy)">
                  My family (couples/family therapy)
                </option>
              </select>
            </div>

            {(form.applicantType === "My child (under 18)" ||
              form.applicantType === "Myself and my child") && (
              <div className="bg-light-warm rounded-lg p-6 mb-5">
                <h4 className="font-semibold text-deep-brown mb-4">
                  Child / Youth Information
                </h4>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Child&apos;s Name {requiredStar}
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={update}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Child&apos;s Age {requiredStar}
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      value={form.childAge}
                      onChange={update}
                      required
                      min="0"
                      max="18"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className={labelClass}>
                    Your Relationship to Child
                  </label>
                  <select
                    name="relationship"
                    value={form.relationship}
                    onChange={update}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option>Parent</option>
                    <option>Legal Guardian</option>
                    <option>Grandparent</option>
                    <option>Foster Parent</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-5">
              <label className={labelClass}>
                Are you a postpartum mother (gave birth within the last 12
                months)?
              </label>
              <select
                name="postpartum"
                onChange={update}
                className={inputClass}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
                <option>Currently pregnant</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Mental Health Needs */}
        {step === 4 && (
          <div>
            <h3 className="text-xl font-bold text-deep-brown mb-6">
              Mental Health Needs
            </h3>

            <div className="mb-6">
              <label className={labelClass}>
                What are your primary concerns? (select all that apply){" "}
                {requiredStar}
              </label>
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                {CONCERNS.map((concern) => (
                  <label
                    key={concern}
                    className={`flex items-center gap-3 p-3 rounded border-2 cursor-pointer transition-colors ${
                      form.concerns.includes(concern)
                        ? "border-terracotta bg-terracotta/5"
                        : "border-light-warm bg-white hover:border-terracotta/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.concerns.includes(concern)}
                      onChange={() => toggleConcern(concern)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center text-xs flex-shrink-0 ${
                        form.concerns.includes(concern)
                          ? "bg-terracotta border-terracotta text-white"
                          : "border-warm-gray"
                      }`}
                    >
                      {form.concerns.includes(concern) && "✓"}
                    </span>
                    <span className="text-sm text-deep-brown">{concern}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.concerns.includes("Other") && (
              <div className="mb-5">
                <label className={labelClass}>Please describe</label>
                <input
                  type="text"
                  name="otherConcern"
                  value={form.otherConcern}
                  onChange={update}
                  className={inputClass}
                />
              </div>
            )}

            <div className="mb-5">
              <label className={labelClass}>
                Please briefly describe what you&apos;re going through and what
                kind of support you&apos;re looking for {requiredStar}
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={update}
                required
                rows={4}
                placeholder="Take your time. There are no wrong answers."
                className={inputClass + " min-h-[120px]"}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  Are you currently in crisis or having thoughts of self-harm?{" "}
                  {requiredStar}
                </label>
                <select
                  name="inCrisis"
                  value={form.inCrisis}
                  onChange={update}
                  required
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>No</option>
                  <option>Yes — I am safe but need support soon</option>
                  <option>Yes — I need immediate help</option>
                </select>
                {form.inCrisis === "Yes — I need immediate help" && (
                  <div className="mt-3 bg-terracotta-light text-white p-4 rounded text-sm">
                    <strong>Please reach out now:</strong> Call{" "}
                    <strong>988</strong> (Suicide &amp; Crisis Lifeline) or text{" "}
                    <strong>HOME to 741741</strong>. If you are in danger, call{" "}
                    <strong>911</strong>.
                  </div>
                )}
              </div>
              <div>
                <label className={labelClass}>
                  Have you received therapy before?
                </label>
                <select
                  name="previousTherapy"
                  value={form.previousTherapy}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>No, this would be my first time</option>
                  <option>Yes, but it has been a while</option>
                  <option>Yes, I recently stopped</option>
                  <option>Yes, I am currently in therapy but cannot afford to continue</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Preferences & Review */}
        {step === 5 && (
          <div>
            <h3 className="text-xl font-bold text-deep-brown mb-6">
              Therapist Preferences &amp; Final Details
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  Therapist Gender Preference
                </label>
                <select
                  name="genderPref"
                  value={form.genderPref}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">No preference</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Preferred Language for Sessions
                </label>
                <select
                  name="languagePref"
                  value={form.languagePref}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">English</option>
                  <option>Spanish</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass}>
                Any cultural or religious considerations we should know about?
              </label>
              <input
                type="text"
                name="culturalPref"
                value={form.culturalPref}
                onChange={update}
                placeholder="Optional"
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label className={labelClass}>
                How did you hear about us?
              </label>
              <select
                name="referralSource"
                value={form.referralSource}
                onChange={update}
                className={inputClass}
              >
                <option value="">Select</option>
                <option>Social media</option>
                <option>Friend or family member</option>
                <option>Healthcare provider</option>
                <option>School or community organization</option>
                <option>Church or faith community</option>
                <option>Google search</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label className={labelClass}>
                Anything else you&apos;d like us to know?
              </label>
              <textarea
                name="additionalInfo"
                value={form.additionalInfo}
                onChange={update}
                rows={3}
                placeholder="Optional — share anything that might help us serve you better."
                className={inputClass + " min-h-[100px]"}
              />
            </div>

            {/* Consent */}
            <div className="mt-8 bg-light-warm rounded-lg p-6">
              <h4 className="font-bold text-deep-brown mb-4">
                Consent &amp; Agreements {requiredStar}
              </h4>
              <label className="flex items-start gap-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="consentTruthful"
                  checked={form.consentTruthful}
                  onChange={update}
                  required
                  className="mt-1 accent-terracotta"
                />
                <span className="text-sm text-warm-gray">
                  I certify that the information provided in this application is
                  true and accurate to the best of my knowledge.
                </span>
              </label>
              <label className="flex items-start gap-3 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="consentContact"
                  checked={form.consentContact}
                  onChange={update}
                  required
                  className="mt-1 accent-terracotta"
                />
                <span className="text-sm text-warm-gray">
                  I consent to the G&amp;P Foundation for Wellness contacting me
                  via the method I selected to discuss my application and care
                  options.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consentConfidential"
                  checked={form.consentConfidential}
                  onChange={update}
                  required
                  className="mt-1 accent-terracotta"
                />
                <span className="text-sm text-warm-gray">
                  I understand that my information will be kept confidential and
                  shared only with licensed clinical staff involved in my care.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-light-warm">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="text-warm-gray font-semibold hover:text-deep-brown transition-colors cursor-pointer"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-terracotta text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors cursor-pointer"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                submitting ||
                !form.consentTruthful ||
                !form.consentContact ||
                !form.consentConfidential
              }
              className="bg-terracotta text-white px-10 py-3.5 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
