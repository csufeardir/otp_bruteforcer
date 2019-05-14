const C1 = '00010110 00000101 00011000 00000011 00001000 00011110 00010110 00001011 00000101 00001101 00011010 00001111'
const C2 = '00011001 00000011 00010110 00000110 00010011 00010101 00001111 00011101 00010000 00000100 00000111 00001001'

var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('C:\\Users\\Onur\\Desktop\\dic.txt'), // Dictionary File Location
    output: process.stdout,
    console: false
});
console.log('Key' + "            " + 'P1' + "           " + 'P2\n')
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