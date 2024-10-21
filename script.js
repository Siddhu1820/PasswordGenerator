let btn = document.querySelector("button");
let pass = document.querySelector("#password");
let len= document.querySelector("#len");
let img=document.querySelector("img");
btn.addEventListener("click",()=>{
    createPassword();
})

let createPassword=()=>{
    let str="";
    let capLetters="ABCDEFGHIJKLNOPQRSTUVWXYZ";
    let smallLetters=capLetters.toLocaleLowerCase();
    let numbers="0123456789";
    let sp="~!@#$%^&*?<>|()`";
    let allChar=capLetters+smallLetters+numbers+sp;

    str+=capLetters[Math.floor(Math.random()*capLetters.length)];
    str+=smallLetters[Math.floor(Math.random()*smallLetters.length)];
    str+=numbers[Math.floor(Math.random()*numbers.length)];
    str+=sp[Math.floor(Math.random()*sp.length)];
    for(let i=0;i<len.value-4;i++)
    {
        str+=allChar[Math.floor(Math.random()*allChar.length)];
    }

    let arr=str.split('');

    for(let i=arr.length-1;i>0;i--)
    {
        let j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    let str1=arr.join('');


    pass.value=str1;
    pass.style.fontSize="2rem";
    pass.style.color="#4B5C9D";

}

let copypassword=()=>{
    pass.select();
    navigator.clipboard.writeText(pass.value);
}

img.addEventListener("click",()=>{
    copypassword();
})
