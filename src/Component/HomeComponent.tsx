import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import connectionTestQuery from "../Graphs/Queries/Samples";
export function Home() {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      title: "Clothing",
    },
    {
      id: 2,
      title: "Groceries",
    },
    {
      id: 3,
      title: "Fast food",
    },
    {
      id: 4,
      title: "Restaurant",
    },
    {
      id: 5,
      title: "Tools",
    },
  ];
  const queryResult = useQuery(connectionTestQuery);
  console.log(queryResult);
  const categoriesClicked = (category: String) => {
    alert(category);
    navigate("/search/" + category);
  };
  return (
    <div>
      <h1> Welcome to the mall online</h1>
      <h2>
        In here you can find various shop, artisans and restaurant nearby you.
        Select what you're looking for to get started{" "}
      </h2>
      <div className="grid grid-cols-1">
        {categories.map((element) => (
          <button
            key={element.id}
            onClick={() => categoriesClicked(element.title)}
            className="rounded-full"
          >
            {element.title}
          </button>
        ))}
      </div>
    </div>
  );
}
