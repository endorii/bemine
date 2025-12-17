export async function fetchGraphQL(query: string, variables = {}) {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();
    console.log("GraphQL response:", json);
    if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        throw new Error("Failed to fetch GraphQL data");
    }

    return json.data;
}
