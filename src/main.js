/* eslint-disable space-before-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */

import { getCharacter } from "./lib/character.js";
import { clearCharacters } from "./lib/character.js";

const loadButton = document.querySelector(".header-load__button");

loadButton.addEventListener("click", () => {
  clearCharacters();
  getCharacter();
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearCharacters();
  getCharacter();
});
