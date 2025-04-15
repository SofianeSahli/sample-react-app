import { gql } from "@apollo/client";

const fetchCategories = gql`
  query {
     categories { 
     id 
     name
     }
  }
`;

const fetShopsByCategoryId = gql`
query shopsByCategoryId($id : Int! ){ 
shopsByCategoryId(id : $id) {
  name 
  id 
}
}
`
const insertShop = gql`
  mutation SubmitForm($name: String!, $phone: String!, $email: String!) {
    submitForm(name: $name, phone: $phone, email: $email)
  }
`;
export { fetchCategories, fetShopsByCategoryId ,insertShop};
