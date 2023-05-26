const ranPassword = document.getElementById("password");
const length = 18;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()_+={[}]|\<>/";

const allchars = upper + lower + num + symbol;

function randomPassword(){
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    ranPassword.value = password;
}

function copyPassword(){
     ranPassword.select();
     document.execCommand("copy");

}