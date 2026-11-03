import Skeleton from "react-loading-skeleton";

const SkeletonCardCategory = () => {
    return (
        <div className="flex flex-col items-center">

        <div className="aspect-[2/3] w-full overflow-hidden rounded-xl">
            <Skeleton containerClassName="block h-full" height="100%" borderRadius="0.75rem" />
        </div>

        <div className="mt-[16px] w-full text-center text-[24px]">
            <Skeleton width="40%" />
        </div>

        </div>

    )
}

export default SkeletonCardCategory
