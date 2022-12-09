const prompt = require('prompt-sync')({sigint: true});
const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var done = false;
var password = "";
var passstr = [];

while (!done) {
    start();
}
function start() {
    password = "";
    passstr = [];
    const passwordLength = prompt('Please input password length: ');
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password = chars.substring(randomNumber, randomNumber +1);
        passstr.push(password);
    }

    console.log(passstr.join(''));
    end();
}
function end() {
    conti = prompt(`Do you want to continue?(y/n): `);
    if (conti.startsWith(`Y`) || conti.startsWith(`y`)) {
        start();
    } else if (conti.startsWith(`N`) || conti.startsWith(`n`)) {
        done = true;
    } else {
        done = true;
    }
}
