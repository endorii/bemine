import { gql } from "@apollo/client";

export const GET_CATALOG_DATA = gql`
    query GetCatalogData($categorySlug: String!) {
        catalog(categorySlug: $categorySlug) {
            breadcrumbs {
                id
                title
                slug
            }

            subcategories {
                id
                title
                slug
                banner
                path
            }

            totalProducts

            filters {
                id
                name
                label
                type
                values {
                    value
                    label
                    count
                }
            }
        }
    }
`;
