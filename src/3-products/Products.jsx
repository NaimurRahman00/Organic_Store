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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 sticky top-0">
        {/* search, sort, filter function */}
        <div className="bg-emerald-100 rounded-xl p-4 my-10 col-span-1 md:col-span-1">
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
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {products?.map((product) => (
            <div key={product._id} className="max-w-full space-y-4 rounded-lg bg-white p-6 shadow-lg">
              <img
                width={400}
                height={400}
                className="h-[275px] w-[350px] rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card navigate ui"
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Product Name</h1>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  This is a brief description of the product. It highlights the
                  key features and benefits.
                </p>
                <div className="text-lg font-semibold">$99.99</div>
              </div>
              <div className="flex gap-4">
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
                  Add to Cart
                </button>
                <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
