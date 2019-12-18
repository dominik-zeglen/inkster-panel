import gql from "graphql-tag";

import { TypedQuery } from "../../api";
import { Page, PageVariables } from "./types/Page";
import fPageField from "src/api/fragments/fPageField";

const qPage = gql`
  ${fPageField}
  query Page($id: ID!) {
    page(id: $id) {
      id
      createdAt
      updatedAt
      name
      slug
      isPublished
      fields {
        ...PageFieldFragment
      }
      parent {
        id
      }
    }
  }
`;
export default TypedQuery<Page, PageVariables>(qPage);
