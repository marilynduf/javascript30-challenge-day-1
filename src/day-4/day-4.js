const inventors = [
    {first: 'Albert', last:'Einstein', year: 1879, passed:1955},
    {first: 'Isaac', last:'Galilei', year: 1643, passed:1727},
    {first: 'Galilée', last:'Galilei', year: 1564, passed:1642},
    {first: 'Nicolas', last:'Copernic', year: 1473, passed:1543},
    {first: 'Johannes', last:'Kepler', year: 1571, passed:1630},
    {first: 'Max', last:'Planck', year: 1858, passed:1947},
];
const cardio_arrays = ['filter()', 'sort()', 'map()', 'reduce()'];

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
    placeholder.textContent = "Select methodes";
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