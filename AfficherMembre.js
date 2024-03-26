
import axios from 'axios';


async function fetchMembers() {
  try {
    const response = await axios({
      method: "POST",
      url: `https://test95100.memberful.com/api/graphql`, // Remplace par votre url
      headers: {
        Authorization: `Bearer jfgbJfn6m6j1jaxR4XsLj9Yk`, // Remplacez `jfgbJfn6m6j1jaxR4XsLj9Yk` par votre clé API réelle
        "Content-Type": "application/json",
      },
      data: {
        query: `
          {
            members(first: 10) {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
              edges {
                node {
                  id
                  email
                  fullName
                  subscriptions {
                    id
                    plan {
                      id
                      name
                      priceCents
                    }
                  }
                }
              }
            }
          }`,
      },
    });

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error);
  }
}

fetchMembers();
