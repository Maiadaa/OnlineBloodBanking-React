import React from "react";
import "./Popup.css";

export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
     <button className="mt-6" onClick={closePopup}>Close X</button>
     <img
        className="popupimg"
        src="https://www.georgevoyatzis.com/wp-content/uploads/2020/09/Logo-icon-768x765.png"
        alt="Hurrayyyyy!"
      />
      <h1 className="font-medium leading-tight text-xl mt-0 text-black-600">{text}</h1>
     </div>
    </div>
  );
};

export default Popup;