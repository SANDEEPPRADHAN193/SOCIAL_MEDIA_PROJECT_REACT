// const LoadingSpinner = () => {
//   return (
//     <div className="d-flex justify-content-center spinner">
//       <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   );
// };
// export default LoadingSpinner;
const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner-border text-primary custom-spinner" role="status"></div>
        <p className="mt-3 loading-text">Fetching Posts...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

