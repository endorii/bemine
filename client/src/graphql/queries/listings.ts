import { gql } from "@apollo/client";

export const GET_CATEGORY_PRODUCTS = gql`
    query GetCategoryProducts($path: String!) {
        categoryProducts(path: $path) {
            listings {
                id
                title
                price
                images
                location
                createdAt
            }
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY_PATH = gql`
    query getProductsByCategoryPath($path: String!) {
        productsByCategoryPath(path: $path) {
            id
            title
            condition
            location
            price
            createdAt
        }
    }
`;
