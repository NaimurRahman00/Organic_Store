import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "../component/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Updated getData function to include search query
  const getData = async (page, sortBy, order, searchQuery) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products?page=${page}&limit=12&sortBy=${sortBy}&order=${order}&search=${searchQuery}`
    );
    return data;
  };

  // Updated useQuery to include searchQuery
  const { data: productsData = {}, isLoading } = useQuery({
    queryKey: ["products", currentPage, sortBy, order, searchQuery],
    queryFn: () => getData(currentPage, sortBy, order, searchQuery),
    keepPreviousData: true,
  });

  const { products = [], totalPages } = productsData;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortByPrice = (e) => {
    setSortBy("price");
    setOrder(e.target.value === "Low to High" ? "asc" : "desc");
  };

  const handleSortByDate = () => {
    setSortBy("creationDateTime");
    setOrder("desc");
  };

  // New function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <section className="mx-7 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl text-emerald-500 font-semibold">Our Products</h1>
          <p className="text-xl text-black/90 font-semibold">
            Find your favorite organic products on{" "}
            <span className="text-emerald-500 font-bold text-2xl">Organ</span>
            <span className="text-2xl font-bold">Store</span>
          </p>
        </div>
        <div className="flex gap-2">
          <select
            onChange={handleSortByPrice}
            className="select-success w-fit max-w-xs focus:border-2 border border-emerald-500 px-2 py-0.5 rounded font-semibold text-emerald-800"
            value={
              sortBy === "price"
                ? order === "asc"
                  ? "Low to High"
                  : "High to Low"
                : ""
            }
          >
            <option disabled value="">
              Sort by Price
            </option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <select
            onChange={handleSortByDate}
            className="select-success w-fit max-w-xs focus:border-2 border border-emerald-500 px-2 py-0.5 rounded font-semibold text-emerald-800"
            value={sortBy === "creationDateTime" ? "Newest first" : ""}
          >
            <option disabled value="">
              Sort by Date
            </option>
            <option>Newest first</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* search, sort, filter section */}
        <div className="bg-emerald-100 rounded-xl p-4 my-10 col-span-1 md:col-span-1">
          <div className="sticky top-5">
            {/* Search Input */}
            <div className="rounded-md shadow-sm w-full">
              <h2 className="text-xl font-semibold mb-2 text-emerald-800">
                Search
              </h2>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Products name.."
                value={searchQuery} // Controlled input value
                onChange={handleSearchChange} // Handle search input change
              />
            </div>
            {/* Price range */}
            <h2 className="text-xl font-semibold my-2 text-emerald-800 mt-6">
              Price range
            </h2>
            <div className="flex items-center justify-start gap-2 mb-5">
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Min price"
                type="number"
              />
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Max price"
                type="number"
              />
            </div>
            {/* Brand name */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold my-2 text-emerald-800">
                Brand
              </h2>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Karkuma
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Earth's Bounty
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Natural Harmony
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  GreenLife Wellness
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Khaas Food
                </span>
              </label>
            </div>
            {/* Category name */}
            <div className="flex flex-col gap-1 mt-3">
              <h2 className="text-xl font-semibold my-2 text-emerald-800">
                Category
              </h2>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Dairy
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Organic food
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Body care products
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Organic fruit juices
                </span>
              </label>
              <label className="cursor-pointer flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm"
                />
                <span className="text-lg font-semibold text-black/60">
                  Greens
                </span>
              </label>
            </div>
            {/* filter button */}
            <div className="flex items-end mt-5 justify-end">
              <button className="text-lg w-fit rounded px-4 py-1 bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
                <span className="absolute bg-emerald-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-emerald-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {isLoading ? (
            <div className="flex items-center justify-center h-full relative -right-80">
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-emerald-400"></div>
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="max-w-full space-y-4 rounded-lg bg-white p-6 shadow-lg flex flex-col justify-between"
              >
                <img
                  width={400}
                  height={400}
                  className="h-[275px] w-[350px] rounded-lg object-cover"
                  src={product.productImage || product.ProductImage}
                />
                <div className="grid gap-2">
                  <h1 className="text-lg font-semibold ">
                    {product.productName || product.ProductName}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {product.description || product.Description}
                  </p>
                  <div className="flex justify-between">
                    <h2 className="text-base font-semibold">
                      <span className="mr-2">Price:</span>$
                      {product.price || product.Price}
                    </h2>
                    <h2 className="text-base font-semibold">
                      <span className="mr-2">Rating:</span>
                      {product.ratings || product.Ratings}
                    </h2>
                  </div>
                </div>
                <div className="">
                  <h2 className="rounded-md mb-2 py-.5">
                    <span className="text-lg font-semibold mr-2">Made on:</span>
                    {new Date(
                      product.productCreationDateTime ||
                        product.ProductCreationDate ||
                        product.creationDateTime ||
                        product.ProductCreationDateTime
                    ).toLocaleString("en-GB", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }) +
                      ", " +
                      new Date(
                        product.productCreationDateTime ||
                          product.ProductCreationDate ||
                          product.creationDateTime ||
                          product.ProductCreationDateTime
                      ).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                  </h2>
                  <h2 className="rounded bg-emerald-700 px-2 py-1 text-base flex items-center justify-center font-semibold text-white duration-300">
                    {product.category || product.Category}
                  </h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
