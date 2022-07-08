import React from "react";
import "./Expen.css";
const Detailsexpense = () => {
  return (
    <div className="detailsexpense">
      <div className="chooseyear">
        <div className="filerrby">fillter by year</div>
        <div className="selectyear">
          <select id="Years">
            <option value="2020">2020</option>
            <option value="2021">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Detailsexpense;
