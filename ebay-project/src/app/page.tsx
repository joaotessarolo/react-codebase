"use client";

import MainLayout from "./layouts/MainLayout";
import CarouselComponent from "@/components/CarouselComponent";
import ProductComponent from "@/components/ProductComponent";
import { products } from "@/constants/products";

export default function Home() {
  return (
    <MainLayout>
      <CarouselComponent />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
