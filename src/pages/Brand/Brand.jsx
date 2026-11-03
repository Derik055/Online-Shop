import { useState, useEffect } from "react"
import { fetchProducts } from "../../API/productsApi"
import ProductCard from "../../Components/ProductCard/ProductCard"
import SkeletonLoadingCard from "../../Components/SkeletonLoadingCard/SkeletonLoadingCard"
import SkeletonFilterPill from "../../Components/SkeletonFilterPill/SkeletonFilterPill"

const categories = [
  { id: "all", label: "All" },
  { id: "shoes", label: "Shoes" },
  { id: "football-boots", label: "Football Boots" },
  { id: "clothing", label: "Clothing" },
  { id: "accessories", label: "Accessories" },
]

function Brand ({ title, brand }) {
    const [activeCategory, setActiveCategory] = useState("all")
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

    const brandProducts = productData.filter((product) => product.brand === brand)

    const availableCategories = categories.filter((cat) =>
      cat.id === "all" || brandProducts.some((product) => product.category === cat.id)
    )

    const filteredProducts =
    activeCategory === "all"
    ? brandProducts
    : brandProducts.filter((product) => product.category === activeCategory)


    return (
        <section className="px-[16px] pt-[48px] pb-[72px] lg:px-[100px]">
            <div className="flex items-baseline gap-[4px] mb-[24px]">
                <h1 className="font-['Montserrat'] text-[32px] leading-[40px] font-bold text-[#000000]">
                    {title}
                </h1>
                {!isLoading && !isError && (
                <span className="font-['Nunito_Sans'] text-[16px] text-[#000000]">
                    ({filteredProducts.length})
                </span>
                )}
            </div>

            <div className="flex flex-wrap gap-[16px] mb-[48px]">
                {isLoading
                ? Array.from({length: 3}).map((_, index) => <SkeletonFilterPill key={index} />)
                : availableCategories.map((cat) => (
                    <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`font-['Nunito_Sans'] text-[16px] px-[24px] py-[8px] rounded-[8px] border transition cursor-pointer ${
                        activeCategory === cat.id
                        ?  "bg-[#0A1D37] text-white border-[#0A1D37]"
                        : "bg-white text-[#0A1D37] border-[#BDC0C0] hover:border-[#0A1D37]"
                    }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

        {isLoading ? (
            <div className="grid grid-cols-2 gap-[24px] md:grid-cols-3 lg:grid-cols-4">
                {Array.from({length: 8}).map((_, index) => <SkeletonLoadingCard key={index} />)}
            </div>
        ) : isError ? (
            <p className="p-6 text-center font-['Montserrat']">Failed to Load Products</p>
        ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-[24px] md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <p className="font-['Nunito_Sans'] text-[16px] text-center py-[48px]">
                No products in this category yet.
            </p>
        )}
        </section>
    )
}

export default Brand
