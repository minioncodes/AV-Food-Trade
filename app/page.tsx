"use client";

import Header from "@/components/user/Header";
import Hero from "@/components/user/Hero";
import Products from "@/components/user/Products";
import { IProduct } from "@/models/admin/ProductSchema";
import { useEffect, useState } from "react";
import { getProducts } from "./actions/userActions/user-products";
import Footer from "@/components/user/Footer";
import CategoriesSection from "@/components/user/Categories";
import WhyChooseUsSection from "@/components/user/WhyChose";
import BulkDealsSection from "@/components/user/BulkDeals";
import TestimonialsSection from "@/components/user/Testimonials";
import ShopByCategorySection from "@/components/user/Categories";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setProducts(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-amber-50 via-white to-green-50">
      <Hero />
      <Products products={products} />
      <WhyChooseUsSection />

      <ShopByCategorySection />
      <BulkDealsSection />
      <TestimonialsSection />
      </section>

    <Footer />
    </>
  );
}
