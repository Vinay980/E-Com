import React from "react";
import { useProduct } from "../context/ProductContext";

function Products() {
  const { product } = useProduct();
  console.log(product);

  return (
    <>
      <div className="flex flex-wrap gap-3 w-screen">
        {product.map((prod) => {
          return (
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
              <a href="#">
                <img
                  class="p-8 rounded-t-lg h-[350px]"
                  src={prod.images[0]}
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {prod.title}
                  </h5>
                </a>

                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    ${prod.price}
                  </span>
                  <a
                    href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
