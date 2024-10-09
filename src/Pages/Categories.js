import { useState,useEffect } from "react"
import categoriesData from '../json/categories.json'
import Category from "../components/category"
export default function Categories() {
  
  const[categories,setCategories] = useState([])

  useEffect(()=>{
      setCategories(categoriesData)

  },[])

  return (
    <section className="bg-white py-16 px-4 ">
      <div className="container mx-auto pt-[320px] md:py-0 max-w-7xl">
      <h3 className="font-semibold tracking-wide text-sm mb-3">Kategoriler</h3>
   <div className="grid grid-cols-4  lg:grid-cols-10  md:grid-cols-5 sm:grid-cols-5">
      {categories && categories.map((category,index)=>
        <Category key={index} category={category} />
      )}
   </div>
      </div>
    </section>
  )
}
