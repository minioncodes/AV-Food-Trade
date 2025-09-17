"use client";

import Header from "@/components/user/Header";
import Hero from "@/components/user/Hero";
// import { IProduct } from "@/models/admin/ProductSchema";
// import { useEffect, useState } from "react";
// import { getProducts } from "./actions/userActions/user-products";
import Footer from "@/components/user/Footer";
import WhyChooseUsSection from "@/components/user/WhyChose";
import BulkDealsSection from "@/components/user/BulkDeals";
import TestimonialsSection from "@/components/user/Testimonials";
import ShopByCategorySection from "@/components/user/Categories";
import RevealOnScroll from "@/components/user/RevealOnScroll";

export default function Home() {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await getProducts();
  //     setProducts(res);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-amber-50 via-white to-green-50">
        <RevealOnScroll direction="right" delay={0.3}>
          <Hero />
        </RevealOnScroll>
      
      <RevealOnScroll direction="up" delay={0.5}>
      <ShopByCategorySection />
      </RevealOnScroll>
      {/* <Products products={products} /> */}
     
 <RevealOnScroll direction="right" delay={0.3}>
        <WhyChooseUsSection />
      </RevealOnScroll>

<RevealOnScroll direction="down" delay={0.2}>

      <BulkDealsSection />
      </RevealOnScroll>

      <RevealOnScroll direction="left" delay={0.2}>
        <TestimonialsSection />
      </RevealOnScroll>
  
      </section>

    <Footer />
    </>
  );
}
