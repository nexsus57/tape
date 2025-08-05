
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
