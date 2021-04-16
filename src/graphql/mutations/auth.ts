import { DocumentNode, gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const login = ({ schema }: { schema: string }): DocumentNode => gql`
  mutation signIn($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      ${schema}
    }
  }
`;
