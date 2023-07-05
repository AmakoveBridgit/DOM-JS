document.getElementById("heading").style.color="red";
document.getElementById("heading").style.backgroundColor="green";

document.getElementById('intro').innerHTML='My name is Bridgit and I am 22 years old'
document.getElementById('intro').style.fontSize="24px"
let paragraph=document.createElement('p')
paragraph.innerHTML='I am new'
document.getElementById('container').appendChild(paragraph)
let child=document.getElementById('container').children;
console.log({child}); 

let button=document.getElementById('button')
button.addEventListener('click', function(){
    button.innerHTML='Clicked !!!';
})

//setting an attribute

document.getElementById('container').setAttribute('class','containers')
document.getElementById("cont").setAttribute()



