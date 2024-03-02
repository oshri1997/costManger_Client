import { useState } from "react";

import Report from "./Report.jsx";
const CostList = () => {
  const [generateData, setGenerateData] = useState([]);
  return (
    <div className="cost_list_container">
      <Report setGenerateData={setGenerateData} />
      <h2>Costs Report</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sum</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {generateData.length ? (
            generateData.map((item, index) => (
              <tr key={index}>
                <td>{item.sum}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CostList;
