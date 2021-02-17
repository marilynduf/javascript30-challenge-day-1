//Day2
function setDate() {
    const timeNow = new Date();

    const sec = timeNow.getSeconds();
    const secondes = ("0" + sec).slice(-2);
    const min = timeNow.getMinutes();
    const minutes = ("0" + min).slice(-2);
    const h = timeNow.getHours();
    const heures = ("0" + h).slice(-2);

    let horloge = document.getElementById('horloge');
    horloge.innerHTML = `${heures} h ${minutes} min ${secondes}`;

    let degreSecondes = (secondes * 6) + 90;
    let degreMinutes = (minutes * 6) + 90;
    let degreHeures = (heures * 6) + 90;

    //degré Secondes
    let aiguilleSecondes = document.querySelector('.sec');
    aiguilleSecondes.style.transform = `rotate(${degreSecondes}deg)`;
    //degré Minutes
    let aiguilleMinutes = document.querySelector('.min');
    aiguilleMinutes.style.transform = `rotate(${degreMinutes}deg)`;
    //degré heure
    let aiguilleHeures = document.querySelector('.heure');
    aiguilleHeures.style.transform = `rotate(${degreHeures}deg)`;
}
setInterval(setDate, 1000);
