/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
    "Aldgate",
    "Baker Street",
    "Picadilly Circus",
    "Oxford Street",
    "Tottenham Court Road"
];

for(const value of tubeStations){
    console.log(value);
}
// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";


for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i).toUpperCase());
}


