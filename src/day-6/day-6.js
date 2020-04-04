//TODO: Variable Tableau vide pour y mettre les éléments
const tabData = [];

//TODO: Fonction qui «Fetch» les données .then()
const fetchedData = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//TODO: fonction qui met les élément dans le tableau .then()
fetch(fetchedData)
    .then(blob => blob.json())
    .then(data => tabData.push(...data)
);

//TODO: fonction qui trouve les match .filter()
//TODO: insensible majuscule et minuscule
function findMatches(lettersToMatch, tabData) {
    return tabData.filter(place => {
        const regex = new RegExp(lettersToMatch, 'gi'); //g = global, i = insensitive (insensible au min et maj)
        return place.city.match(regex) || place.state.match(regex)
        })
}

//TODO: fonction ajoute des virgules
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//TODO: fonction qui affiche les match
function displayMatches() {
    const matchArray = findMatches(this.value, tabData);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`);
        return `
            <li>
                <span class="place">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>`;
    }).join('');
    result.innerHTML = html;
}

//TODO: addeventlistener: change -> affiche les match
//TODO: addeventlistener: keyup -> affiche les match
const searchInput = document.querySelector('.input-search');
const result = document.querySelector('.result');

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

//TODO: fonction qui hightlight des lettres saisies dans les matchs qui s'affichent dans la liste
