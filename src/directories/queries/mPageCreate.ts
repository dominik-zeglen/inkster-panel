import gql from "graphql-tag";

import { TypedMutation } from "../../api";
import { PageCreate, PageCreateVariables } from "./types/PageCreate";
import fPageField from "src/api/fragments/fPageField";

const mPageCreate = gql`
  ${fPageField}
  mutation PageCreate(
    $parentId: ID!
    $name: String!
    $fields: [PageFieldInput!]
  ) {
    createPage(input: { name: $name, parentId: $parentId, fields: $fields }) {
      errors {
        field
        code
      }
      page {
        id
        createdAt
        updatedAt
        name
        slug
        isPublished
        fields {
          ...PageFieldFragment
        }
      }
    }
  }
`;
export default TypedMutation<PageCreate, PageCreateVariables>(mPageCreate);
