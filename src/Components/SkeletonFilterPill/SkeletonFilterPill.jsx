import Skeleton from "react-loading-skeleton";

const SkeletonFilterPill = ({ width = 100 }) => {
    return (
        <Skeleton width={width} height={42} borderRadius="8px" />
    )
}

export default SkeletonFilterPill
