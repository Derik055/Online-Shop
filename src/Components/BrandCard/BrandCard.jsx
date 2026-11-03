import { Link } from "react-router-dom"

function BrandCard({brand}) {
    return(
         <Link to={brand.link} className="group flex flex-col">
          <div
            className="flex aspect-square cursor-pointer items-center justify-center rounded-xl shadow-md p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
             <img
             src={brand.logo}
             alt={brand.name}
             className={`h-full w-full object-contain ${brand.offset ?? ""}`}
             />
          </div>
         </Link>
    )
}

export default BrandCard
