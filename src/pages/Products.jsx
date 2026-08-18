import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuArrowLeft,
  LuArrowRight,
  LuMessageCircle,
  LuSearch,
} from "react-icons/lu";

import ScrollReveal from "../components/ScrollReveal";
import { products, categories } from "../data/products";

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // Filter products
  const filteredProducts = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Change category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Search
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  // Previous page
  const handlePrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  // Next page
  const handleNext = () => {
    setCurrentPage((page) =>
      Math.min(page + 1, totalPages)
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        {/* Decorative background */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-semibold text-sky-400">
                Our Products
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Grocery categories for{" "}
                <span className="text-sky-400">
                  wholesale needs
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Explore our grocery categories and contact us
                for product availability, wholesale details and
                inquiries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Search Header */}
          <ScrollReveal>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-semibold text-sky-700">
                  Browse Collection
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Product Categories
                </h2>

                <p className="mt-2 text-slate-600">
                  Browse the available grocery categories.
                </p>
              </div>

              {/* Search */}
              <div className="w-full lg:max-w-sm">
                <div className="relative">
                  <LuSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearchChange}
                    className="
                      w-full rounded-xl border border-slate-200
                      bg-white py-3.5 pl-11 pr-4 text-sm
                      text-slate-900 outline-none
                      transition-all duration-300
                      placeholder:text-slate-400
                      hover:border-sky-300
                      focus:border-sky-500
                      focus:ring-4 focus:ring-sky-100
                    "
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`
                    whitespace-nowrap rounded-full
                    px-5 py-2.5 text-sm font-medium
                    transition-all duration-300
                    ${
                      activeCategory === category
                        ? "bg-sky-600 text-white shadow-md shadow-sky-200"
                        : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Count */}
          {filteredProducts.length > 0 && (
            <ScrollReveal delay={150}>
              <div className="mt-8 text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {startIndex + 1}
                </span>
                {" - "}
                <span className="font-semibold text-slate-700">
                  {Math.min(
                    startIndex + productsPerPage,
                    filteredProducts.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {filteredProducts.length}
                </span>{" "}
                products
              </div>
            </ScrollReveal>
          )}

          {/* Products Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product, index) => (
                  <ScrollReveal
                    key={product.id}
                    delay={index * 100}
                  >
                    <div
                      className="
                        group h-full overflow-hidden rounded-2xl
                        border border-slate-200 bg-white
                        transition-all duration-500
                        hover:-translate-y-2
                        hover:border-sky-200
                        hover:shadow-xl hover:shadow-sky-100
                      "
                    >
                      {/* Product Image */}
                      <div className="flex h-52 items-center justify-center overflow-hidden bg-slate-100 transition-colors duration-500 group-hover:bg-sky-50">
                        <img
                          src={product.icon}
                          alt={product.name}
                          className="
                            h-full w-full object-cover
                            transition-transform duration-500
                            ease-out
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* Product Content */}
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                          {product.category}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                          {product.name}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {product.description}
                        </p>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/923024490490?text=${encodeURIComponent(
                            `Assalam o Alaikum, I am interested in ${product.name}. Please share wholesale details and availability.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            mt-6 inline-flex w-full items-center
                            justify-center gap-2 rounded-lg
                            bg-sky-600 px-4 py-3
                            font-semibold text-white
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-sky-700
                            hover:shadow-lg hover:shadow-sky-100
                          "
                        >
                          <LuMessageCircle className="h-5 w-5" />

                          WhatsApp Us

                          <LuArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <ScrollReveal delay={100}>
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

                    {/* Previous */}
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                      className="
                        inline-flex items-center gap-2
                        rounded-lg border border-slate-200
                        bg-white px-4 py-2.5
                        text-sm font-medium text-slate-600
                        transition-all duration-300
                        hover:border-sky-200
                        hover:bg-sky-50
                        hover:text-sky-700
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                    >
                      <LuArrowLeft className="h-4 w-4" />

                      Previous
                    </button>

                    {/* Page Numbers */}
                    {Array.from(
                      { length: totalPages },
                      (_, index) => {
                        const page = index + 1;

                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() =>
                              setCurrentPage(page)
                            }
                            className={`
                              flex h-10 w-10 items-center
                              justify-center rounded-lg
                              text-sm font-semibold
                              transition-all duration-300
                              ${
                                currentPage === page
                                  ? "bg-sky-600 text-white shadow-md shadow-sky-200"
                                  : "border border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                              }
                            `}
                          >
                            {page}
                          </button>
                        );
                      }
                    )}

                    {/* Next */}
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="
                        inline-flex items-center gap-2
                        rounded-lg border border-slate-200
                        bg-white px-4 py-2.5
                        text-sm font-medium text-slate-600
                        transition-all duration-300
                        hover:border-sky-200
                        hover:bg-sky-50
                        hover:text-sky-700
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                    >
                      Next

                      <LuArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </ScrollReveal>
              )}
            </>
          ) : (
            /* Empty State */
            <ScrollReveal>
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                  <LuSearch className="h-6 w-6 text-slate-400" />
                </div>

                <p className="mt-5 text-lg font-semibold text-slate-900">
                  No products found
                </p>

                <p className="mt-2 text-slate-500">
                  Try another search term or category.
                </p>

                {/* Clear Filters */}
                {(search || activeCategory !== "All") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                      setCurrentPage(1);
                    }}
                    className="
                      mt-5 rounded-lg bg-sky-600
                      px-5 py-2.5 text-sm font-semibold
                      text-white transition-all duration-300
                      hover:bg-sky-700
                    "
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <div
              className="
                rounded-3xl border border-sky-100
                bg-gradient-to-br from-sky-50 to-white
                p-8 shadow-sm
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-sky-100
              "
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                <LuMessageCircle className="h-6 w-6 text-sky-700" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Need wholesale pricing?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
                Product pricing and availability may vary. Contact
                the business directly for current wholesale prices
                and availability.
              </p>

              <Link
                to="/contact"
                className="
                  mt-6 inline-flex items-center gap-2
                  rounded-lg bg-sky-600 px-6 py-3
                  font-semibold text-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-sky-700
                  hover:shadow-lg hover:shadow-sky-200
                "
              >
                Contact Us

                <LuArrowRight className="h-4 w-4 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Products;