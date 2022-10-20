// document.body
document.addEventListener('keypress', onKeyPress)


const KeyToSound = {
    'a': 'clap',
    's': 'boom',
    'd': 'hihat',
    'f': 'kick',
    'g': 'openhat',
    'h': 'ride',
    'j': 'snare',
    'k': 'tink',
    'l': 'tom',
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)
}


function playSound(sound) {
    if (!sound) {
        return
    }
    const audioTag = document.querySelector('#' + sound)
    audioTag.currentTime = 0 
    audioTag.play()
}
const keyTable = [];
keyTable.push("a")
console.log(keyTable)





// Date.now()