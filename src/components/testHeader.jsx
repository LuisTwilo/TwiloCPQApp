import React from 'react';
//require("../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css");

const TestHeader = (props) =>{
  return (
    <article className="slds-card slds-m-around_medium">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container slds-icon-standard-account"
              title="account"
            >
              <svg className="slds-icon slds-icon_small" aria-hidden="true">
                <img src="./logo.svg" alt="Logo" />
              </svg>
              <span className="slds-assistive-text">CPQ App</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <a
                href="javascript:void(0);"
                className="slds-card__header-link slds-truncate"
                title="CPQ App"
              >
                <span>CPQ App</span>
              </a>
            </h2>
          </div>
          <div className="slds-no-flex">
            <button className="slds-button slds-button_neutral">New</button>
          </div>
        </header>
      </div>
    </article>
  );
}

export default TestHeader;
