/* eslint-disable semi */
/* eslint-disable quotes */
const url = "https://rickandmortyapi.com/api/character";

export const getCharacter = fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  .then((dataObject) => {
    dataObject.results.forEach((character) => {
      const content = document.querySelector("main-content");
      const article = document.createElement("article");
      article.classList.add("main-character-card");
      content.append(article);

      const img = document.createElement("img");
      img.classList.add("character-card__image");
      img.src = `${character.image}`;
      img.alt = `${character.name}`;
      article.append(img);

      const name = document.createElement("div");
      name.classList.add("character-card__name");
      name.textContent = `Name:${character.name}`;
      article.append(name);

      const status = document.createElement("div");
      status.classList.add("character-card__status");
      status.textContent = `Status:${character.status}`;
      article.append(status);

      const species = document.createElement("div");
      species.classList.add("character-card__species");
      species.textContent = `Species:${character.species}`;
      article.append(species);

      const gender = document.createElement("div");
      gender.classList.add("character-card__gender");
      gender.textContent = `Gender:${character.gender}`;
      article.append(gender);

      const location = document.createElement("div");
      location.classList.add("character-card__location");
      location.textContent = `Location:${character.location.name}`;
      article.append(location);
    });
  })
  .catch((error) => {
    console.log(error);
  });
