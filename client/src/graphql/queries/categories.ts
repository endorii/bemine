import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            title
            slug
            banner
            children {
                id
                slug
                title
            }
        }
    }
`;
