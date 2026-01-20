const CourseCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 h-[420px] w-full animate-pulse">
      <figure className="px-4 pt-4 h-[200px]">
        <div className="bg-base-300 rounded-xl h-full w-full"></div>
      </figure>
      <div className="card-body p-4 flex flex-col justify-between flex-1">
        <div className="space-y-3">
          <div className="h-6 bg-base-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-base-300 rounded w-1/2 mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <div className="h-8 bg-base-300 rounded-lg w-16"></div>
          <div className="h-8 bg-base-300 rounded-lg w-20"></div>
          <div className="h-8 bg-base-300 rounded-lg w-18"></div>
        </div>
        <div className="card-actions justify-center mt-4">
          <div className="h-10 bg-base-300 rounded-lg w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;