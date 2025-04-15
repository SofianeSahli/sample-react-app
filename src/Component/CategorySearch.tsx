import React from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router";
import { fetShopsByCategoryId } from '../Graphs/Queries/Samples'
import { useQuery } from "@apollo/client";
import FormSample  from './segments/form-sample'
const CategorySearch = () => {
  const { category } = useParams();
  const { state } = useLocation()
  const query = useQuery(fetShopsByCategoryId, {
    variables: { id: parseInt(state.category_id) }
  })
  console.log(query?.error, query?.data)
  return (<div>

    <h2> List of {category}</h2>
    {query.loading && <h1> Loading data ....</h1>}
    {query.error && <h1> Some error occured </h1>}
    {
      (!query.loading && !query.error && query.data) && (<div><h1> Shop List</h1>
        {

          query.data.shopsByCategoryId.map((element: any) =>
          (
            <button key={element.id}>
              {element.name}
            </button>

          )
          )

        }

      </div>)
    }
    <FormSample/>
  </div>
  )
    ;
};

export default CategorySearch;
