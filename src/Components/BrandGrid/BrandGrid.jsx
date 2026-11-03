import { useState, useEffect } from "react"
import { fetchBrands } from "../../API/brandsApi"
import BrandCard from "../BrandCard/BrandCard"
import SkeletonCardBrands from "../SkeletonCardBrand/SkeletonCardBrand"

function BrandGrid() {

  const [brandData, setBrandData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

useEffect(() => {
    async function loadBrands() {
      try {
        setIsLoading(true)
        setIsError(false)
        const data = await fetchBrands()
        setBrandData(data)

      } catch{
        setIsError(true)
      } finally{
        setIsLoading(false)
      }
    }

    loadBrands()
  }, [])

  {
  if(isLoading){
    return(
      <div className="grid grid-cols-2 gap-[20px] lg:grid-cols-6">
        {Array.from({length: 6}).map((_, index) => <SkeletonCardBrands key={index} />)}
      </div>
    )
  }

    if(isError){
    return(
      <p className="p-6 text-center font-['Montserrat'] ">Failed to Load Products</p>
    )
  }
}
    return(
     <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-6">
      {brandData.map((brand) => (
         <BrandCard key={brand.id} brand={brand} />
        ))}
    </div>
    )
}

export default BrandGrid
