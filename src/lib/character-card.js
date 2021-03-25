// const url = 'https://rickandmortyapi.com/'

// export const getCharacter = fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json()
//     } else {
//       throw new Error(response.status)
//     }
//   })
//   .then((dataObject) => {
//     dataObject.results.forEach((character) => {
//       const section = document.createElement("section");
//       section.classList.add("person");
//       document.body.append(section);

//       const h2 = document.createElement("h2");
//       h2.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;
//       section.append(h2);

//       const img = document.createElement("img");
//       img.src = `${person.picture.large}`;
//       img.alt = `${person.name.first}`;
//       section.append(img);
//       console.log(person);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
