const SkeletonBar = () => {
  return (
    <div className="w-14 flex flex-col justify-center group">
      <div className="w-14 rounded-md h-52 flex items-end">
        <div className="relative w-full bg-gray-600 rounded-md animate-pulse" style={{ height: `208px` }}>
          <span className="absolute -top-7 left-0 right-0 transition ease-in-out opacity-0 group-hover:opacity-100"></span>
        </div>
      </div>
    </div>
  )
}

export default SkeletonBar;