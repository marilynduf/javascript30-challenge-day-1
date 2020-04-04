const inventors = [
    {first: 'Geneviève', last:'B.', year: 1968, passed:1989},
    {first: 'Hélène', last:'C.', year: 1966, passed:1989},
    {first: 'Nathalie', last:'C.', year: 1966, passed:1989},
    {first: 'Barbara', last:'D.', year: 1967, passed:1989},
    {first: 'Anne-Marie', last:'E.', year: 1968, passed:1989},
    {first: 'Maud', last:'H.', year: 1960, passed:1989},
    {first: 'Maryse', last:'L.', year: 1964, passed:1989},
    {first: 'Barbara', last:'K.-W.', year: 1958, passed:1989},
    {first: 'Maryse', last:'L.', year: 1966, passed:1989},
    {first: 'Anne-Marie', last:'L.', year: 1966, passed:1989},
    {first: 'Sonia', last:'P.', year: 1966, passed:1989},
    {first: 'Michèle', last:'R.', year: 1968, passed:1989},
    {first: 'Annie', last:'St-A.', year: 1966, passed:1989},
    {first: 'Annie', last:'T.', year: 1968, passed:1989}
];
//TODO Afficher le tableau tel quel, par défault
//TODO Créer la forme (ligne, cellules...) dans laquelle le tableau sera affichées

const selected_array = document.querySelector('.selected_array');
const row_title = document.createElement('tr');
const first_name = document.createElement('td');
const last_name = document.createElement('td');
const year_born = document.createElement('td');
const year_passed = document.createElement('td');
first_name.textContent = 'Prénom';
last_name.textContent = 'Nom';
year_born.textContent = 'De';
year_passed.textContent = 'À';
row_title.appendChild(first_name);
row_title.appendChild(last_name);
row_title.appendChild(year_born);
row_title.appendChild(year_passed);
selected_array.appendChild(row_title);

inventors.forEach(elem => {
    //let selected_array = document.querySelector('.selected_array');

    let row = document.createElement('tr');
    let first_name = document.createElement('td');
    let last_name = document.createElement('td');
    let year_born = document.createElement('td');
    let year_passed = document.createElement('td');
    first_name.textContent = elem.first;
    last_name.textContent = elem.last;
    year_born.textContent = elem.year;
    year_passed.textContent = elem.passed;
    row.appendChild(first_name);
    row.appendChild(last_name);
    row.appendChild(year_born);
    row.appendChild(year_passed);

    selected_array.appendChild(row);
});
console.table(inventors);

const cardio_arrays = ['filter()', 'sort()', 'map()', 'reduce()']; // liste des méthodes pratiquées

let printArea = document.querySelector('#array_cardio');

const showSelectedArray = (name) => {

    document.querySelector(".selected_array").textContent = '';

    /* filter() */
    if (name === 'filter()') {
        const fifteen = inventors.filter(inventor => inventor.year >= 1400 && inventor.year < 1600);
        fifteen.forEach(element => {
            let display_test = document.querySelector(".selected_array");
            const every_element = document.createElement("div");
            every_element.textContent = element.first + ':' + element.year;
            display_test.appendChild(every_element);
        });
    }
    if (name === 'sort()') {
        const orderBylastName = inventors.sort((a, b) => a.last > b.last ? 1 : -1);
        orderBylastName.forEach(element => {
            let display_test = document.querySelector(".selected_array");
            const every_element = document.createElement("div");
            every_element.textContent = element.first + ' ' + element.last;
            display_test.appendChild(every_element);

        });
        console.table(orderBylastName);

    }
    if (name === 'map()') {
        const fullNames = inventors.sort((a, b) => a.last > b.last ? 1 : -1);
        fullNames.forEach(element => {
            let display_test = document.querySelector(".selected_array");
            const every_element = document.createElement("div");
            every_element.textContent = element.value;
            display_test.appendChild(every_element);
        });
    }
    if (name === 'reduce()') {
        const totalYears = inventors.reduce((total, inventor) =>
        {
            return total + (inventor.passed - inventor.year);
        }, 0); // 0 est la valeur de déclaration de la variable total
        const display_test = document.querySelector(".selected_array");
        const every_element = document.createElement("div");
        every_element.textContent = `${totalYears}`;
        display_test.appendChild(every_element);

    }

};

const dropdown = () => {

    const component = document.createElement("div");

    const input = createInput();
    const dropdown = showDropdown();

    component.appendChild(input);
    component.appendChild(dropdown);
    printArea.appendChild(component);
};

const createInput = () => {
    // Creates the input outline
    const input = document.createElement("div");
    input.classList = "input";
    input.addEventListener("click", toggleDropdown);

    // Creates the input placeholder content
    const inputPlaceholder = document.createElement("div");
    inputPlaceholder.classList = "input__placeholder";

    const placeholder = document.createElement("p");
    placeholder.textContent = "Methodes";
    placeholder.classList.add('placeholder');

    // Appends the placeholder and chevron (stored in assets.js)
    inputPlaceholder.appendChild(placeholder);
    //inputPlaceholder.appendChild(dropdownIcon());
    input.appendChild(inputPlaceholder);

    return input;
};

const showDropdown = () => {
    const structure = document.createElement("div");
    structure.classList.add("structure", "hide");

    cardio_arrays.forEach(element => {
        const { name } = element;
        const option = document.createElement("div");
        option.addEventListener("click", () => selectOption(element));
        //option.setAttribute("id", id);

        const n = document.createElement("h5");
        n.textContent = element;

        // const t = document.createElement("p");
        // t.textContent = `(${title})`;

        option.appendChild(n);
        //option.appendChild(t);
        structure.appendChild(option);
    });
    return structure;
};

const toggleDropdown = () => {
    const dropdown = document.querySelector(".structure");
    dropdown.classList.toggle("hide");

    const input = document.querySelector(".input");
    input.classList.toggle("input__active");
};

const selectOption = (name) => {
    const text = document.querySelector('.placeholder');
    text.textContent = name;
    text.classList.add('input__selected');
    toggleDropdown();
    showSelectedArray(name);

};

dropdown();
