//Developers:
//first_name:  Oshri  | last_name: Moalem  | id:   316125277
//first_name: Elinor | last_name: Zalogin | id:   208324863

import React, { useState } from "react";

// Define the Report component to choose the month and year
const Report = ({ setGenerateData }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleChangeMonth = (e) => {
    setSelectedMonth(e.target.value);
  };
  // Handle the change of the month
  const handleChangeYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const generateReport = async () => {
    // Generate the report
    if (selectedMonth && selectedYear) {
      const db = await window.idb.openCostsDB("costsdb", 1);
      const allData = await db.getAllCosts();
      const filteredData = allData.filter(
        (item) => item.month === +selectedMonth && item.year === +selectedYear
      );
      setGenerateData(filteredData); // Set the generated data
    }
  };

  return (
    <div className="report__container">
      {/*  Add a select element for the month */}
      <select onChange={handleChangeMonth}>
        <option value="">Choose Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      {/*  Add a select element for the year */}
      <select onChange={handleChangeYear}>
        <option value="">Choose Year</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select>
      <button onClick={generateReport}>Generate Report</button>
    </div>
  );
};

export default Report;
