import { useState } from "react"
import Footer1 from "../components/Footer1"
import FooterBottom from "../components/FooterBottom"
import FooterTitles from "../components/FooterItems"
import FooterJson from "../json/Footer.json"
import { useEffect } from "react"
export default function Footer() {

  const [footerItem, setFooterItem] = useState([])
  useEffect(() => {
    setFooterItem(FooterJson)
  }, [])
  return (
    <footer className="bg-white w-full ">
      <div className="container px-4 md:mx-auto relative py-12  max-w-7xl grid grid-cols-1 gap-4 border-b-2 md:grid-cols-4">
        <Footer1 />
        {footerItem && footerItem.map((item) => (
          <FooterTitles key={item.id} title={item.title} items={item.items} />
        ))}
        <div className="absolute rounded-lg  justify-center right-0 top-14 h-24 w-24 shadow-xl hidden xl:flex">
          <figure className="h-16 w-16 k  ">
            <img src="	https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" />
          </figure>
        </div>
      </div>
      <FooterBottom />
    </footer>
  )
}
