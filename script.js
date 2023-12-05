function catAndMouse(x, y, z) {
// 
// find the mimimum distanse
// if else statement 
// let's go

let catA = Math.abs(x-z)
let catB = Math.abs(y-z)

if (catA < catB) {
    return "Cat B"
}

else if (catB < catA) {
    return "Cat A"
}

else {
    return "Mouse C"
}



}

console.log(catAndMouse(2,5,4));