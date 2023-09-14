import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import {HiLocationMarker }from "react-icons/hi"
import {IoIosArrowForward} from "react-icons/io"
export default function FirstSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    TR: '+90',
    US: '+1',
    GB: '+44',
    FR: '+31',
    IT: '+39'

  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed:4000,
    cssEase: "linear"
  };

  return (
    <section className="relative md:h-[500px] before:bg-gradient-to-r  before:from-primary-color before:to-transparent before:top-11 before:absolute before:inset-0 before:w-full before:h-full before:z-10" >

      <Slider {...settings} className="pt-11 hidden md:block">
        <div>
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="	https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
        </div>
      </Slider>
      <div className="container px-0 md:px-4  max-w-7xl flex justify-between items-center absolute top-11 left-1/2 -translate-x-1/2 md:h-full z-20" >
        <div className="hidden md:block ">
          <img className="w-44 h-44" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className="mt-[41px]  text-4xl font-semibold text-white ">
            Dakikalar İçinde <br />Kapınızda</h3>
        </div>
        <div className=" w-full md:w-auto md:w-normal md:flex md:justify-end  " >
        <div className="flex justify-center py-5 bg-primary-color md:hidden"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjAzODQgOS4yNDAxOUMyNi4wMzg0IDYuNDk5OTkgMjMuODAxMiA0LjcxMjg5IDIwLjUxODIgNC43MTI4OUMxNy40MDc0IDQuNzEyODkgMTQuMTUwOSA2Ljk1MDA3IDE0LjE1MDkgMTEuOTI3NUMxNC4xNTA5IDE1LjcyNjcgMTYuNDU0MiAxOC41MzMxIDIwLjQyNTYgMTguNTMzMUMyMi42NjI3IDE4LjUzMzEgMjUuMTI1IDE3LjI2MjMgMjUuNzQ3MSAxNi4zODg2QzI1Ljc0NzEgMTYuMzg4NiAyNS4zMjM1IDE0Ljc0NzEgMjQuMTU4NiAxNC43NDcxQzIzLjU0OTcgMTQuNzQ3MSAyMy4wOTk2IDE0Ljk4NTQgMjIuNTk2NSAxNS4xODM5QzIyLjA4MDMgMTUuMzk1NyAyMS40NTgxIDE1LjU5NDMgMjAuNjYzOCAxNS41OTQzQzE5LjU1MTkgMTUuNTk0MyAxNy42NDU2IDE1LjE1NzUgMTcuNjQ1NiAxMi43NjE0QzE3LjY0NTYgMTIuNzYxNCAxOC41NDU4IDEzLjAyNjIgMjAuNTg0NCAxMy4wMjYyQzI0Ljk3OTMgMTMuMDM5NCAyNi4wMzg0IDExLjE4NjEgMjYuMDM4NCA5LjI0MDE5Wk0yMC42NTA2IDcuNjc4MTRDMjIuMTU5NyA3LjY3ODE0IDIyLjg4NzggOC40OTg4OCAyMi44ODc4IDkuMjUzNDNDMjIuODg3OCAxMC4xNDA0IDIyLjA5MzUgMTAuNzA5NiAyMC42NTA2IDEwLjcwOTZDMTguNTQ1OCAxMC43MDk2IDE3Ljc1MTUgMTAuNDE4NCAxNy43NTE1IDEwLjQwNTFDMTcuNzM4MyA5LjE0NzUzIDE4Ljc0NDQgNy42NzgxNCAyMC42NTA2IDcuNjc4MTRaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik0zNC4yMDYgMTUuNjIwNkMzMi42OTY5IDE1LjYyMDYgMzEuOTE1OSAxNC4zNDk4IDMxLjc3MDMgMTMuNzkzOEMzMS42MjQ2IDEzLjI1MTEgMzEuNTMyIDEyLjQ3IDMxLjUzMiAxMS42NjI1TDMxLjU1ODUgNy41NTg4NUgzMi42NTcyQzMzLjU0NDEgNy41NTg4NSAzNC4yMTkyIDcuMjk0MSAzNC43MDkgNi43Nzc4M0MzNS4xODU2IDYuMjYxNTUgMzUuNDM3MSA1LjU1OTk1IDM1LjQzNzEgNC42OTk1SDMxLjU3MTdMMzEuNTQ1MiAyLjg4NTkzQzMxLjU0NTIgMi4zMDM0NyAzMS41NDUyIDEuODQwMTUgMzEuNTU4NSAxLjQ4MjczQzMxLjU3MTcgMS4xMjUzMiAzMS41ODQ5IDAuODQ3MzI1IDMxLjU5ODIgMC42MzU1MjFDMzEuNjExNCAwLjQxMDQ4IDMxLjYzNzkgMC4yMjUxNTEgMzEuNjUxMSAwLjA5Mjc3MzRDMzAuNDczIDAuMDkyNzczNCAyOS41ODYgMC4zNDQyOTIgMjguOTYzOSAwLjg0NzMyNkMyOC4zNDE3IDEuMzUwMzYgMjguMDM3MiAyLjE3MTEgMjguMDM3MiAzLjMzNjAyTDI4LjAxMDcgMTIuNDE3MUMyOC4wMTA3IDE2LjEzNjkgMjkuNzg0NiAxOC41NTk0IDMzLjE3MzUgMTguNTU5NEMzNC44NDE0IDE4LjU1OTQgMzYuMDU5MyAxNy42NTkyIDM2LjA1OTMgMTYuMjk1OEMzNi4wNTkzIDE1LjgxOTIgMzUuOTkzMSAxNS41Njc3IDM1Ljk1MzQgMTUuNDA4OEMzNS42NDg5IDE1LjQ4ODMgMzUuMTA2MiAxNS42MjA2IDM0LjIwNiAxNS42MjA2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNNDIuNjkxNyAxNS43OTIyQzQxLjkzNzIgMTUuNzkyMiA0MS40NjA2IDE1LjI0OTQgNDEuNDYwNiAxNC4zNDkzVjcuNzk2NThDNDEuNDYwNiA3LjIxNDEyIDQxLjQ2MDYgNi43NTA4IDQxLjQ3MzggNi4zOTMzOEM0MS40ODcxIDYuMDM1OTYgNDEuNTAwMyA1Ljc1Nzk3IDQxLjUxMzYgNS41NDYxN0M0MS41MjY4IDUuMzIxMTIgNDEuNTUzMyA1LjEzNTggNDEuNTY2NSA1LjAwMzQyQzQwLjM3NTEgNS4wMDM0MiAzOS40NzQ5IDUuMjU0OTMgMzguODUyOCA1Ljc1Nzk3QzM4LjIzMDYgNi4yNjEgMzcuOTI2MSA3LjA4MTc0IDM3LjkyNjEgOC4yNDY2NkwzNy44OTk3IDE0LjkxODVDMzcuODk5NyAxNy4zMDEzIDM5LjQzNTIgMTguNjI1IDQxLjM2NzkgMTguNTQ1NkM0Mi41ODU4IDE4LjQ5MjcgNDMuNjQ0OCAxNy45MjM0IDQzLjY0NDggMTYuNjM5NEM0My42NDQ4IDE2LjEwOTkgNDMuNTUyMiAxNS42NzMgNDMuNTUyMiAxNS42NzNDNDMuMjg3NCAxNS43MzkyIDQzLjA4ODggMTUuNzkyMiA0Mi42OTE3IDE1Ljc5MjJaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik01MS4zNjI1IDUuMDMwMjdDNTAuNjM0NCA1LjAzMDI3IDQ5Ljg5MzEgNS4xMDk3IDQ5LjE1MTggNS4yODE3OUM0OC40MTA1IDUuNDQwNjUgNDcuNzM1MyA1Ljc1ODM1IDQ3LjEzOTYgNi4yMjE2N0M0Ni41NDM5IDYuNjg0OTkgNDYuMDU0MSA3LjMyMDQgNDUuNjgzNSA4LjE0MTE0QzQ1LjMxMjggOC45NjE4OCA0NS4xMTQzIDEwLjAwNzcgNDUuMTE0MyAxMS4zMDVWMTUuMDUxMkM0NS4xMTQzIDE2LjIwMjkgNDUuMjU5OSAxNy4yNzUyIDQ1Ljk2MTUgMTcuODA0N0M0Ni43MTYgMTguMzg3MSA0Ny42MDMgMTguNDEzNiA0OC43ODExIDE4LjQxMzZDNDguNzY3OSAxOC4yOTQ1IDQ4Ljc0MTQgMTcuOTYzNSA0OC43MjgyIDE3LjczODVDNDguNzE0OSAxNy41MjY3IDQ4LjY4ODQgMTcuMjQ4NyA0OC42ODg0IDE2Ljg5MTNDNDguNjc1MiAxNi41MzM5IDQ4LjY3NTIgMTYuMDcwNSA0OC42NzUyIDE1LjQ4ODFWMTAuNjgyOEM0OC42NzUyIDkuNTQ0MzQgNDguODYwNSA4LjA4ODE5IDUwLjg1OTQgNy45MTYxQzUxLjk4NDYgNy44MjM0NCA1Mi45Nzc1IDcuMzg2NTkgNTIuOTc3NSA2LjE2ODcyQzUyLjk3NzUgNS44OTA3MyA1Mi45MTEzIDUuMzQ3OTggNTIuNzY1NyA1LjAzMDI3SDUxLjM2MjVaIiBmaWxsPSIjRkZEMzAwIi8+CjxwYXRoIGQ9Ik02LjI0ODIxIDQuNzEyODlDMi4xNDQ1MSA0LjcxMjg5IDAgNy41ODU0OCAwIDExLjA4MDJDMCAxNC4zMTAyIDEuOTcyNDIgMTcuMzQxNyA1LjU1OTg1IDE3LjM0MTdDNy40MTMxMyAxNy4zNDE3IDguNDk4NjIgMTYuNTQ3NCA4Ljc2MzM4IDE2LjMyMjRWMTcuOTM3NEM4Ljc2MzM4IDE5Ljc5MDcgOC4wMzUzIDIxLjAzNSA2LjE2ODc4IDIxLjAzNUM1LjI2ODYyIDIxLjAzNSA0LjU5MzQ5IDIwLjc4MzUgMy45ODQ1NiAyMC40OTIzQzMuNDI4NTcgMjAuMjI3NSAzLjAxODIgMTkuOTIzIDIuNDc1NDYgMTkuOTIzQzEuMDg1NDkgMTkuOTIzIDAuNzAxNiAyMS42NDM5IDAuNzAxNiAyMS42NTcyQzEuNzQ3MzggMjMuMDA3NCA0LjE0MzQxIDI0LjAwMDMgNi4xNTU1NCAyNC4wMDAzQzEwLjExMzYgMjQuMDAwMyAxMi4yOTc4IDIxLjY5NjkgMTIuMjk3OCAxNy4xMTY2QzEyLjI5NzggMTcuMTE2NiAxMi4yOTc4IDEyLjUwOTkgMTIuMjk3OCAxMS43NTU0QzEyLjI4NDYgNy41NzIyNCAxMC40MzEzIDQuNzEyODkgNi4yNDgyMSA0LjcxMjg5Wk02LjIzNDk3IDE0LjIzMDhDNC42OTkzOSAxNC4yMzA4IDMuNTIxMjQgMTMuMjY0NSAzLjUyMTI0IDExLjEzMzJDMy41MjEyNCA4Ljg1NjMgNC43MjU4NyA3LjY3ODE0IDYuMjM0OTcgNy42NzgxNEM3LjcxNzYgNy42NzgxNCA4LjgwMzA5IDguNTc4MzEgOC44MDMwOSAxMC45NjExQzguODAzMDkgMTMuMzk2OCA3LjYyNDkzIDE0LjIzMDggNi4yMzQ5NyAxNC4yMzA4WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMzguNzk5NyAzLjY5MzMzQzM5LjA3NzcgMy44MjU3MSAzOS4zNjg5IDMuOTA1MTMgMzkuNjg2NiAzLjkwNTEzQzQwLjQxNDcgMy45MDUxMyA0MC45ODM5IDMuNTYwOTUgNDEuNDA3NSAyLjg3MjU5QzQxLjU3OTYgMi41NTQ4OCA0MS42NzIzIDIuMjIzOTQgNDEuNjcyMyAxLjg2NjUyQzQxLjY3MjMgMS41MzU1OCA0MS41OTI5IDEuMjE3ODcgNDEuNDM0IDAuOTEzNDA2QzQxLjI3NTEgMC42MjIxNzYgNDEuMDM2OSAwLjM5NzEzNCA0MC43MTkyIDAuMjM4MjgyQzQwLjQ0MTIgMC4wNzk0Mjg4IDQwLjE2MzIgMCAzOS44NTg3IDBDMzkuNTI3OCAwIDM5LjE5NjggMC4wOTI2NjQ5IDM4Ljg3OTEgMC4yNzc5OTNDMzguNTYxNCAwLjQ2MzMyMSAzOC4zMjMxIDAuNzI4MDc1IDM4LjEzNzggMS4wNTkwMkMzNy45NjU3IDEuMzUwMjUgMzcuODczIDEuNjk0NDMgMzcuODczIDIuMDY1MDlDMzcuODczIDIuMzk2MDMgMzcuOTUyNSAyLjcxMzc0IDM4LjExMTMgMi45OTE3M0MzOC4yNzAyIDMuMjgyOTYgMzguNTA4NSAzLjUyMTI0IDM4Ljc5OTcgMy42OTMzM1oiIGZpbGw9IiNGRkQzMDAiLz4KPC9zdmc+Cg==" alt="" /></div>
      <div className="bg-white py-2 flex px-4 justify-between text-primary-color md:hidden"><span className="flex gap-2"><span><HiLocationMarker size={17}/></span><span className="text-gray-600 font-semibold text-sm " >Teslimat Adresi Belirle</span></span><span><a href="#"><IoIosArrowForward size={22}/></a></span></div>
        <div className="w-full md:w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-center text-base  text-primary-color font-semibold">Giriş Yap veya Kayıt ol</h4>

          <div className="flex gap-4">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select "
              onSelect={code => setSelected(code)}
              selected={selected}
            />
          <label className="pt-4 w-full relative block">
            <input type="text" required className="h-14  pl-4  w-full z-20 rounded-lg text-base border-border-color border-2 transition-all hover:border-primary-color focus:!border-primary-color peer " />
         <span className="pl-4 absolute top-0 left-0 h-full px-4 z-0 flex items-center translate-y-2 cursor-text  text-gray-500  transition-all peer-focus:h-[35px] peer-focus:font-sans peer-focus:text-sm peer-focus:text-primary-color peer-valid:h-[35px] peer-valid:text-sm peer-valid:text-primary-color">Telefon Numarası</span>
          </label>
          </div>
          <div className="pt-3">
            <button className="w-full transistion duration-300 rounded-lg font-sans font-semibold p-3 text-sm text-primary-color bg-yellow-color hover:bg-primary-color hover:text-yellow-color">Telefon Numarası ile devam et</button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
