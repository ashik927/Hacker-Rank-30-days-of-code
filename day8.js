function processData(input) {
    //Enter your code here
    var input = input.split('\n');
    var numLines = input[0];
    var phoneBook = {};
    
    for (var i = 1; i < numLines*2; i=i+2){
        // 1,2; 3,4; 5,6
        phoneBook[input[i]] = input[i+1];
    }
    
    for (var j = numLines*2 + 1; j < input.length; j++){
        if (input[j] in phoneBook) console.log(input[j] + '=' + phoneBook[input[j]]);
        else console.log('Not found');
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
