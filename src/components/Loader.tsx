import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <h1>Waiting</h1>
        </div>
      )}
    </>
  );
};

export default Loader;
