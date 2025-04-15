import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import * as queries from "../Graphs/Queries/Samples";
import { Link } from "react-router-dom";

const primaryButtonStyle: React.CSSProperties = {
  borderRadius: "10px",
  boxShadow: "0 2px gray",
  backgroundColor: "lightblue",
  color: "black",
  margin: "4px 2px"
}
export function Home() {
  const navigate = useNavigate();

  const categoriesQuery = useQuery(queries.fetchCategories);
  // const categoriesClicked = (category: String) => {
  //   alert(category);
  //   navigate("/search/" + category);
  // };
  return (
    <div>
      <h1> Welcome to the mall online</h1>
      <h2>
        In here you can find various shop, artisans and restaurant nearby you.
        Select what you're looking for to get started{" "}
      </h2>
      {
        categoriesQuery.loading && !categoriesQuery.error ? <h1> Loading.... </h1> :
          <div className="grid grid-cols-4 primary-button-style" >
            {categoriesQuery.data.categories.map((element: any) => {
              return (<Link
                to={{ pathname: "/search/" + element.name }} state={{
                  category_id: element.id
                }}
                style={primaryButtonStyle}
                key={element.id}
                className="rounded-full"
              >
                {element.name}
              </Link>)
            }
            )}
          </div>
      }

    </div>
  );
}
