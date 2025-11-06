type LoadingSkeletonProps = {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
};

const LoadingSkeleton = ({
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded',
  className = '',
}: LoadingSkeletonProps) => {
  const skeletonContainer = `${width} ${height} ${rounded} ${className} bg-gray-300 animate-pulse`;
  return <div className={skeletonContainer} role="status" aria-label="Loading" />;
};

export default LoadingSkeleton;
