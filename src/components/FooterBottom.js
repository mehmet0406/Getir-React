import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { CiGlobe } from "react-icons/ci"
export default function FooterBottom() {
    return (
        <>
        <div className="container px-4 block mx-auto max-w-7xl  justify-center py-8 md:justify-between md:flex">
      
            <div className="text-gray-500 items-center gap-1 text-sm flex justify-center md:justify-normal">
                <span  >&copy; </span>
                <span >Designed by Mehmet Dündar </span>

            </div>
            <div className='flex gap-4 justify-center py-4 md:justify-normal'>
                <a href="#" className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color '>
                    <BiLogoFacebookCircle size={20}/> 
                </a>
                <a href="#" className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-500  hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color'>
                    <FaTwitter size={20}/>
                </a>
                <a href="#" className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-500  hover:bg-primary-color hover:bg-opacity-10 hover:text-primary-color'>
                    <FaInstagram size={20}/>
                </a>
                <a href="#" className=' h-8 gap-2 font-bold text-sm flex rounded-lg items-center justify-center text-gray-500 border px-2'>
                  <CiGlobe size={20}/> Türkçe (TR)
                </a>
                    
                </div>
            </div>
    
    </> 
    )
}
