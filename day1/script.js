const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActtiiveClasses()
        panel.classList.add('active')
    })
})

function removeActtiiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })


}