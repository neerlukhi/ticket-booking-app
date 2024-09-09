import React from 'react';

const Modal = ({ show, handleClose, handleSave, handleChange, name }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Enter your name</h2>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-4"
          placeholder="Your name"
        />
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
