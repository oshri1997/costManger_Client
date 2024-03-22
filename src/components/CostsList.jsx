//Developers:
//first_name:  Oshri  | last_name: Moalem  | id:   316125277
//first_name: Elinor | last_name: Zalogin | id:   208324863

import { useState } from "react";
import Report from "./Report.jsx";

// Define the CostList component to display the costs
const CostList = () => {
  const [generateData, setGenerateData] = useState([]);
  return (
    <div className="cost__list__container">
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
          {generateData.length ? ( // Check if generateData has data
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
