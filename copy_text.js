clickboardInput.onclick = () => {
    navigator.clipboard.writeText('KURSACH')
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
}