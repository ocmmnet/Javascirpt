let personnage = "Albert"
let radio = ["Anissa-wejdene", "mockingbird-eminem", "skitzo-travis scott","Onizuka - PNL", "Jocelyn Flores - XXXTentacion"]
let hp=10
let feuxRouge=30
let changement=0

for (let i=0;i<29;i++){
    feuxRouge-=1
    let musiqueTaxi=radio [Math.floor(Math.random()*5)]
    console.log("la musique jouée est "+musiqueTaxi+" est il reste "+feuxRouge+" feux rouge")
    if(musiqueTaxi=="Anissa-wejdene"){
        hp-=1 
        console.log("il reste a albert "+hp+ " de santé mantale")
        if (hp<=0){
            console.log("!! E X P L O S I O N !!")
            break
        } else{
            changement+=1
        }
    }
    
}

if(hp>0) {
    console.log("Albert est bien arrivé et il lui a fallu "+changement+ " changements de taxi pour y arriver")
}

