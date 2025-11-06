import LoadingSkeleton from '../../common/LoadingSkeleton';

const EquityTableSkeleton = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 place-items-center bg-white p-2 rounded-lg">
      <LoadingSkeleton width="w-16" height="h-7" />
      <LoadingSkeleton width="w-8" height="h-7" />
      <LoadingSkeleton width="w-16" height="h-7" />

      <LoadingSkeleton width="w-12" height="h-4" />
      <LoadingSkeleton width="w-12" height="h-4" />
      <LoadingSkeleton width="w-12" height="h-4" />

      <LoadingSkeleton width="w-12" height="h-4" />
      <LoadingSkeleton width="w-12" height="h-4" />
      <LoadingSkeleton width="w-12" height="h-4" />

      <LoadingSkeleton width="w-full" height="h-4" className="col-span-3" />
    </div>
  );
};

export default EquityTableSkeleton;
