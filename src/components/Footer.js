import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"
import Footer4 from "./Footer4"
import FooterBottom from "./FooterBottom"

export default function Footer() {
  
  return (
    <footer className="bg-white w-full ">
      <div className="container px-4 md:mx-auto relative py-12  max-w-7xl grid grid-cols-1 gap-4 border-b-2 md:grid-cols-4">
       <Footer1/>
        <Footer2 />
        <Footer3 />
        <Footer4 />
        <div className="absolute rounded-lg  justify-center right-0 top-14 h-24 w-24 shadow-xl hidden xl:flex">
          <figure className="h-16 w-16 k  ">
            <img src="	https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" />
          </figure>
        </div>


      </div>
<FooterBottom/>
    </footer>
  )
}
