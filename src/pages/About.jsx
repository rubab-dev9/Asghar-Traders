import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuHandshake,
  LuPackage,
  LuShoppingCart,
  LuStore,
} from "react-icons/lu";
import ScrollReveal from "../components/ScrollReveal";

const values = [
  {
    icon: LuPackage,
    title: "Wholesale Focus",
    description:
      "Our website and product offering are designed around the needs of wholesale buyers and retailers.",
  },
  {
    icon: LuHandshake,
    title: "Customer Focus",
    description:
      "We believe in making product inquiries and communication straightforward for our customers.",
  },
  {
    icon: LuShoppingCart,
    title: "Everyday Essentials",
    description:
      "The business focuses on grocery categories that are relevant to everyday retail and household needs.",
  },
];

const reasons = [
  "Wholesale-oriented grocery selection",
  "Convenient product category browsing",
  "Direct contact for inquiries",
  "Business location in Bahawalpur",
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-semibold text-sky-400">About Us</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A wholesale grocery business serving Bahawalpur
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Get to know Asghar Traders & Wholesale and what we offer to
              wholesale buyers, retailers and businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main About */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="font-semibold text-sky-700">Who We Are</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Asghar Traders & Wholesale
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Asghar Traders & Wholesale is a grocery wholesale business
                  based in the Old City area of Bahawalpur, Punjab.
                </p>

                <p>
                  The business provides grocery products for wholesale
                  requirements, serving customers who need everyday grocery
                  products for retail and business purposes.
                </p>

                <p>
                  Our goal with this website is to make it easier for customers
                  to explore available product categories and get in touch for
                  wholesale inquiries.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link
                to="/products"
                className="mt-8 inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
              >
                Explore Products
                <LuArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Business Card */}
          <ScrollReveal direction="right" delay={150}>
            <div className="rounded-3xl bg-sky-50 p-6 transition-all duration-500 hover:shadow-lg sm:p-10">
              <div className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100">
                  <LuStore className="h-7 w-7 text-sky-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Wholesale Grocery
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  A practical grocery wholesale business based in Bahawalpur,
                  focused on everyday product categories and direct customer
                  communication.
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-medium text-slate-500">
                    Business Location
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Old City, Bahawalpur
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold text-sky-700">What We Offer</p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Simple, practical wholesale grocery solutions
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Our product categories are built around common grocery
                requirements for wholesale buyers and retailers.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <ScrollReveal key={value.title} delay={index * 120}>
                  <div className="group h-full rounded-2xl border border-sky-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 transition-colors duration-300 group-hover:bg-sky-200">
                      <Icon className="h-6 w-6 text-sky-700" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <ScrollReveal>
              <div>
                <p className="font-semibold text-sky-700">Why Choose Us</p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Focused on what wholesale customers need
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  We keep the customer experience simple: explore grocery
                  categories, identify what you need and contact the business
                  directly for availability and wholesale details.
                </p>
              </div>
            </ScrollReveal>

            {/* Reasons */}
            <div className="space-y-4">
              {reasons.map((item, index) => (
                <ScrollReveal
                  key={item}
                  delay={index * 100}
                  direction="right"
                >
                  <div className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-x-1 hover:border-sky-200 hover:bg-sky-50/50 hover:shadow-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1 font-medium text-slate-800">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sky-700 py-16 sm:py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-sky-300/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a wholesale inquiry?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mt-4 leading-7 text-sky-100">
              Contact Asghar Traders & Wholesale to discuss your grocery
              requirements.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-7 py-3.5 font-semibold text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-lg"
            >
              Contact Us
              <LuArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default About;