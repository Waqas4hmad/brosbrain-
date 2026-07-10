export default function RatingBadges() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-shrink-0">
      {/* Clutch Badge */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[140px]">
        <div className="p-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-red-500 text-xl">★</span>
            <span className="text-2xl font-bold text-gray-800">5.0/5</span>
          </div>
          <p className="text-sm text-gray-600">10 reviews</p>
        </div>
        <div className="bg-slate-800 text-white text-xs py-2 text-center font-medium">
          Powered by Clutch
        </div>
      </div>

      {/* Goodfirms Badge */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[160px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-600 text-xl">🏆</span>
          <span className="text-xl font-semibold text-gray-800">Goodfirms</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-gray-800">5.00</span>
          <span className="text-sm text-gray-600">20 Reviews</span>
        </div>
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}