import React from "react";
import FirstSection from "./Pages/FirstSection";
import Header from "./components/Header";
import Banner from "./Pages/Banner";
import Cards from "./Pages/Cards";
import Categories from "./Pages/Categories";
import Footer from "./Pages/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <Categories />
      <Banner />
      <Cards />
      <Footer />
    </div>

  )
}