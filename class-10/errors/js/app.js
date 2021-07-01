'use strict';


/*
1997 - 2015 
var 

ECMA6 
const&let 

*/
// var hero;

// console.log(hero);

// hero = 'anything'; 


// console.log(hero);

// let user = 'Bashar';


// if(true){
//     console.log(user);
// }

// if(true){
//     var lastName= 'Alasmar';
// }
// console.log(lastName);

// let hero = 'Anything'; 
// console.log(hero);



// Errors

// Reference Err
// when you're refering to a variable that is not exit 


// const x ;
// console.log(x);
// console.log(helloWorld);


//Range Err 
// thrown when a number is outside an allowed range

// let arr = [1,2,3,4,5,6];

// arr.length = 99**99;



// Syntax Err

// this err is happening when you don't follow the rules of javascript lang

//



// lwt x = 5;
// of(true){
//     console.log('33');
// }


//Type Err

// let userName = 'Dina';

// userName();
// let typeErr = 'Typoo';

// typeErr.push(123);


// try{
//     consolee.log('HelloWorld');
// }catch(e){
//     console.log('This error is happening because of i wrote it wrong');
// }



/*
    Logical Erros
*/


// let total=0;
// let x = 0 ; 

// let n  = null;

// //undifenied  + 2 
// // range err?
// // No err
// // 5 - 6
// //Shawerma

// // console.log(total);
// for(let i = 0 ; i <5 ;i++){
//     console.log(total+=5);
// }



// Scopes 



let globVar = 'i am a global Variable';


function scoping(){

    let localVariable1 = 'im inside the function!';


    if(true){
        let localVariable2 = `i am inside the if that inside the function!`;
        console.log(localVariable2);
    }
    console.log(localVariable1);
}
console.log(globVar);
scoping();






function Instruments(instName,type,color,image){
    this.instName = instName;
    this.type = type;
    this.color = color;
    this.image = image;
}

