"use client";
import Businesses from "@/sections/Businesses";
import CallToAction from "@/sections/CallToAction";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <div>
      <Products />
      <Businesses />
      <CallToAction />
    </div>
  );
}
