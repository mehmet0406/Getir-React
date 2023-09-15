

export default function Banner() {
  return (
    <section className="bg-gray-50 w-full pt-4 overflow-hidden">
      <div className="container flex justify-between mx-auto mt-8 max-w-7xl rounded-none bg-mobile-app bg-primary-color pt-4 relative  min-w-[1280px] md:rounded-lg">
        <div className="px-4 ">
          <h2 className="text-white font-semibold text-3xl pt-12">Getir'i indirin!</h2>
          <p className="font-semibold text-large text-white pt-2 ">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
          <div className=" pt-8 pb-14 ">
            <ol className="block gap-3 md:flex">
              <li href="#">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
           </li>
            <li href="#" className="py-2 md:py-0" >
              <img src="	https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
           </li>
            <li href="#">
              <img src="	https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
           </li>
            </ol>
            
          </div>
          
        </div>
      
        <img className="object-contain absolute right-0 hidden md:block " src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />

      </div>
    </section>
  )
}
