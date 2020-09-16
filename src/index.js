const div = document.querySelector("div")
const outerDiv = document.querySelector("#outer-node")
const divs = document.querySelectorAll("div")

const body = document.querySelector("body")
body.style.backgroundColor = "yellow"
const containerP = document.querySelector("#container p")
const img = document.createElement("img")
img.src = "http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg"
containerP.append(img)


// example of adding an event listener
// img.addEventListener('click', function(){
//     alert("Boo!")
// })


const container = document.querySelector("#container")
// container.removeChild(containerP)  example of removing child node


//examples of adding elements to the DOM, in this case img elements

//oldschool function sytax
dankMemes.forEach(function(url) {
    const newImgTag = document.createElement("img")
    newImgTag.src = url
    containerP.append(newImgTag)
})

// arrow fn syntax
// dankMemes.forEach((url) => {
//     const newImgTag = document.createElement("img")
//     newImgTag.src = url
//     containerP.append(newImgTag)
// })