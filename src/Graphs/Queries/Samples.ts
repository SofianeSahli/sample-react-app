import { gql } from "@apollo/client";

const connectionTestQuery = gql`
  query {
    echo(message: "Ah ouais")
  }
`;
export default connectionTestQuery;
