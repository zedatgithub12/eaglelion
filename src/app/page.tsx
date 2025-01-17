"use client";
import Businesses from "@/sections/Businesses";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/Hero";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Products /> */}
      <Businesses />
      <CallToAction />
      <Footer />
    </div>
  );
}
