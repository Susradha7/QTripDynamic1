import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    let response  = await fetch("http://43.205.157.72:8082/cities");
let data = await response.json();
// console.log(data);
return data;
  }catch(err){
    console.log("Error Occured");
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  console.log();
let citydatamodule = document.querySelector("#data");
citydatamodule.id = `${id}`;
 let imageElement = document.createElement("img");
 imageElement.src = `${image}`;
 imageElement.setAttribute("class","img-responsive");
//  let hElement = document.createElement("h2");
//  hElement.innerText = `${city}`;
let aElement = document.createElement("a");
aElement.href = `pages/adventures/?city=${id}` ;
 let cardElement = document.createElement("cards");
 cardElement.setAttribute("class","tile");
 cardElement.innerHTML=`
<div class="tile-text text-center">
  <h2>${city}</h2>
  <p>${description}</p>
</div>
`;
cardElement.appendChild(imageElement);
aElement.append(cardElement);
citydatamodule.appendChild(aElement);


}

export { init, fetchCities, addCityToDOM };
