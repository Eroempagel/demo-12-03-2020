/*
function animal(obj){
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
}

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
*/

/*
var rooms = {
    room1: {name: "", description: "", completed: false},
    room2: {name: "", description: "", completed: false},
    room3: {name: "", description: "", completed: false}
}
*/

/*
//console.log(CHANGE)

function changeCount( change ){
    let coins = change.split(' ');
    let sum = 0.00;
    for (let i = 0; i < coins.length; i++){
        console.log(CHANGE[coins[i]], coins[i]);
        sum += CHANGE[coins[i]];
    }
    return '$' + sum.toFixed(2);
}
*/

/*
// Scabble Score
function scrabbleScore(str){
    //console.log($dict);
    let chars = str.split("");
    let sum = 0;
    //console.log(chars);
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== " ") {
            sum += $dict[chars[i].toUpperCase()]
            console.log($dict[chars[i].toUpperCase()])
        }
    }
    return sum;
}
*/

/*
// Character Frequency
function charFreq(message) {
    let frequency = {};
    //console.log(message[i])
    for (let i = 0; i < message.length; i++){
        if(!frequency[message[i]]){
            frequency[message[i]] = 1;
        } else {
            frequency[message[i]] += 1;
        }
    }

    return frequency;
}
*/

// Ziiiiip!
function zipObject(keys, values){
    let zip = {};
    if (keys) {
        for(let i = 0; i < keys.length; i++) {
            if (Array.isArray(values)){
                zip[keys[i]] = values[i]
            } else {

            }
        }
        return zip;
    }
}