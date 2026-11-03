import { useRef, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "./ProductSlider.css"

import { fetchProducts } from "../../API/productsApi"
import ProductCard from "../ProductCard/ProductCard"
import SkeletonLoadingCard from "../SkeletonLoadingCard/SkeletonLoadingCard"

const arrowButton = "absolute top-[40%] z-10 flex h-[48px] w-[48px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#000000] shadow-md transition duration-200 hover:scale-110"

function ProductSlider () {
    const swiperRef = useRef(null)
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
        <div className="flex gap-[20px] overflow-hidden pt-[8px] pb-[48px]">
          {Array.from({length: 5}).map((_, index) => (
            <div key={index} className="w-[80%] shrink-0 sm:w-[29%] lg:w-[22.5%]">
              <SkeletonLoadingCard />
            </div>
          ))}
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
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ type: "progressbar" }}
        autoplay={{ delay: 1500, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
        className="product-slider pt-[8px]! pb-[48px]!"
      >
        {productData.filter((product) => product.slider).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <button type="button" slot="container-end" aria-label="Previous slide" onClick={() => swiperRef.current?.slidePrev()} className={`left-[8px] ${arrowButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" slot="container-end" aria-label="Next slide" onClick={() => swiperRef.current?.slideNext()} className={`right-[8px] ${arrowButton}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </Swiper>
    )
}

export default ProductSlider