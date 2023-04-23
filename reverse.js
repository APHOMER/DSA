// Create a function that reverse a string
// 
const username = 'Aphomercy is Nice'

function reverse1(str) {
    let revers = [];
    for(let i = str.length - 1; i >= 0; i--) {
        revers.push(str[i]);
    }

    return revers.join('');
}

// console.log(reverse1('1', username));


const reversed2 = (str) => {
    return str.split('').reverse().join('');
 }
 
 console.log(reversed2(username ));


// with spread operator
const reversed3 = (str) =>  [...str].reverse().join('');
 
// console.log(reversed3(username));
