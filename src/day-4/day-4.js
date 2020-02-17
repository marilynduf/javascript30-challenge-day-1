const inventors = [
    {first: 'Albert', last:'Einstein', year: 1879, passed:1955},
    {first: 'Isaac', last:'Galilei', year: 1643, passed:1727},
    {first: 'Galilée', last:'Galilei', year: 1564, passed:1642},
    {first: 'Nicolas', last:'Copernic', year: 1473, passed:1543},
    {first: 'Johannes', last:'Kepler', year: 1571, passed:1630},
    {first: 'Max', last:'Planck', year: 1858, passed:1947},
];

/***** filter() */

const fifteen = inventors.filter(inventor => inventor.year >= 1400 && inventor.year < 1600);
//console.table(fifteen);


 /***** map() */

//const fullNames = inventors.map(inventors => inventors.first + " " + inventors.last);
const fullNames = inventors.map(inventors => `${inventors.first} ${inventors.last}`);
//console.table(fullNames);


/***** sort() */

// const orderBylastName = inventors.sort(function (a, b) {
//     // note: on doit comparer les majuscule avec les majuscule et les minuscules avec les minuscules.
//     if (a.last > b.last){
//         return 1
//     }
//     else return -1;
// });
// Arrow function (ES6)
const orderBylastName = inventors.sort((a, b) => a.last > b.last ? 1 : -1);
    // note: on doit comparer les majuscule avec les majuscule et les minuscules avec les minuscules.

//console.table(orderBylastName);

/***** map() */
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément
// du tableau appelant.


/***** reduce() */
// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite
// chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
// output: une seule valeur
// Exercice: how many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) =>
{
    return total + (inventor.passed - inventor.year);
}, 0); // 0 est la valeur de déclaration de la variable total


/***** exer. 7 sort() */
// const pageWeb = 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris';
// const category = document.querySelector('mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(link => links.textContent)
//     .filter(streetName => streetName.includes('de'));

// for (let i = 0; i < inventors.length; i++) {
//     document.getElementById("array_cardio").innerHTML = inventors[i].first;
// }
// let app = document.querySelector('array_cardio');
// app.appendChild(list);

// Create an unordered list
let list = document.getElementById('array_cardio');

// Create a list item for each wizard
// and append it to the list
inventors.forEach(function (inventor) {
    let li = document.createElement('li');
    li.textContent = inventor.first;
    list.appendChild(li);
});