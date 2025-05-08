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

//  const person={
//     nome:"mbene",
//     age:24,
//     city:"borgonovo",
//     job:"studiare"
//  }
//  let age = 30
//  console.log(person)
//  console.log(person.age)
//  console.log(age)
//  console.log(person.job)

//  for(nome in person){
//     console.log(person.nome)
//  }

//  function outerFunction(x,inizialValue){
//     function innerFunction(y){
//         let som=x+y;
//         console.log(som)
//         result=result+y
//         console.log(result)
//     }
//     let result= inizialValue

//     innerFunction(4)
   
//  }
//  outerFunction(2,7)

//   let student={
//     nome:"mbene",
//     age:"24",
//     grade:"ffef",
//     school:"frrcr"
//   }
//   console.log("chiave:"+Object.keys(student))
//   console.log("values:"+Object.values(student))
//   console.log("entries:"+Object.entries(student))