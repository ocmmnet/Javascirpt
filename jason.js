let PrenomTueur = "Jason"
let caractéristiques = ["grand/e", "fort/e", "blond/e", "gentil/le","drole"]
let personnages = ["Ines", "Thibaut", "Zoé", "Pierre", "Jean-Louis-David"]
let hp = 100
let stats = [[0.8, 0.1, 0.1], [0.4, 0.5, 0.1], [0.5, 0.2, 0.3], [0.7, 0.2, 0.1], [0.6, 0.1, 0.3]]; 
let joueurs = [];                                                                             
let survivantsMorts = [];                                                                   
                                                                    

class Personnage {

    constructor(nom, caractéristique, probaMort, probaDegats, probasacrifice) {
        this.nom = nom;
        this.caractéristique = caractéristique;
        this.probaMort = probaMort;
        this.probaDegats = probaDegats;
        this.probasacrifice = probasacrifice;

    }
}

personnages.forEach(nom => { 
    let i = Math.floor(Math.random() * caractéristiques.length); 
    let caractéristique = caractéristiques.splice(i, 1);                        

    let j = Math.floor(Math.random() * stats.length);            
    let statPerso = stats.splice(j, 1);                                         

    let joueur = new Personnage(nom, caractéristique, statPerso[0][0], statPerso[0][1], statPerso[0][2]);
    joueurs.push(joueur)
});

function combat() { 
    let mort = "";                      

    if (joueurs.length >= 1 && hp > 0) {
        let chiffreSurvivantAleatoire = Math.floor(Math.random() * joueurs.length);
        let survivantCible = joueurs[chiffreSurvivantAleatoire]
        attaqueJason(survivantCible, chiffreSurvivantAleatoire)
        

    } else if (joueurs.length >= 1 && hp <= 0) {

        for (let i = 0; i < survivantsMorts.length; i++) {
            let test = survivantsMorts[i]; 

            if (survivantsMorts.length > 1) {
                if (test == survivantsMorts[survivantsMorts.length - 1]) {
                    mort += `et ${test}`;                                                 

                } else if (test == survivantsMorts[survivantsMorts.length - 2]) {
                    mort += `${test} `                                                     
                } else {
                    mort += `${test}, `;
                }
            } 
            else {
                mort += `${test}`
            }
        }

        if (!mort) {                                                                        
        console.log("Jason a été tué, il n'y a aucune victime")                             
        } else {
            console.log("Jason a été tué mais ", mort + " sont morts")
        }

    } else if (joueurs.length == 0 && hp > 0) {
        console.log("Jason a gagné, tous le monde est mort");

    } else if (joueurs.length == 0 && hp <= 0) {
        console.log("Egalité, tout le monde est mort...", mort);
    }

}

function attaqueJason(survivantCible, chiffreSurvivantAleatoire) {                              
    let valeurAleatoire = Math.random();

    if (valeurAleatoire < survivantCible["probaMort"]) {
        console.log("Jason a tué", survivantCible["nom"]);
        survivantsMorts.push(survivantCible["nom"]);
        joueurs.splice(chiffreSurvivantAleatoire, 1);

      } else if (valeurAleatoire < survivantCible["probaMort"] + survivantCible["probaDgt"]) {
        console.log(survivantCible["nom"],"esquive et met 10 dégâts à Jason !");
        hp -= 10;

      } else  { 
        console.log(survivantCible["nom"] ,"se sacrifie et met 15 dégâts à Jason !");
        hp -= 15;
        survivantsMorts.push(survivantCible["nom"]);
        joueurs.splice(chiffreSurvivantAleatoire, 1);
      }


    console.log("Survivants morts :", survivantsMorts);
    combat()
    };


combat()