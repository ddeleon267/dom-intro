const body = document.querySelector('body')
body.style.backgroundColor="yellow"

const container = document.querySelector("#container")
const myImg = document.createElement('img')
myImg.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*"

container.appendChild(myImg)

// myImg.addEventListener('click', function(){
//     alert("Boo!")
// })

const nestedH1 = document.querySelector('#outer-node h1')
console.log(nestedH1)
const containerPtag = document.querySelector('#container p')
container.removeChild(containerPtag)

console.log(dankMemes)
dankMemes.forEach(memeUrl => {
    const newImgTag = document.createElement('img')
    newImgTag.src = memeUrl
    nestedH1.appendChild(newImgTag)
})

