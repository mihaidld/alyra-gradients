import React, { useContext } from "react";
import Gradient from "./Gradient/index";
import { GradientContext } from "./../context/GradientsContext";
import { FilterContext } from "./../context/FilterContext";

const GradientsList = () => {
  const { filter } = useContext(FilterContext); //je recupere filter seulement depuis value of object FilterContext
  const { gradients } = useContext(GradientContext);
  console.log(filter);
  console.dir(FilterContext);
  console.dir(FilterContext.Provider);
  const filteredGradients = gradients.filter((el) => {
    if (filter === "all") {
      return true;
    }
    return el.tags.includes(filter);
  });

  return (
    <ul className="row list-unstyled">
      {filteredGradients.map((el) => {
        const { name, start, end, tags = [] } = el;
        return (
          <Gradient
            key={el.name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default GradientsList;
