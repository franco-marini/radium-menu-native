import { DocumentNode, gql } from '@apollo/client';

export const checkForeignToken = (): DocumentNode => gql`
  query checkForeignToken {
    checkForeignToken {
      token
    }
  }
`;
