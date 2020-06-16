import React from "react";
//require("../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css");

const Grid = (props) => {
  return (
    <div className="slds-card slds-m-around_medium">
      <div className="slds-grid slds-wrap">
        <div className="slds-col slds-m-around_medium">Column 1</div>
        <div className="slds-col slds-m-around_medium">Column 2</div>
        <div className="slds-col slds-m-around_medium">Column 3</div>
      </div>
    </div>
  );
};

export default Grid;
