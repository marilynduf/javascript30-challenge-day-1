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
    }
    let keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

});
