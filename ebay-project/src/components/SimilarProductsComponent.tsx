"use client";

import { products } from "@/constants/products";
import { BiLoader } from "react-icons/bi";
import ProductComponent from "./ProductComponent";

export default function SimilarProductsComponent() {
  return (
    <div>
      <div className="border-b py-1 max-w-[1200px] mx-auto" />
      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold text-2xl py-2 mt-4">
          Similar sponsored items
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center gap-4 font-semibold">
              <BiLoader size={30} className="text-blue-400 animate-spin" />
              Loading Products...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
