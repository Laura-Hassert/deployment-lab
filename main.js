document.querySelector('#button').addEventListener("click", () => {
    window.open("https://www.ma-ka-rohn.com/collections/best-macaron-flavors")
});

document.querySelector('#button').addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "lightsalmon"
});

document.querySelector('#button').addEventListener('mouseoff', (event) => {
    event.target.style.backgroundColor = "lightsalmon"
    event.target.style.color = "black"
});

document.querySelector('#image').addEventListener('mouseover', () => {
    alert('OMG those look SO good!')
})

