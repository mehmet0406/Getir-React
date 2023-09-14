import React from "react";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
  <Header/>
  <FirstSection/>
  <Categories/>
  <Banner/>
  <Cards/>
  <Footer/>

    </div>

  )
}