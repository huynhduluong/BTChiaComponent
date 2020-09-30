import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ListMovie from "./ListMovie";
import ListPromotion from "./ListPromotion";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ListMovie />
      <ListPromotion />
      <Footer />
    </div>
  );
}
