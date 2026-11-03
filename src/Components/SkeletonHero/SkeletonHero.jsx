import Skeleton from "react-loading-skeleton";

const SkeletonHero = () => {
    return (
        <section className="Hero relative w-full h-[700px]">

        <Skeleton containerClassName="block h-full" height="100%" borderRadius="0" />

        <div className="absolute top-[250px] left-[100px] w-[600px] max-w-[calc(100%-120px)] flex flex-col items-start">

            <div className="w-full text-[38px] leading-[46px] mb-[8px]">
                <Skeleton width="80%" highlightColor="#EDEDED" baseColor="#D4D6D6" />
            </div>

            <div className="w-[480px] max-w-full text-[20px] leading-[30px] mb-[24px]">
                <Skeleton count={4} highlightColor="#EDEDED" baseColor="#D4D6D6" />
            </div>

            <div className="flex w-[520px] max-w-full gap-[24px]">
                <Skeleton containerClassName="flex-1" height={51} borderRadius="10px" highlightColor="#EDEDED" baseColor="#D4D6D6" />
                <Skeleton containerClassName="flex-1" height={51} borderRadius="10px" highlightColor="#EDEDED" baseColor="#D4D6D6" />
            </div>

        </div>

        </section>

    )
}

export default SkeletonHero
