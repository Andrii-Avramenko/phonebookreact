import { useState } from "react";

function Filter({ onChange }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    onChange(value);
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={filter} name="filter" onChange={handleChange} />
    </div>
  );
}

export default Filter;
