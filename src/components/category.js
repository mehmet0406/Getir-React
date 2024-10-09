

export default function Category({ category: { image, title } }) {
  return (
    <div className="px-2">
      <a href="#" className="flex rounded-xl p-2 group flex-col gap-y-2 items-center tex-center  transistion hover:bg-purple-50" >
        <img src={image} alt="" className="w-12 border-white-200 border flex justify-center h-12 rounded-lg" />
        <span className="text-sm text-center font-semibold pt-1 text-gray-dark-color group-hover:text-primary-color">{title}</span>
      </a>
    </div>
  )
}
