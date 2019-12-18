import gql from "graphql-tag";

const fPageField = gql`
  fragment PageFieldFragment on PageField {
    slug
    type
    value
  }
`;

export default fPageField;
