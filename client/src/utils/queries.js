import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
     me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
          }
        }
      }
  `
  ;

  // might have to switch user & me ?