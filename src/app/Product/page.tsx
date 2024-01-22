import React from "react";
import Nav from "../Nav";
import product from "E:/HomePageNextjs/homepage/src/app/Product/product.jpg";
import Image from "next/image";

const page = () => {
  return (
    <main className="bg-white h-full p-8 md:flex md:justify-center ">
      <div className="grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
        <Image src={product} alt="Product 1" width={400} height={400} />
        <Image src={product} alt="Product 2" width={400} height={400} />
        <Image src={product} alt="Product 3" width={400} height={400} />
        <Image src={product} alt="Product 4" width={400} height={400} />
      </div>

      {/* Product Details */}
      <div className="flex gap-5 flex-col mx-5 md:pl-5 md:w-[35%]  sm:justify-start sm:w-full">
        <h2 className="font-medium text-black text-Inter md:text-2xl ">
          Classic Floret Print Bi-fold Classic Wallets For Women
        </h2>
        <div className="flex gap-1">
          <svg
            className="w-6 h-6 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <div className="flex gap-6 font-medium text-2xl flex-row ">
          <h2 className="text-[#49656D]">Rs.599</h2>
          <h2 className="text-[#49656D] line-through">MRP: Rs.799</h2>
        </div>
        <h2 className="text-black text-xl font-medium">Description</h2>
        <h2 className="text-black text-sm">
          Vegan crafted ladies mini wallet with 1 large compartment for cash and
          bills. It has a side buttoned compartment for keeping coins. 4 mini
          compartments for cards and 2 invisible compartment for keeping
          important items organized.
        </h2>
        <button className=" h-10 text-black rounded border border-[#CCCCCC]">
          WishList
        </button>
        <button className="h-10 text-black rounded border border-[#CCCCCC]">
          Add to cart
        </button>
        <button className="h-10 text-white rounded border bg-[#49656D]">
          Buy Now
        </button>
      </div>
    </main>
  );
};

export default page;
