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

const PRODUCTS_PER_PAGE = 24

function Gender ({ title, gender }) {
    const [activeCategory, setActiveCategory] = useState("all")
    const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE)
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

    const genderProducts = productData.filter((product) => product.gender === gender)

    const availableCategories = categories.filter((cat) =>
      cat.id === "all" || genderProducts.some((product) => product.category === cat.id)
    )

    const filteredProducts =
    activeCategory === "all"
    ? genderProducts
    : genderProducts.filter((product) => product.category === activeCategory)

    const visibleProducts = filteredProducts.slice(0, visibleCount)

    function handleCategoryClick(categoryId) {
      setActiveCategory(categoryId)
      setVisibleCount(PRODUCTS_PER_PAGE)
    }


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
                    onClick={() => handleCategoryClick(cat.id)}
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
                {Array.from({length: PRODUCTS_PER_PAGE}).map((_, index) => <SkeletonLoadingCard key={index} />)}
            </div>
        ) : isError ? (
            <p className="p-6 text-center font-['Montserrat']">Failed to Load Products</p>
        ) : filteredProducts.length > 0 ? (
            <>
            <div className="grid grid-cols-2 gap-[24px] md:grid-cols-3 lg:grid-cols-4">
                {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <p className="font-['Nunito_Sans'] text-[16px] text-center text-[#000000] mt-[48px]">
                Showing {visibleProducts.length} of {filteredProducts.length}
            </p>

            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-[16px]">
                    <button
                    onClick={() => setVisibleCount(visibleCount + PRODUCTS_PER_PAGE)}
                    className="font-['Montserrat'] text-[16px] font-medium px-[32px] h-[46px] rounded-[10px] bg-[#0A1D37] text-white cursor-pointer hover:bg-[#13294B] transition-colors duration-200"
                    >
                        Load More
                    </button>
                </div>
            )}
            </>
        ) : (
            <p className="font-['Nunito_Sans'] text-[16px] text-center py-[48px]">
                No products in this category yet.
            </p>
        )}
        </section>
    )
}

export default Gender
