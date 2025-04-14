import React from "react";
import { useParams } from "react-router";
const CategorySearch = () => {
  const { category } = useParams();

  return <h2> List of {category}</h2>;
};

export default CategorySearch;
