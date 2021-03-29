export function createUrl(characterStatus) {
  let url;
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const search = document.querySelector(".header-filter__search");
  const searchInput = search.value;
  if (characterStatus === "alive") {
    url = `${baseUrl}?name=${searchInput}&status=alive`;
  } else if (characterStatus === "dead") {
    url = `${baseUrl}?name=${searchInput}&status=dead`;
  } else if (characterStatus === "unknown") {
    url = `${baseUrl}?name=${searchInput}&status=unknown`;
  } else if (characterStatus === "all") {
    url = `${baseUrl}?name=${searchInput}`;
  }
  return url;
}
