import { DocumentNode, gql } from '@apollo/client';

export const login = ({ schema }: { schema: string }): DocumentNode => gql`
  mutation signIn($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      ${schema}
    }
  }
`;

export const signOut = (): DocumentNode => gql`
  mutation signOut {
    signOut {
      response
    }
  }
`;
