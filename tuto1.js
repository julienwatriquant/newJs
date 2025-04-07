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

// const age = 19;
// const pays = 'fr';

// switch(pays){
//     case 'fr' :
//         console.log("je suis français");
//         break;
//     case "en" : 
//     console.log("je suis anglais");
//     break;
//     default :alert("allez vous faire foutre");

        
// } 

// let ar = prompt("veuillez entrer un chiffre");
// let b = "";
// ar += b;
// console.log(ar);


// let suffix = 2; // affiche 2
// console.log(suffix);

//  suffix += 3;
//  console.log(suffix); // affiche 5 


//  // les boucles 
//  let i = 0;
//  while(i < 10){
//     console.log('bonjour ' + i);
    
//     i++;
//  }

//  // parcourir un tableau 
//  const notes1 = [15,25,36,95];
// for(i = 0; i < notes1.length;i++){
//     console.log(notes1[i]);
//    } 
   
//    // on peut aussi utiliser la boucle for in sur un tableau 
// for(let i in notes1){
//  //   console.log(i);
//     }
//  for(let i of notes1){
//     console.log(i);
    
//  }
 
 
// const person = {
//     firstname : 'john',
//     lastname : 'doe'
//  }
 
//  for(let i in person){  // nous ne pouvons pas utiliser une boucle for of dans ce cas car person est un oject
//     console.log(i +' : ' +person[i]);
    
//  }
 
//  let chiffre = prompt("rentrez un chiffre");
//     if(chiffre > 10 || chiffre < 0){
//         console.log("le nombre n'est pas entre 0 et 10");
        
//     }else{
//             // while(chiffre >= 0){
//             //     console.log(chiffre);
//             //     chiffre--;
//             // }
//             for(let i = chiffre; i >= 0; i--){
//                 console.log(i);
                
//             }
//     }

//     const guess = 8;
//     const gr = prompt("rentrez un chiffre");
//     if(gr == guess){
//         console.log("victoire c'est bien le 8" );
        
//     }else{
//         alert("perdu");
//     }


//     function personnage(age,poids,taille){
//         this.age = age;
//         this.poids = poids;
//         this.taille = taille;
//         this.presentation = () =>{
//             console.log("votre age est de "+this.age+" ans votre poids est "+this.poids+" kg et vous faites "+this.taille+"m .");
            
//         }
//     }

//     const alain = new personnage(56,80,1.80);
//     console.log(alain.presentation());
    


//     function canDrive(age,pays){
//            if(age > 18 && pays === "fr" || age > 16 && pays ==="us" ){
//             return true;
//            }else{
//             return false;
//            }
//     }
//     console.log(canDrive(15,"fr")); // la reponse retourne false
//      console.log(canDrive(19,"fr")); // retourne true
    
//     const canDrive1 = function (age,pays) {
//         if(age > 18 && pays === "fr" || age > 16 && pays ==="us" ){
//          return true;
//         }else{
//          return false;
//         }
//  }

//  function greeting(name){
//     console.log(`bonjour ${name}`);
    
//  }
//  greeting("john" .toUpperCase()); // toUpperCase() permet de changer en majuscule
//  greeting("paula");

//  let nombre = prompt("rentrez un chiffre");
//  if(nombre > 10 || nombre < 0){
// alert("recommencer");
   
//  }else{
//      console.log(nombre);
    
//  }
// // ------------- La fonction Math.random() renvoie un chiffre aléatoire de 0 à 15 -----------
//  function getRandomInt(max){
//     return Math.floor(Math.random() * max);
//  }
//  console.log(getRandomInt(15));


//  const maFunction = (param1,param2) =>{
//     let result = param1 * param2;
//     console.log(result);
    
//  }
// maFunction(10,5);

// function aleatoire(chiffre){  // Math.random() permet d'avoir un chiffre aléatoire mais un float , un chiffre a virgule
//     return Math.floor(Math.random() * chiffre); // Math.Floor permet d'avoir un integer , un entier
// }
// console.log(aleatoire(80));

// //-------------------- Function pour verifier si un nombre est pair ------------------------
// function isPair(a , fn){
//     if(a % 2 === 0) {
//         fn(a);
//     }
// }
//  isPair(4 , function(n) {
//     console.log("Mon chiffre est pair : " + n);
    
//  }
//  );

//  /* exercice 1  
//         on crée un nombre aleatoire entre 0 et 10
// */

// function devinez(chiffre){
//     return alert(Math.floor(Math.random() * chiffre))
// }
// const solution = devinez();

// function isRight(n){
//     if(solution === n){
//         alert("bien joué c bien le numero " + n);
// }
// }


// function guess2() {
//     const number = prompt("entrez un nombre");
//     return isRight(number);
// }
// guess2();

// for(i = 0; i < 3; i++){
//     if(guess2()){
//         console.log("bravo");
//         break;
        
//     } else if (i === 2){
//         console.log("vous avez perdu");
        
//     }
// }

// // 



const students = [{
    name : 'john',
    notes : [10,20,17,]
},
{ name : 'jane',
    notes : [4,15,16]

},
{
    name : 'sophie',
    notes : [15,18,20]
},
{
    name : 'marc',
    notes : [20,20,19]
},
{
    name : 'manon',
    notes : [14,18,14]
}]
  
 console.log(students);

 for(let  eleves of students){
    console.log('je m\'appelle ' + eleves['name'] + ' et mes notes sont ' + eleves['notes'].join('-'));
    const sommeDesNotes = eleves['notes'].reduce((acc , val) =>
                acc + val , 0);
   // console.log(sum);
    const moyenne = sommeDesNotes / eleves['notes'].length;
    console.log('ma moyenne est de : '+ Math.floor(moyenne));
    
    
 
 }

 
 


 
 