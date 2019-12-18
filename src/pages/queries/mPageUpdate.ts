import gql from "graphql-tag";

import { TypedMutation } from "../../api";
import { PageUpdate, PageUpdateVariables } from "./types/PageUpdate";
import fPageField from "src/api/fragments/fPageField";

const mPageUpdate = gql`
  ${fPageField}
  mutation PageUpdate($id: ID!, $input: PageUpdateInput!) {
    updatePage(id: $id, input: $input) {
      errors {
        code
        field
      }
      page {
        id
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
export default TypedMutation<PageUpdate, PageUpdateVariables>(mPageUpdate);
