"use client";
import Businesses from "@/sections/Businesses";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import StickyHeader from "@/sections/Header/StickyHeader";
import HeroSection from "@/sections/Hero";
import Products from "@/sections/Products";
import FeaturedProduct from "@/sections/Products/featured";

export default function Home() {
  return (
    <div>
      <StickyHeader />
      <HeroSection />
      {/* <FeaturedProduct /> */}
      <Products />
      <Businesses />
      <CallToAction />
      <Footer />
    </div>
  );
}
