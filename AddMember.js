
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
        mutation {
          memberCreate(email: "test@example.com", fullName: "Test User", password: "unMotDePasseSécurisé") {
            member {
              id
            }
          }
        }`,
    },
  });

  console.log("Membre ajouté avec succès:", JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error("Erreur lors de l'ajout du membre:", error);
}

}

fetchMembers();
