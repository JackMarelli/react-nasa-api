import React from "react";

const Modal = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={closeModal}
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-white">
              <div className="flex justify-end p-4">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <img
                  src={imageUrl}
                  alt="Image"
                  className="w-full h-auto max-h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
