/* eslint-disable space-before-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */

// import { getCharacter } from "./lib/character.js";

const baseUrl = "https://rickandmortyapi.com/api/character";

const filterButton = document.querySelector(".header-filter__button");
const filterMenu = document.querySelector(".header-filter__dropdown");

export function filterCharacter(status) {
  filterButton.addEventListener("click", () => {
    const characterStatus = filterMenu.value;
    //   console.log(characterStatus);

    if (characterStatus === `all`) {
      url = `${url}`;
      console.log(url);
    } else if (characterStatus === `alive`) {
      url = `${url}?status=alive`;
      console.log(url);
    } else if (characterStatus === `dead`) {
      url = `${url}?status=dead`;
      console.log(url);
    } else {
      url = `${url}?status=unknown`;
      console.log(url);
    }
    return fetch(url).then((res) => res.json());
  });
}
console.log(url);
