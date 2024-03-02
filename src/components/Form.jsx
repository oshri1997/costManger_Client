import { useState } from "react";

const Form = () => {
  const [item, setItem] = useState({
    sum: "",
    category: "FOOD",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!item.sum || !item.description) throw new Error("Please fill all the fields");
      const db = await window.idb.openCostsDB("costsdb", 1);
      const newCost = {
        sum: +item.sum,
        category: item.category,
        description: item.description,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      };
      await db.addCost(newCost); // Add the new cost to the database
      setItem({
        sum: "",
        category: "FOOD",
        description: "",
      });

      alert("Cost added successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="sum"
          placeholder="Sum"
          value={item.sum}
          onChange={handleChange}
        />
        <select name="category" value={item.category} onChange={handleChange}>
          <option value="FOOD">Food</option>
          <option value="HEALTH">Health</option>
          <option value="EDUCATION">Education</option>
          <option value="TRAVEL">Travel</option>
          <option value="HOUSING">Housing</option>
          <option value="OTHER">Other</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;
