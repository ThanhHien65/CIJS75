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
            <option value="2021">2021</option>
            <option value="usa">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Detailsexpense;
