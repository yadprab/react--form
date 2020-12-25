import React from "react";

const Modal2 = ({modalContent}) => {
  return (
    <>
      <section className="overlay--alert">
        <section className="alert--modal">
          <h2>{modalContent}</h2>
        </section>
      </section>
    </>
  );
};

export { Modal2 };
