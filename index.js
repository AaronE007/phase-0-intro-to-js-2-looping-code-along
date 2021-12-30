let pracArray = [];
function writeCards(names,events){
    

    for (let i = 0; i < names.length; i++){
         let message = (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
         pracArray.push(message);}

         return pracArray;
    }

function countDown(integer){
while (integer >= 0) {
  console.log(integer--);
}
}