// const a = 56;
// console.log(a);

// let titre = document.querySelector("h1");
// console.log(titre);

// titre.className = "tittle";

// let notes = [1 , 2 , 56,[
//     56,'hello'
// ]];


// let age1 = prompt("saisissez votre age");
// let b = "";
// age1 += b;
// if(age1 <= 17){
//     console.log("vous n'etes pas majeur");
    
// }else{console.log("bienvenue");}

const age = 19;
const pays = 'fr';

switch(pays){
    case 'fr' :
        console.log("je suis français");
        break;
    case "en" : 
    console.log("je suis anglais");
    break;
    default :alert("allez vous faire foutre");

        
} 

let ar = prompt("veuillez entrer un chiffre");
let b = "";
ar += b;
console.log(ar);


let suffix = 2; // affiche 2
console.log(suffix);

 suffix += 3;
 console.log(suffix); // affiche 5 


 // les boucles 
 let i = 0;
 while(i < 10){
    console.log('bonjour ' + i);
    
    i++;
 }

 // parcourir un tableau 
 const notes1 = [15,25,36,95];
for(i = 0; i < notes1.length;i++){
    console.log(notes1[i]);
   } 
   
   // on peut aussi utiliser la boucle for in sur un tableau 
for(let i in notes1){
 //   console.log(i);
    }
 for(let i of notes1){
    console.log(i);
    
 }
 
 
const person = {
    firstname : 'john',
    lastname : 'doe'
 }
 
 for(let i in person){  // nous ne pouvons pas utiliser une boucle for of dans ce cas car person est un oject
    console.log(i +' : ' +person[i]);
    
 }
 
 let chiffre = prompt("rentrez un chiffre");
    if(chiffre > 10 || chiffre < 0){
        console.log("le nombre n'est pas entre 0 et 10");
        
    }else{
            // while(chiffre >= 0){
            //     console.log(chiffre);
            //     chiffre--;
            // }
            for(let i = chiffre; i >= 0; i--){
                console.log(i);
                
            }
    }

    const guess = 8;
    const gr = prompt("rentrez un chiffre");
    if(gr == guess){
        console.log("victoire c'est bien le 8" );
        
    }else{
        alert("perdu");
    }


    function personnage(age,poids,taille){
        this.age = age;
        this.poids = poids;
        this.taille = taille;
        this.presentation = () =>{
            console.log("votre age est de "+this.age+" ans votre poids est "+this.poids+" kg et vous faites "+this.taille+"m .");
            
        }
    }

    const alain = new personnage(56,80,1.80);
    console.log(alain.presentation());
    


    function canDrive(age,pays){
           if(age > 18 && pays === "fr" || age > 16 && pays ==="us" ){
            return true;
           }else{
            return false;
           }
    }
    console.log(canDrive(15,"fr")); // la reponse retourne false
     console.log(canDrive(19,"fr")); // retourne true
    
    const canDrive1 = function (age,pays) {
        if(age > 18 && pays === "fr" || age > 16 && pays ==="us" ){
         return true;
        }else{
         return false;
        }
 }
