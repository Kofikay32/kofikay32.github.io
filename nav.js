// Create an array of pet objects 
const pet= [
{
  namemo: 'dog',
  type:'',
  breed:'',
  age:'',
  photo:'',
}
];
// creating an object in js 
const student={
   person:'Edward',
   city:'Colorado',
   age:'29',
   skills:['html', 'js','css']
};
// Access object properties 
const person2={
  nickname:'Edward',
  city:'Colorado',
  age:'29',
  skills:['html', 'js','css']
};
const mesg= ` Hi, I'm a ${person2.nickname}.`
console.log(mesg)

// example of  a while loop 
    function getRandomNumber(){
      return Math.floor( Math.random()*5)+1;
    }
    let counter=0;
    while(counter < 10) {
     console.log(`the random number is ${getRandomNumber()}`);
     counter += 1;
    }
    // example of do- while loop
    function getRandomNumber(){
        return Math.floor( Math.random()*5)+1;
      }
      let cer =0;
      do {
       console.log(`the random number is ${getRandomNumber(10)}`);
       counter += 1;
      } while( cer < 10);
    
    //   example of the for loop
    function getRandomNumber(){
        return Math.floor( Math.random()*5)+1;
      }
      for(let f=0; f < 10; f +=1 ) {
        console.log(`the random number is ${getRandomNumber(10)}`);
      }
//    example of Array 
const planet=['Mercury','Sun', 'venus', 'mars'];
planet.push("earth");
planet.unshift("banana")
// .push adds item to an array from last and unshift adds fro  the start
planet.pop();
planet.shift();
// pop remove item from the bottom nd shift removes items from the front Opp of the other one 

// example of combining an array by using ( ...krek or ... variable)
const krek= [ 'henny', 'vodka', 'Belaire'];
const litty= [ 'welch', 'coke', '...krek', 'weed'];
console.log(litty);

// arrow function example
    const getArea=(width, length, unit) => {
    const area= width * length;
    return`${area} ${unit}`;
    };
    
    // how to create and call a function
    function trialrandom(){
        const odds= Math.floor(Math.random()* 6)+1;
        alert(odds)
    }
    trialrandom();
    
    // generating random numbers
    const inputcamp= prompt("Please provide a number");
    const highnumber= parseInt(inputcamp);
    if(highnumber){
        const randomnumber= Math.floor(Math.random()* highnumber)+1;
        console.log(`${randomnumber} is a random number between 1 and ${highnumber}`);
    } else{
        console.log("You need to provide a number instead")
    
    }
    
    
    
    const verb= prompt("type a verb")
    const noun= prompt("type a noun")
    const adjective= prompt("type an adjctive")
    const sentence= `<p> this is an example of ${verb}, the next one is an example of a ${noun} and finally an example of an ${adjective}</p>`;
    document.write('main').innerHTML= sentence;
    
    alert(" Warning! This message will self-destruct in");
    alert("3....");
    alert("2....");
    alert("1....");
    document.write("Boom!");
    console.log("message destroyed")
    
    var score = 2;
    score += 10; 
    // the += sign adds up to the initial score
    score += 5;
    console.log(score);
    var bonusPts=100;
    var finalscore= score + bonusPts;
    console.log(finalscore);
    
    const message= "I'm a programmer";
    console.log(message);
    
    // touppercase is used to vhange texts to Upper case 
    const passphrase="this is litcoin web services";
    console.log(passphrase.toUpperCase());
    
    // prompt() is used to ask a question
    const adlibs=prompt("whats your name");
    const comibine= "hello " + adlibs;
    console.log(comibine);
    
    // This is an example of Template Literals
    const ads=prompt("whats your name");
    const lit= `hello ${ads}. Welcome to Litcoin Web Services. We are happy that you came to visit, ${ads}. We look forward to hear from you`
    console.log(lit);
    // how to display vale of a string on a page
    const adss=prompt("whats your name");
    const shout= adss.toUpperCase();
    const litcoin= `the message to shout is: ${shout}`;
    document.write(litcoin)
    
    const multiline= "hello welcome to litcoin web services \
    we are here to help you design a web site \
    thank you";
    // example of conditional statement
    const alldae= prompt("whats the name of my company");
    if(alldae === "litcoin") {
        console.log("thats correct");
    } else {
        console.log("sorry thats wrong");
    }