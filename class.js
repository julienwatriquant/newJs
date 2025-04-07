const a = {a : 2};
console.log(a);

class Personnage{
    constructor(age,taille,nom){
        this.age = age;
        this.taille = taille;
        this.nom = nom;
        this.presentation = ()=>{
            console.log(`bonjour je m'appelle ${nom} , j'ai ${age} ans et je mesure ${taille} m`);
            
        }
    }
}

let alain = new Personnage(43,1.8,'alain delon');
alain.presentation();

const animals = ['giraphe','lapin','poule'];
console.log(animals);
// En JavaScript, push est une méthode. une méthode est une fonction attachée à un objet et .push() est une fonction qui est attachée aux tableaux (Array).
animals.push('serpent');
console.log(animals);

const design = document.querySelector('h1');
//console.log("click");
design.style.backgroundColor = 'aqua';

design.addEventListener("mouseup", ()=>{
    design.style.color = 'pink';
})

design.addEventListener("mouseover", ()=>{
    document.body.style.backgroundColor = 'green';
})
design.addEventListener("click", (e) =>{
     document.body.style.backgroundColor = 'white';
     
})