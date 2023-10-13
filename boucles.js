//            BOUCLE
//             FOR
//Déclarer une variable a qui est égale à un entier positif
//Faire un console log de "oklm" autant de fois que la valeur de c


let c=5;
for(let i=0;i<c;i++){
    console.log('ca marche bien');
}

//          WHILE
//
//Déclarer une variable a qui est égal à 3
//Tant que a est plus petit que 9
//incrémenter a de 1
//si a est égal à 8 on arrête la boucle
//si a est égal à 7 on revient au début de la boucle
//on console.log(a)


let variable=3;
while(a<9){
    variable++
    if(variable==7){
        continue
    }
    if(variable==8){
        break
    }
    console.log(variable);
}
console.log("fin de la boucle après "+variable+" tours");