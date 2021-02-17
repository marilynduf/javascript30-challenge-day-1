
//TODO array.prototype.some() : Check si au moins un element spécifique est présent. Return bool type
const womanName = women.some(name => name.first === 'Barbara');

//TODO array.prototype.every() : Permet de savoir si tous les éléments d'un tableau vérifient une condition donnée. Return bool type
const womenProgram = women.every(studie => studie.program === 'Génie mécanique');

//TODO array.prototype.find() : renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
//                              donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.
const womanSpecific = women.find(specific => specific.first === 'Geneviève');

//TODO array.prototype.findindex() :
const findIndex = women.findIndex(index => index.first === 'Geneviève');

console.log('nom :' + womanName);
console.log('Génie mécanique :' + womenProgram);
console.log('Id :' + womanSpecific.first + ' ' + womanSpecific.last + ' : ' + womanSpecific.program+ ' ' + ' ' );
console.log('Index :' + findIndex);

