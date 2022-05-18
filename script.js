const darkModeToggle = document.getElementById('dark-mode-toggle')
let currentMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setMode(darkMode) {
    if (darkMode) {
        document.body.classList.add('dark-mode')
        darkModeToggle.src = darkModeToggle.dataset.darkmodesrc
    } else {
        document.body.classList.remove('dark-mode')
        darkModeToggle.src = darkModeToggle.dataset.lightmodesrc
    }
}

darkModeToggle.addEventListener('click', () => {
    currentMode = !currentMode
    setMode(currentMode)
})

setMode(currentMode)