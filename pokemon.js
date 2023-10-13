class pokemon {
    constructor(name,attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense=defense
        this.hp = hp
        this.luck = luck
    }  
    attackPokemon(enemi){
        if (this.islucky()){
            let degats =this.attack-enemi.defense
            enemi.hp-=degats
            console.log (this.name+" attaque "+enemi.name+" pour "+degats+" de degats, il lui reste "+enemi.hp+" hp.")
        }else{
            console.log("raté")
        }
    }
    islucky(){
        return this.luck>Math.random()
        }
    }
let pikachu = new pokemon ("pikachu", 17, 6, 50, 0.5)
let rondoudou = new pokemon ("rondoudou", 14, 8, 45, 0.6)

while (pikachu.hp>0 && rondoudou.hp>0){
    pikachu.attackPokemon(rondoudou)
    if (rondoudou.hp<=0){
        console.log("rondoudou est mort");
        break
    }
    rondoudou.attackPokemon(pikachu)
    if (pikachu.hp<=0){
        console.log("pikachu est mort")
    }

}




