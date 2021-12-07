import './ErrorLoadingTodos.scss';

const ErrorLoadingTodos = () => {
  return (
    <div className="error-container">
      <h1 className="error-container__404 animated pulse">404</h1>
      <h2 className="error-container__subtitle">Page not found</h2>
      <p className="error-container__description">
        {" "}
        The page you are looking is not available{" "}
      </p>
      <a href="../index.html">
        {" "}
        <button 
          className="error-container__button"
          onClick={() => window.location.reload()}
        >
          Back to Home
        </button>{" "}
      </a>
    </div>
  );
};

export {ErrorLoadingTodos};
