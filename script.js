// let maVariable= "nome";
// const maConstante= 3.14;

// console.log(maVariable);
// console.log(maConstante);

// let num = 5;
// console.log(num);

//  num = 9;
//  console.log(num);


//  let number = 2;
//  console.log(number);
//  {
//     let number = 8;
//     console.log(number);
//  }

//  let outside = 7;
//  console.log(outside);
// //  console.log(inside);
//  {
//     let inside = 4;
//     console.log(outside);
//     console.log(inside);
//  }

  
//  for(i=0;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
//  }
 

// let word = prompt("esercizi");

// console.log(word.length);


// let parola="";
// do {
//    parola= prompt("insirisci una palora")
// }
// while(parola.length<5);

// console.log(parola)

let numero =10;
while(numero<=10 && numero>=1){
    if((numero%2)!==0){
        console.log(numero);
    }
    numero--;
}


let number =7;

if(number>5){
    console.log("la variabile è maggiore di 5");
}
else{
    console.log("la variabile è minore di 5");
}


// let score= "";

// score=parseInt( prompt("voici la note"));

//  if(score>=90 && score<=100){
//     console.log("vuoto ottimo");
//  }
//  else if(score>=70 && score<=89){
//     console.log("vuoto buono");
//  }
//  else if(score>=60 && score<=69){
//     console.log("vuoto sufficiente");
//  }
//  else{
//     console.log("vuoto insufficiente");
//  }



// ------------------verifica il punteggio----------------

let score=78;
 switch(true){
    case (score>=90 && score<=100):
            console.log("vuoto ottimo");
    break;
    case (score>=70 && score<=89):
        console.log("vuoto buono");
    break;
    case (score>=60 && score<=69): 
        console.log("vuoto sufficiente");
    break;
    default: console.log("vuoto insufficiente");    
}



// ------------------somma i numeri-------------

 let array =[1,2,3,4,5,6]
 console.log(array)
let somme = 0
 for(let i=0 ; i < array.length ; i++){

    somme = somme +array[i]
 }
 console.log(somme)

//  for(i=array.length-1 ;i>=0;i--){
//     console.log(array[i])
//  }





// ---------------------aggiungi una nuova proprietà----------------

 const person={
    nome:"mbene",
    age:24,
    city:"borgonovo",
 }

 person["job"]="studiare"


 let age = 30
 console.log(person.age)
 console.log(age)
 console.log(person)



//  ---------------------iterazione delle proprietà--------------------


 for(let chiave in person){
    console.log(chiave+":"+ person [chiave])
 }



//  -----------------------------Functioni annidate---------------------------

//  function outerFunction(x){
//     function innerFunction(y){
//         let som=x+y;
//         console.log(som)
//     }
//     innerFunction(4)
//  }
//  outerFunction(2)

// --------------------persistenza delle variabili locali ---------------

//  function outerFunction(x,inizialValue){
//     let result= inizialValue
//     function innerFunction(y){
//         result=result+y
    
//  }
//  }
//  innerFunction()
//  outerFunction(3,7)


// ------------------------counter-------------------------------------------

  
   function createCounter() {
    let count = 2
 const mnObjet ={
        increment: () => {
            
             return count+1
        },
        decrement: () =>{
             return count-1
        }
    }
    console.log(mnObjet.increment())
    console.log(mnObjet.decrement())
} 

 
 createCounter()

// --------------------------------------object.entries () ------------------------------

//   let student={
//     nome:"mbene",
//     age:"24",
//     grade:"ffef",
//     school:"frrcr"
//   }

// const entries = Object.entries(student)

// for(const key in entries){
//     console.log( `${entries[key]}`)
// }
//   console.log("chiave:"+Object.keys(student))
//   console.log("values:"+Object.values(student))
 




// -------------------------------------------popolamento array------------------------------

// let parol =[];
// for(let i=0 ; i<5 ; i++){

// let  parole= prompt("inserissi una parola")

//     parol.push(parole)
// }

// console.log(parol)

// for(let i=0 ;i< parol.length ; i++){
//     if(parol[i].length %2 !==0){
//  console.log(parol[i])
//     }
// }



// --------------------------------------forEach & map-----------------------------------------

// const numbers = [1,2,3,4,5]
// numbers.forEach((item) => {
//     item = item*2;
//     console.log(item)
// })

// const squaredNumber = numbers.map((item) =>{
//      return ` ${item**2}`;
     
// })
// console.log(squaredNumber)


// // ------------------------------- filter & find -------------------------------------

// // const students =[
// //     { nome:"sofia",grado:65},
// //     {nome:"elisa",grado:34},
// //     {nome:"rachid",grado:90},
// //     {nome:"mada",grado:23}
// // ]

// // const passedStudents= students.filter((item) =>{
// //     return    item.grado >= 60;
// // })

// // console.log(passedStudents)

// //   const student= students.find((item) =>{
// //      return item.grado < 60
// // })
// // console.log(student)




// // ---------------------------------------------- reduce & sort --------------------------------------

// const expense =[200,98,59,150,300]

// const suma= expense.reduce((accumulator,recent) =>{
//     return accumulator + recent;
// },0)

// const words =["banana","apple","chery","date"]

// words.sort((a,b) => {
//     return a.localeCompare (b)
// })

// console.log(suma)
// console.log(words)