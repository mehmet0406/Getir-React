
export default function Card({cards: {image,title,description}}) {
   
  return (
    <div className="bg-white items-center shadow-md rounded-lg px-4 ">
 <figure className=" flex justify-center pt-14">
     <img className="items-center" src={image} alt="" />
 </figure>
  
   <h5 className="text-center pt-6 text-primary-color font-semibold text-lg ">{title}</h5>
   <p className="text-center pt-3 pb-8 text-gray-500 px-4"> {description}</p>
    </div>
  )
}
