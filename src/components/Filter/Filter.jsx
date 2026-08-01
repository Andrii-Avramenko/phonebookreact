import { useState } from "react";

function Filter() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter