"use client";
import Businesses from "@/sections/Businesses";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import StickyHeader from "@/sections/Header/StickyHeader";
import HeroSection from "@/sections/Hero";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <div>
      <StickyHeader />
      <HeroSection />
      {/* <Products /> */}
      <Businesses />
      <CallToAction />
      <Footer />
    </div>
  );
}
