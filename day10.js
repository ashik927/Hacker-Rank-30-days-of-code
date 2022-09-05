'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);
    const array = n.toString(2).split('');
    let max = 0;
    let cur = 0;

    for (let i = 0, itotal = array.length; i < itotal; i++) {
        if (array[i] == 1) {
            cur++;
        } else if (array[i] == 0) {
            if (cur > max) {
                max = cur;
            }
            cur = 0;
        }
    }

    if (cur > max) {
        max = cur;
    }
    
    console.log(max)
}
