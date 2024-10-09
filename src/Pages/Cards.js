import { useState,useEffect } from "react"
import CardsApi from '../json/Cards.json'
import Card from '../components/Card'


export default function Cards() {
  const [cards,setCards]=useState([])
  useEffect(()=>{
    setCards(CardsApi)
  },[])

  return (
    <section className="bg-gray-50 w-full  ">
      <div className="container mx-auto  max-w-7xl py-11 px-4 xl:px-0" >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards && cards.map((cards,index)=>
            <Card key={index} cards={cards}/>
          )}
        </div>
      </div>
    </section>
  )
}
