import Hero from '../../Components/Hero/Hero';
import BrandGrid from '../../Components/BrandGrid/BrandGrid';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import NewArrivalCard from '../../Components/NewArrivalCard/NewArrivalCard';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';


function Home() {

  return (
    <>
     <Hero />

     <section className="Favorites px-[16px] pt-[72px] lg:px-[100px]">
        <h1 className="font-['Montserrat'] text-[32px] leading-[40px] font-bold text-[#000000] mb-[48px] text-center">
          Your Favorites
        </h1>
       <BrandGrid />
     </section>

     <section className="Category px-[16px] pt-[72px] lg:px-[100px]">
        <h1 className="font-['Montserrat'] text-[32px] leading-[40px] font-bold text-[#000000] mb-[48px] text-center">
          Shop By Category
        </h1>
        <CategoryCard />
     </section>

     <section className="Category px-[16px] pt-[72px] lg:px-[100px]">
      <h1 className="font-['Montserrat'] text-[32px] leading-[40px] font-bold text-[#000000] mb-[48px] text-center">
        New Arrivals
      </h1>
      <NewArrivalCard />
     </section>

     <section className="Trending px-[16px] pt-[72px] lg:px-[100px] pb-[72px]">
      <h1 className="font-['Montserrat'] text-[32px] leading-[40px] font-bold text-[#000000] mb-[48px] text-center">
        Best Sellers
      </h1>
      <ProductSlider />
     </section>
    </>
  )
}

export default Home
