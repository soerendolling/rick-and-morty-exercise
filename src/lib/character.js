/* eslint-disable quotes */
/* eslint-disable semi */

const url = "https://rickandmortyapi.com/api/character";

export function getCharacter() {
  const filterMenu = document.querySelector(".header-filter__dropdown");
  const characterStatus = filterMenu.value;
  let url = createUrl(characterStatus);

  console.log(url);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((dataObject) => {
      dataObject.results.forEach((character) => {
        const content = document.querySelector(".main-content");
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

        if (character.status === "Alive") {
          article.style.backgroundColor = "var(--card-background-alive)";
          article.style.color = "var(--card-text-alive)";
        } else if (character.status === "Dead") {
          article.style.backgroundColor = "var(--card-background-dead)";
          article.style.color = "var(--card-text-dead)";
        } else {
          article.style.backgroundColor = "var(--card-background-unknown)";
          article.style.color = "var(--card-text-unknown)";
        }

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

    .catch((Error) => {
      console.log(Error);
    });
}

function createUrl(characterStatus) {
  let url;
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const search = document.querySelector(".header-filter__search");
  const searchInput = search.value;
  if (characterStatus === "alive") {
    url = `${baseUrl}?name=${searchInput}&status=alive`;
    console.log(url);
  } else if (characterStatus === "dead") {
    url = `${baseUrl}?name=${searchInput}&status=dead`;
    console.log(url);
  } else if (characterStatus === "unknown") {
    url = `${baseUrl}?name=${searchInput}&status=unknown`;
    console.log(url);
  } else if (characterStatus === "all") {
    url = `${baseUrl}?name=${searchInput}`;
    console.log(url);
  }
  return url;
}

export function clearCharacters() {
  const characterElements = document.querySelectorAll(".main-character-card");
  characterElements.forEach((article) => article.remove());
}
