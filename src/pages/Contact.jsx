import { useState } from "react";
import {
  LuArrowRight,
  LuCircleCheck,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
  LuSend,
} from "react-icons/lu";
import ScrollReveal from "../components/ScrollReveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappMessage = `
Assalam o Alaikum,

I have a wholesale inquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

Message:
${formData.message}
  `.trim();

    const whatsappUrl = `https://wa.me/923024490490?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-semibold text-sky-400">Contact Us</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let's discuss your wholesale requirements
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a question about products or wholesale availability? Get in
              touch with Asghar Traders & Wholesale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:items-start lg:px-8">
          {/* Contact Information */}
          <ScrollReveal className="lg:col-span-2">
            <div>
              <p className="font-semibold text-sky-700">Get In Touch</p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                We are here to help
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Contact us for wholesale product inquiries, availability and
                other business-related questions.
              </p>

              <div className="mt-8 space-y-4">
                {/* Location */}
                <ScrollReveal delay={100}>
                  <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                      <LuMapPin className="h-5 w-5 text-sky-700" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">Location</p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Jubilee Hospital Road, Fatah Khan Bazar, Old City,
                        Bahawalpur, 63100, Pakistan
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Phone */}
                <ScrollReveal delay={200}>
                  <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                      <LuPhone className="h-5 w-5 text-sky-700" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>

                      <a
                        href="tel:+923024490490"
                        className="mt-1 block text-sm text-slate-600 transition hover:text-sky-700"
                      >
                        +92 302 4490490
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* WhatsApp */}
                <ScrollReveal delay={300}>
                  <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                      <LuMessageCircle className="h-5 w-5 text-sky-700" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">WhatsApp</p>

                      <p className="mt-1 text-sm text-slate-600">
                        +92 302 4490490
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Available for product inquiries
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <a
                  href="https://wa.me/923024490490"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
                >
                  <LuMessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                  <LuSend className="h-5 w-5 text-sky-700" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Get in Touch
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    Fill out the form and we'll get back to you.
                  </p>
                </div>
              </div>

              {submitted && (
                <ScrollReveal>
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800">
                    <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />

                    <div>
                      <p className="font-semibold">Inquiry ready</p>

                      <p className="mt-1">
                        Your inquiry has been opened in WhatsApp. Please send the message to
                        complete your inquiry.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <ScrollReveal delay={100}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03XX XXXXXXX"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Email */}
                <ScrollReveal delay={200}>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email
                      <span className="ml-1 font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>
                </ScrollReveal>

                {/* Message */}
                <ScrollReveal delay={300}>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what products or information you need..."
                      className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
                  >
                    <LuSend className="h-5 w-5" />
                    Send Inquiry
                  </button>
                </ScrollReveal>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8">
              <p className="font-semibold text-sky-700">Find Us</p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Our Location
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                Asghar Traders & Wholesale is located in the Old City area of
                Bahawalpur.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-500 hover:shadow-lg">
              <iframe
                title="Asghar Traders & Wholesale Location"
                src="https://www.google.com/maps?q=29.3940766,71.677847&z=17&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl border border-sky-100 bg-white p-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold text-slate-900">
                  Asghar Traders & Wholesale
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Jubilee Hospital Road, Fatah Khan Bazar, Old City,
                  Bahawalpur, 63100, Pakistan
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Asghar+Traders+%26+Wholesale/@29.3940766,71.6752721,17z"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-md"
              >
                Open in Google Maps
                <LuArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Contact;