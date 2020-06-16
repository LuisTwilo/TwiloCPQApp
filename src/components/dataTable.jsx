import React, { Component } from "react";

class DataTable extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Luis",
        lastName: "Londono",
      },
      {
        id: 2,
        name: "Hello",
        lastName: "World!",
      },
    ],
  };
  render() {
    return (
      <table className="slds-table slds-table_cell-buffer slds-table_bordered">
        <thead>
          <tr className="slds-line-height_reset">
            <th className="" scope="col">
              <div className="slds-truncate" title="Name">
                Name
              </div>
            </th>
            <th className="" scope="col">
              <div className="slds-truncate" title="LastName">
                Last Name
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((d) => (
            <tr className="slds-hint-parent" key = {d.id}>
              <th data-label="Name" scope="row">
                <div className="slds-truncate" title="Name">
                  {d.name}
                </div>
              </th>
              <td data-label="Account Name">
                <div className="slds-truncate" title="Last Name">
                  {d.lastName}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;

/*
if (
    country === "Canada" || subsidiary === 'Abacus Data Systems Canada, Inc.'
 	 ){
    	records[i]['TaxCodeId'] = 119917;
 	 } 
    else {
    	switch (country) {
        case "United States":
          records[i]['TaxCodeId'] = 11201;
          break;
        case "United Kingdom":
          records[i]['TaxCodeId'] = 11202;
          break;
        default:
          records[i]['TaxCodeId'] = -8;
      }
  }

  */