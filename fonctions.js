//Déclarer trois variables a = "Jean" et b="Paul" et result
//Déclarer une fonction checkName (qui possède 2 paramètres) qui vérifie si les deux noms sont identiques
//console.log le result

let a = "Jean"
let b = "Paul"
let result = checkname (a, b) 

function checkname (name1, name2) {
    if (name1===name2){
    return "les prenoms sont indentiques"
} else {
    return "les prenoms sont differents"
}
}
console.log (result)