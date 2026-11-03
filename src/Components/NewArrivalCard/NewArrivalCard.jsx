import { useState, useEffect } from "react"
import {fetchProducts} from "../../API/productsApi"
import ProductCard from "../ProductCard/ProductCard"
import SkeletonLoadingCard from "../SkeletonLoadingCard/SkeletonLoadingCard"

function NewArrivalCard () {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true)
        setIsError(false)
        const data = await fetchProducts()
        setProductData(data)

      } catch{
        setIsError(true)

      } finally{
        setIsLoading(false)

      }
    }

    loadProducts()
  }, [])

{
  if(isLoading){
    return(
      <div className="grid grid-cols-2 gap-[20px] lg:grid-cols-4">
        {Array.from({length: 4}).map((_, index) => <SkeletonLoadingCard key={index} />)}
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
     <div className="grid grid-cols-2 gap-[20px] lg:grid-cols-4">
        {productData?.filter((product) => product.newArrival)?.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
}

export default NewArrivalCard