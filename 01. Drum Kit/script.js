window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})

// Functions
function playSound(e) {
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return;

    if (key.classList[1] === 'playing') {
        key.classList.remove('playing');
    } else {
        key.classList.add('playing');
    }  
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}