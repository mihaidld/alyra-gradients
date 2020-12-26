import React, { useContext } from "react";
import { FilterContext } from "./../context/FilterContext";
import { GradientContext } from "./../context/GradientsContext";

const GradientsSelect = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { uniqueTags } = useContext(GradientContext);
  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filter by tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        {uniqueTags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GradientsSelect;
