import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="loader__icon">
          <img
            src="/assets/plane.png"
            alt="plane"
            className="loader__icon__img1"
          />
          <img
            src="/assets/earth.png"
            alt="plane"
            className="loader__icon__img2"
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
