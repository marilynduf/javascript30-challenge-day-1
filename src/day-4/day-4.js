const inventors = [
    {first: 'Albert', last:'Einstein', year: 1979, passed:1955},
    {first: 'Isaac', last:'Galilei', year: 1643, passed:1727},
    {first: 'Galilée', last:'Galilei', year: 1564, passed:1642},
    {first: 'Nicolas', last:'Copernic', year: 1473, passed:1543},
];

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);