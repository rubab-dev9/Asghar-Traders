import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuBean,
  LuCheck,
  LuMessageCircle,
  LuPackage,
  LuSalad,
  LuShoppingBag,
  LuShoppingCart,
  LuWheat,
} from "react-icons/lu";

import riceImg from "../assets/rice.png";
import wheatImg from "../assets/wheat.png";
import daalImg from "../assets/daal.png";
import oilImg from "../assets/oil.png";

import ScrollReveal from "../components/ScrollReveal";

// DATA
const heroCategories = [
  {
    icon: LuWheat,
    label: "Rice & Grains",
  },
  {
    icon: LuBean,
    label: "Pulses & Daal",
  },
  {
    icon: LuShoppingCart,
    label: "Grocery Essentials",
  },
  {
    icon: LuSalad,
    label: "Spices",
  },
];

const highlights = [
  {
    title: "Wholesale Focus",
    description:
      "Focused on supplying grocery products for retailers and businesses.",
    icon: LuPackage,
  },
  {
    title: "Wide Product Range",
    description:
      "A practical range of everyday grocery categories under one roof.",
    icon: LuShoppingBag,
  },
  {
    title: "Easy Inquiry",
    description:
      "Get in touch directly for product availability and wholesale details.",
    icon: LuMessageCircle,
  },
];

const categories = [
  {
    title: "Rice & Grains",
    description:
      "Everyday grains and rice varieties for retailers and businesses.",
    icon: LuWheat,
  },
  {
    title: "Pulses & Daal",
    description:
      "Essential pulses and lentils for wholesale grocery requirements.",
    icon: LuBean,
  },
  {
    title: "Cooking Essentials",
    description:
      "Cooking oils, ghee, sugar, salt and other daily-use essentials.",
    icon: LuShoppingCart,
  },
  {
    title: "Spices",
    description:
      "Common spices and seasoning products for everyday cooking needs.",
    icon: LuSalad,
  },
];

const featuredProducts = [
  {
    name: "Rice & Basmati",
    description:
      "Quality rice varieties suitable for retail and wholesale requirements.",
    image: riceImg,
  },
  {
    name: "Wheat & Grains",
    description:
      "Everyday grains for households, retailers and business customers.",
    image: wheatImg,
  },
  {
    name: "Daal & Lentils",
    description:
      "Essential pulses and lentils for everyday grocery needs.",
    image: daalImg,
  },
  {
    name: "Cooking Essentials",
    description:
      "Daily-use cooking products including oils, ghee and other essentials.",
    image: oilImg,
  },
];

const aboutPoints = [
  {
    number: "01",
    text: "Wholesale focused",
  },
  {
    number: "02",
    text: "Grocery categories",
  },
  {
    number: "03",
    text: "Direct communication",
  },
  {
    number: "04",
    text: "Bahawalpur based",
  },
];

function Home() {
  return (
    <>
      {/* HERO*/}
      <section
        id="home"
        className="relative overflow-hidden bg-slate-950"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-800 bg-sky-950/50 px-4 py-2 text-sm text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Wholesale Grocery Supplier
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Quality Grocery Products for{" "}
                <span className="text-sky-400">Wholesale Needs</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Asghar Traders & Wholesale provides grocery products for
                retailers, businesses and wholesale buyers in Bahawalpur.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:shadow-lg"
                >
                  Explore Products
                  <LuArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-700 hover:bg-slate-800"
                >
                  Contact Us
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <LuCheck className="h-4 w-4 text-sky-400" />
                  Wholesale focused
                </span>

                <span className="flex items-center gap-2">
                  <LuCheck className="h-4 w-4 text-sky-400" />
                  Everyday grocery essentials
                </span>

                <span className="flex items-center gap-2">
                  <LuCheck className="h-4 w-4 text-sky-400" />
                  Direct inquiries
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Visual */}
          <ScrollReveal direction="right" delay={200}>
            <div className="hidden lg:block">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-8 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    {heroCategories.map(({ icon: Icon, label }, index) => (
                      <ScrollReveal key={label} delay={300 + index * 100}>
                        <div className="flex h-46 flex-col items-center justify-center rounded-2xl bg-slate-800 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700">                          
                          <Icon className="h-12 w-12 text-sky-400" />
                          <span className="mt-3 text-sm font-medium text-slate-300">
                            {label}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-sky-600 p-5">
                    <p className="text-sm font-medium text-sky-100">
                      Wholesale Grocery
                    </p>

                    <p className="mt-1 text-xl font-bold text-white">
                      Reliable & Convenient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HIGHLIGHTS*/}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold text-sky-700">
                Why Asghar Traders
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Built around wholesale grocery needs
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A straightforward wholesale grocery experience focused on
                everyday products and easy communication.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title} delay={index * 120}>
                  <div className="h-full rounded-2xl border border-sky-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 transition-colors duration-300 hover:bg-sky-100">
                      <Icon className="h-6 w-6 text-sky-700" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES*/}
      <section
        id="products"
        className="bg-sky-50/60 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-semibold text-sky-700">
                  Our Categories
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Everyday grocery essentials
                </h2>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center font-semibold text-sky-700 transition hover:translate-x-1 hover:text-sky-800"
              >
                View all products
                <LuArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <ScrollReveal key={category.title} delay={index * 100}>
                  <div className="h-full rounded-2xl border border-sky-100 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-lg">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50">
                      <Icon className="h-7 w-7 text-sky-700" />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold text-sky-700">
                Featured Products
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Popular grocery essentials
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore some of the grocery categories available for wholesale
                requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <ScrollReveal key={product.name} delay={index * 100}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl">

                    {/* Product Image / Icon */}
                    <div className="flex h-48 items-center justify-center overflow-hidden bg-sky-50">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <Icon className="h-20 w-20 text-sky-600 transition-transform duration-500 group-hover:scale-110" />
                      )}
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        {product.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>

                      <Link
                        to="/products"
                        className="mt-5 inline-flex items-center font-semibold text-sky-700 transition hover:translate-x-1 hover:text-sky-800"
                      >
                        View Product
                        <LuArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
              >
                Explore All Products
                <LuArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT BUSINESS*/}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ScrollReveal direction="left">
            <div className="rounded-3xl bg-sky-950 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aboutPoints.map((point, index) => (
                  <ScrollReveal key={point.number} delay={index * 100}>
                    <div
                      className="
                      flex min-h-32 flex-col justify-center
                      rounded-2xl bg-white/10 p-5
                      transition-all duration-300
                      hover:-translate-y-1
                       hover:bg-white/15
                       "
                    >
                      <p className="text-3xl font-bold text-sky-300">
                        {point.number}
                      </p>

                      <p className="mt-2 text-sm leading-5 text-sky-100/80">
                        {point.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <p className="font-semibold text-sky-700">
                About the Business
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Your wholesale grocery partner
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Asghar Traders & Wholesale is a grocery wholesale business
                based in the Old City area of Bahawalpur. The business focuses
                on supplying everyday grocery products for wholesale buyers,
                retailers and businesses.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Whether you are looking for grocery essentials or want to
                discuss wholesale availability, you can get in touch directly
                with the business.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center font-semibold text-sky-700 transition hover:translate-x-1 hover:text-sky-800"
              >
                Learn more about us
                <LuArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA*/}
      <section
        id="contact"
        className="relative overflow-hidden bg-sky-700"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-sky-300/10 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Looking for wholesale grocery products?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-100">
              Explore our product categories or contact us directly for
              wholesale inquiries and availability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-white px-7 py-3.5 font-semibold text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-lg"
            >
              Get in Touch
              <LuArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;