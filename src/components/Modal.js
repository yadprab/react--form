import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, []);
  return (
    <>
      <section className="overlay">
        <section className="modal">
          <h2>{modalContent}</h2>
        </section>
      </section>
    </>
  );
};

export { Modal };
