import { getCharacter, clearCharacters } from "./lib/character.js";

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
