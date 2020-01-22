//Day1
window.addEventListener('keydown', function(e) {

    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let keysound = document.querySelector(`.key[data-key='${e.keyCode}']`);

    function displayKeypressed() {
        let keypressed = document.getElementById('keypressed');
        keypressed.classList.add('keypressed-animation');
        if (e.code === 'Space') return keypressed.innerHTML = `${e.code}`;
        keypressed.innerHTML = `${e.key}`;
        function removeKeyTransition(e){
            this.classList.remove('keypressed-animation');
        }
        keypressed.addEventListener('transitionend', removeKeyTransition);
    }
    displayKeypressed();

    if(!audio) return;

    // TODO: Repartir l'audio à chaque fois que l'on clique sur une touche: On n'attends pas que l'audio soit joué au complet pour le rejouer
    audio.currentTime = 0; // rewind the audio

    // TODO: Faire jouer l'audio
    audio.play();

    // TODO: Animer les touches pressées (transition)
    keysound.classList.add('key-animation'); // add animation class

    // TODO: retirer l'animation des touches pressées (transitionend), un peu comme un effet «toggle»
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('key-animation'); // remove animation
        // test.style.backgroundColor = 'transparent';
        // test.style.borderColor = '#1a2c39';
    }
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

});

//Day2
function setDate() {
    const timeNow = new Date();

    const heures = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const secondes = timeNow.getSeconds();

    let horloge = document.getElementById('horloge');
    horloge.innerHTML = `${heures}:${minutes}:${secondes}`;


    let degreSecondes = ((secondes / 60) * 360);
    let degreMinutes = ((minutes / 60) * 360);
    let degreHeures = ((heures / 60) * 360);

    //degré Secondes
    let aiguilleSecondes = document.querySelector('.sec');
    aiguilleSecondes.style.transform = `rotate(${degreSecondes}deg)`;
    //degré Minutes
    let aiguilleMinutes = document.querySelector('.min');
    aiguilleMinutes.style.transform = `rotate(${degreMinutes}deg)`;
    //degré heure
    let aiguilleHeures = document.querySelector('.min');
    aiguilleHeures.style.transform = `rotate(${degreHeures}deg)`;
}
setInterval(setDate, 1000);
