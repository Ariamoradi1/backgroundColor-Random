let colorArray = ['red', 'green', 'blue', 'yellow', 'black']


let user

setInterval(function () {

user = Math.floor(Math.random()*colorArray.length)

document.body.style.backgroundColor = colorArray[user]



}, 2000)

