import { gql } from "@apollo/client";

export const GET_SECTIONS = gql`
    query sections {
        section {
            id
            title
            slug
            banner
            categories {
                id
                slug
                title
            }
        }
    }
`;
