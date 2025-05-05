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

class Student{
    ecole = 'Jules ferry';
    annee = 2025;

    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
} 
   setNotes(notes){
        this.notes = notes;
    }   
        canPass(){
    }   
}
class superStudendts extends Student{

}
let anna = new superStudendts('Anna','Doe');
let georges =  new Student('Georges','sand');
    
anna.setNotes([10,9,7]);
georges.setNotes([15,16,18]);
console.log(anna,georges);

let bibi = new superStudendts( 'bibi','jano');

bibi.setNotes([16,8,10]);
console.log(bibi);
         
 //   ----------------Exercice sur les class ---------------------------------------------
    class Rectangle{
        constructor(width , height){
            this.width = width;
            this.height = height;
        }   
            get perimeter(){
                return this.width*2 + this.height*2;
            }
        get isValid(){
            return this.width > 0 && this.height > 0;
        }
        isBiggerThan (shape) {
           const k =  this.perimeter > shape.perimeter;
           if(k == true){
            console.log("oui");
            
           }else{
               console.log("non");
               
           }
           
        }
    }

    class Square extends Rectangle{
            constructor(width){
                super(width , width)  // Le mot-clé super est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent
            }

            
    }

 const r = new Rectangle(10,20);
 console.log(r.perimeter);
 console.log(r.isValid);

 const r2 = new Rectangle(-10,20);
 console.log(r2.isValid);

 const c = new Square(10);
 console.log(c.perimeter);
 console.log(c.isBiggerThan(r));
 
 console.log(Rectangle);

 console.log(Square);
 
 
 class Livre{

    #page = 1;
    constructor(titre , pages){
        this.titre = titre;
        this.pages = pages;
    }   
     get page(){
        return this.#page;
    }
      nextPage () {
    if(this.#page < this.pages){
         return  this.#page++
        }
   }
 
}
 
 const book = new Livre("seigneurs des anneaux",50);
 console.log(book.page);
 book.nextPage();

 class Library{
    #books = [];
    
    addBook(book){
        this.#books.push(book);
    }
    addBooks(books){
        for(let book of  books){
            this.addBook(book);
        }
    }
    findBookByLetter(letter){
        const found = []
        for(let book of this.#books){
            if(book.tittle[0].toLowercase() === letter.toLowercase){
                found.push()
            }
        }
    }
    
 
 }
 j = new Library
 j.addBooks("le petit chapeau");
console.log(j);
console.log();

const number = [56,25,14];
console.log(number.at(1));




  
  
        



 
 
    
      
