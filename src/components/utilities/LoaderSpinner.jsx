const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0">
      <span className="loading loading-spinner text-warning w-48 h-48"></span>
    </div>
  );
};

export default LoaderSpinner;
