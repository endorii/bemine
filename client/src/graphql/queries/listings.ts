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

export const GET_LISTING_PAGE = gql`
    query getListingPageData($id: String!) {
        listingPageData(id: $id) {
            breadcrumbs {
                id
                title
                slug
            }
            listing {
                id
                title
                description
                condition
                images
                views
                category {
                    path
                }
                values {
                    value
                    attribute {
                        label
                    }
                }
                location
                price
                createdAt
                user {
                    email
                    phone
                    name
                    avatarUrl
                    isOnline
                    lastSeenAt
                    createdAt
                }
            }
        }
    }
`;
