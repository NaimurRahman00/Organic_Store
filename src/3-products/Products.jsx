import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  // Getting data using TanStack queries
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["porducts"],
    queryFn: async () => getData(),
  });

  // getting all products data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/products`);
    return data.data;
  };

  return (
    <section className="mx-7 h-screen">
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
          <select className="select-success w-fit max-w-xs focus:border-2 border border-emerald-500 px-2 py-0.5 rounded font-semibold text-emerald-800">
            <option disabled defaultValue>
              Sort by Price
            </option>
            <option> Low to High</option>
            <option>High to Low</option>
          </select>
          <select className="select-success w-fit max-w-xs focus:border-2 border border-emerald-500 px-2 py-0.5 rounded font-semibold text-emerald-800">
            <option disabled defaultValue>
              Sort by date
            </option>
            <option> Newest first</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 sticky top-0">
        {/* search, sort, filter function */}
        <div className="bg-emerald-100 rounded-xl p-4 my-10 col-span-1">
          {/* Search Input */}
          <div className="relative rounded-md shadow-sm w-full ">
            <h2 className="text-xl font-semibold mb-2 text-emerald-800">
              Search
            </h2>
            <input
              className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none"
              placeholder="Products name.."
            />
          </div>
          {/* Price range */}
          <h2 className="text-xl font-semibold my-2 text-emerald-800 mt-6">
            Price range
          </h2>
          <div className="flex items-center justify-start gap-2 mb-5">
            <input
              className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none"
              placeholder="Min price"
              type="number"
            />
            <input
              className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none"
              placeholder="Max price"
              type="number"
            />
          </div>
          {/* Brand name */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold my-2 text-emerald-800">
              Brand
            </h2>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Karkuma
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Earth's Bounty
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Natural Harmony
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                GreenLife Wellness
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
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
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">Dairy</span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Organic food
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Body care products
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="text-lg font-semibold text-black/60">
                Organic fruit juices
              </span>
            </label>
            <label className="cursor-pointer flex items-start justify-start gap-4">
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
        {/* Products */}
        <div className="col-span-3 grid grid-cols-3 gap-5 my-10">
          {/* {Array.isArray(products) && products?.map((product) => {
            console.log()
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Products;
