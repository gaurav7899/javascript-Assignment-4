//Question1
let s = "bAaDAAbAD";
function countCharacters() {
    let count0 = 0;
    let count1 = 0;
    let b = [count0, count1];
    for (const char of s) {
        if (char === "A") {
            b[0] = count0 += 1;
        } else if (char === "D") {
            b[1] = count1 += 1;
        }
    }
    return b;
}

function runcode1() {
    const output = countCharacters();
    let input = document.querySelector("#output");
    input.value = output;
}
//Question2
let str = "gaurav kumar";
let charcount = {};
function CounterHead() {
    for (const char of str) {
        if (char in charcount) {
            charcount[char] += 1;
        } else {
            charcount[char] = 1;
        }
    }
    return charcount;
}
// console.log(CounterHead());

function runcode2() {
    const output = CounterHead();
    let input = document.querySelector("#output2");
    input.value = JSON.stringify(output);
}


//question3

function Count_Vowel() {
    let str1 = "gaurav kumar E"
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    vowels_count = 0
    v = ""
    for (const char of str1) {
        if (vowels.includes(char)) {
            v += char
            vowels_count += 1
        }
    }
    return vowels_count
}
Count_Vowel()

function runcode3() {
    const output = Count_Vowel();
    let input = document.querySelector("#output3");
    input.value = output;
}


//Question 4
function Concatenate_Strings() {
    let s1 = "hello hey"
    let s2 = "how are you?"
    let c = s1 + " " + s2
    // console.log(c);
    return c

}
Concatenate_Strings()

function runcode4() {
    const output = Concatenate_Strings();
    let input = document.querySelector("#output4");
    input.value = output;
}

//Question 5
let findlenght = () => {
    let count = 0
    let s = "welcome to my web page."
    for (let i of s) {
        count += 1
    }
    console.log("length of string", count);
    return count
}
findlenght();


function runcode5() {
    const output = findlenght();
    let input = document.querySelector("#output5");
    input.value = output;
}



//Question 6
let Game_Winner = () => {
    let count_a = 0
    let count_d = 0
    let name=""
    const str = 'ADDAAAAAAAADDDDDDDDDDDAAAAADDDDDDDDDDAAAAAAAAAAAADDDDDDDDAAAAAAAA'
    for (let char of str) {
        if (char === 'A') {
            count_a += 1
        }
        else if (char === 'D') {
            count_d += 1
        }
    }
    if (count_a > count_d) {
        console.log("Aditya");
         name += "Aditya"

    }
    else if (count_a < count_d) {
        console.log("Danish");
        name+="Danashi"

    }
    else if (count_a === count_d) {
        console.log("both are same so game is withdraw");
    }
    else {
        console.log("try again");

    }
    return `${name}`
}
Game_Winner();



function runcode6() {
    const output = Game_Winner();
    let input = document.querySelector("#output6");
    input.value = JSON.stringify(output);
}
//Question 7
const joinString = () => {
    let s = "PreBytes"
    let p = "Technologies"
    const a = s + p
    console.log(a);
    return a;
}
joinString()


function runcode7() {
    const output = joinString();
    let input = document.querySelector("#output7");
    input.value = output;
}
//Question 8
const Plain_Check = () => {
    let s = "Madam"
    let s1 = s.toLowerCase(s)
    let re_str = ""
    let oustr=""
    console.log(s1);
    for (let char in s1) {
        re_str = s1[char] + re_str
    }
    if (s1 === re_str) {
        console.log("Palindorm string");
        oustr+="Palindorm string"
    }
    else {
        console.log("not Palindrom string");
        oustr+="not Palindorm string"

    }
    console.log(re_str);
    return oustr;
}
Plain_Check()


function runcode8() {
    const output = Plain_Check();
    let input = document.querySelector("#output8");
    input.value = output;
}
//Question 9
const reverse_string = () => {
    let r_str = ''
    let s = 'I am utkarsh raj'
    for (let char of s) {
        r_str = char + r_str
        // console.log(char);

    }
    console.log('reverse string:', r_str);
    return r_str
}
reverse_string()



function runcode9() {
    const output = reverse_string();
    let input = document.querySelector("#output9");
    input.value = output;
}
//Question 10
let match_string = () => {
    let s1 = "PreBytes"
    let s2 = "PreBytes"
    let ans =""
    if (s1 === s2) {
        console.log('yes');
        ans+="yes"
    }
    else {
        console.log('No');
        ans+="No"
    }
    return ans
}
match_string()


function runcode10() {
    const output = match_string();
    let input = document.querySelector("#output10");
    input.value = output;
}
