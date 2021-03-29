/* eslint-disable quotes */
/* eslint-disable semi */

import { createCard } from "./build.js";
import { createUrl } from "./createUrl.js";

export function getCharacter() {
  const filterMenu = document.querySelector(".header-filter__dropdown");
  const characterStatus = filterMenu.value;
  const url = createUrl(characterStatus);

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
        createCard(character);
      });
    })

    .catch((Error) => {
      console.log(Error);
    });
}
