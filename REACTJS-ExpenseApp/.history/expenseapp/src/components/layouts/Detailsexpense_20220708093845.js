import React from "react";
import "./Expen.css";
const Detailsexpense = () => {
  return (
    <div className="detailsexpense">
      <div className="chooseyear">
        <div className="filerrby">fillter by year</div>
        <div className="selectyear">
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Detailsexpense;
