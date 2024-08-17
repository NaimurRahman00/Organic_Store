import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Pagination from "../component/Pagination";
import ProductCard from "../component/ProductCard";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]); // Changed to selectedBrandNames
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Fetch products with filters
  const getData = async (
    page,
    sortBy,
    order,
    searchQuery,
    minPrice,
    maxPrice,
    brands,
    categories
  ) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`,
      {
        params: {
          page,
          limit: 12,
          sortBy,
          order,
          search: searchQuery,
          minPrice,
          maxPrice,
          brands: brands.join(","), // Updated to brandNames
          categories: categories.join(","),
        },
      }
    );
    return data;
  };

  const { data: productsData = {}, isLoading } = useQuery({
    queryKey: [
      "products",
      currentPage,
      sortBy,
      order,
      searchQuery,
      minPrice,
      maxPrice,
      selectedBrands, // Updated to selectedBrandNames
      selectedCategories,
    ],
    queryFn: () =>
      getData(
        currentPage,
        sortBy,
        order,
        searchQuery,
        minPrice,
        maxPrice,
        selectedBrands, // Updated to selectedBrandNames
        selectedCategories
      ),
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setCurrentPage(1);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setCurrentPage(1);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    if (e.target.checked) {
      setSelectedBrands((prev) => [...prev, brand]); // Updated to selectedBrandNames
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brand)); // Updated to selectedBrandNames
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    }
  };

  const handleApplyFilter = () => {
    setCurrentPage(1);
  };

  return (
    <section className="mx-7 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl text-emerald-500 font-semibold">
            Our Products
          </h1>
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
                value={searchQuery}
                onChange={handleSearchChange}
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
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                placeholder="Max price"
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
            {/* Brand name */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold my-2 text-emerald-800">
                Brand
              </h2>
              {[
                "Karkuma",
                "Earth's Bounty",
                "Natural Harmony",
                "GreenLife Wellness",
                "Khaas Food",
              ].map((brand) => (
                <label
                  key={brand}
                  className="cursor-pointer flex items-center justify-start gap-4"
                >
                  <input
                    type="checkbox"
                    value={brand}
                    className="checkbox checkbox-success checkbox-sm"
                    onChange={handleBrandChange} // Updated to handleBrandChange
                  />
                  <span className="text-lg font-semibold text-black/60">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
            {/* Category name */}
            <div className="flex flex-col gap-1 mt-3">
              <h2 className="text-xl font-semibold my-2 text-emerald-800">
                Category
              </h2>
              {[
                "Dairy",
                "Organic food",
                "Body care products",
                "Organic fruit juices",
                "Greens",
              ].map((category) => (
                <label
                  key={category}
                  className="cursor-pointer flex items-center justify-start gap-4"
                >
                  <input
                    type="checkbox"
                    value={category}
                    className="checkbox checkbox-success checkbox-sm"
                    onChange={handleCategoryChange}
                  />
                  <span className="text-lg font-semibold text-black/60">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
