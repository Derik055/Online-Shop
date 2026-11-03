import Skeleton from "react-loading-skeleton";

const SkeletonCardBrands = () => {
    return (
        <div className="flex flex-col">

        <div className="aspect-square w-full overflow-hidden rounded-xl">
            <Skeleton containerClassName="block h-full" height="100%" borderRadius="0.75rem" />
        </div>

        </div>

    )
}

export default SkeletonCardBrands
