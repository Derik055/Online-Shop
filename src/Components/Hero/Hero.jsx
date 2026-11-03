import { useState, useEffect } from "react"
import { fetchHero } from "../../API/heroApi"
import Button from "../Button/Button";
import SkeletonHero from "../SkeletonHero/SkeletonHero"

function Hero() {

  const [heroData, setHeroData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function loadHero() {
      try {
        setIsLoading(true)
        setIsError(false)
        const data = await fetchHero()
        setHeroData(data)

      } catch{
        setIsError(true)
      } finally{
        setIsLoading(false)
      }
    }

    loadHero()
  }, [])

  {
  if(isLoading){
    return(
      <SkeletonHero />
    )
  }

    if(isError){
    return(
      <p className="p-6 text-center font-['Montserrat'] ">Failed to Load Hero</p>
    )
  }
}
  return (
    <section className="Hero relative w-full h-[700px]">

      <img
        src={heroData.img}
        alt={heroData.alt}
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute top-[250px] left-[100px] w-[600px] max-w-[calc(100%-120px)] flex flex-col items-start text-left font-['Montserrat'] text-[#F8F9FB]">

        <h1 className="w-full text-[38px] leading-[46px] font-bold mb-[8px]">
          {heroData.title}
        </h1>

        <p className="font-['Nunito_Sans'] w-[480px] text-[20px] leading-[30px] font-light mb-[24px]">
          {heroData.description}
        </p>

        <div className="flex w-[520px] gap-[24px]">
          {heroData.buttons.map((button) => (
            <Button key={button.id} text={button.text} link={button.link} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
