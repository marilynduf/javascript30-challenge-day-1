
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
    // function keepColor(randomColor) {
    //     let keepedColor = randomColor;
    // }
    // var colors = ['#55ddc8', '#fffa6a', '#ff5a60'];
    // let test = document.querySelector('.key-animation');
    // console.log(test.style.backgroundColor);
    // let i = 0;
    // for (i; i < colors.length; i++) {
    //     // Pick a random color from the array 'colors'.
    //     let randomColor = colors[Math.floor(Math.random() * colors.length)];
    //     while (test.style.backgroundColor === randomColor) randomColor = colors[Math.floor(Math.random() * colors.length)];
    //     test.style.backgroundColor = randomColor;
    //     test.style.borderColor = randomColor;
    // }

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
