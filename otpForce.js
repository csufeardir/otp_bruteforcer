var C1; // Cryptext 1
var C2; // Cryptext 2
var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream(''), // Dictionary File Location
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    if(line.length==12){
        var Key1 = textToBin((line))
        console.log( line + " " + binaryToString(XOR(Key1,C1)) + " "+ binaryToString(XOR(Key1,C2)))
    }

});

function textToBin(text) {
    return (
        Array
            .from(text)
            .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin )
            .join(' ')
    );
}


function binaryToString(str) {

    str = str.match(/.{1,8}/g).join("");
    var newBinary = str.split(" ");
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
}



function XOR(str1,str2) {

    res = [];
    for (var i = 0; i < str1.length; i++) {
        if(str1.charAt(i) === str2.charAt(i) && str1.charAt(i)!==" ")
            res[i]=0;
        if(str1.charAt(i) !== str2.charAt(i) && str1.charAt(i)!==" ")
            res[i]=1;
        if(str1.charAt(i)===" ")
            res[i]=" ";
    }
    return res.join("");
}
