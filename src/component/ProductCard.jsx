/* eslint-disable react/prop-types */


const ProductCard =({ product }) => {
    return (
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
    );
};

export default ProductCard;