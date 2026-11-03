import { useState, useEffect } from "react"
import { fetchCategories } from "../../API/categoryApi"
import Button from "../Button/Button"
import SkeletonCardCategory from "../SkeletonCardCategory/SkeletonCardCategory"

function CategoryCard() {

  const [categoryData, setCategoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoading(true)
        setIsError(false)
        const data = await fetchCategories()
        setCategoryData(data)

      } catch{
        setIsError(true)
      } finally{
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [])

  {
  if(isLoading){
    return(
      <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-3">
        {Array.from({length: 3}).map((_, index) => <SkeletonCardCategory key={index} />)}
      </div>
    )
  }

    if(isError){
    return(
      <p className="p-6 text-center font-['Montserrat'] ">Failed to Load Categories</p>
    )
  }
}
  return (
    <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-3 lg:grid-cols-3">
      {categoryData.map((category) => (
        <div key={category.id} className="flex flex-col items-center">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <img
              src={category.img}
              className="block h-full w-full object-cover"
            />

            <div className="absolute bottom-[24px] left-[24px]">
              <Button text="Shop" link={category.link}/>
            </div>
          </div>

          <p className="font-['Nunito_Sans'] font-medium mt-[16px] text-center text-[24px]">{category.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard
