import Skeleton from "react-loading-skeleton";

const SkeletonLoadingCard = () => {
    return (
        <div className="flex flex-col">

        <div className="aspect-square w-full overflow-hidden rounded-xl">
            <Skeleton containerClassName="block h-full" height="100%" borderRadius="0.75rem" />
        </div>

        <div className="mt-[8px] text-[16px]">
            <Skeleton width="30%" />
        </div>
        <div className="mt-[2px] text-[16px]">
            <Skeleton width="50%" />
        </div>

        </div>

    )
}

export default SkeletonLoadingCard
