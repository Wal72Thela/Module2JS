let images = [
    'assets/dice0.png',
    'assets/dice1.png',
    'assets/dice2.png',
    'assets/dice3.png',
    'assets/dice4.png',
    'assets/dice5.png',
    'assets/dice6.png',
]

let dice = document.querySelector('img')
function roll(){
  
    setTimeout(function() {
        let dieOneValue = Math.floor(Math.random()* 7);
        let dieTwoValue = Math.floor(Math.random()* 7);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
        let Champ = dieOneValue + dieTwoValue
        console.log(Champ)
        TheBozzaCategories(Champ);
       
    }, 1000
    );


    function TheBozzaCategories(Champ) {
        if (Champ === 0) {
            document.querySelector('h1').innerHTML = 'Best Consumer Solution';
        } else if (Champ === 1) {
            document.querySelector('h1').innerHTML = 'Best Educational Solution';
        } else if (Champ === 2) {
            document.querySelector('h1').innerHTML = 'Best Agricultural Solution';
        } else if (Champ === 3) {
            document.querySelector('h1').innerHTML = 'Best Health Solution';
        } else if (Champ === 4) {
            document.querySelector('h1').innerHTML = 'Most Innovative Solution';
        } else if (Champ === 5) {
            document.querySelector('h1').innerHTML = 'Best Hackerthon Solution';
        } else if (Champ === 6) {
            document.querySelector('h1').innerHTML = 'Best Campus Cup Solution';
        } else if (Champ === 7) {
            document.querySelector('h1').innerHTML = 'Best South African Solution';
        } else if (Champ === 8) {
            document.querySelector('h1').innerHTML = 'Best Finantial Solution';
        } else if (Champ === 9) {
            document.querySelector('h1').innerHTML = 'Best  Gaming Solution';
        } else if (Champ === 10) {
            document.querySelector('h1').innerHTML = 'Best African Solution';
        } else if (Champ === 11) {
            document.querySelector('h1').innerHTML = 'Best Enterprice Solution';
        } else if (Champ === 12) {
            document.querySelector('h1').innerHTML = 'Huawei AppGallery Category 15';
        }
    }
}

function loadXMLDoc() {
    req=new XMLHttpRequest();
    req.onreadystatechange=function() {
        if (req.readyState==4 && req.status==200) {
            document.getElementById("div1").innerHTML=req.responseText;
       }};
    req.open("GET","assets/rules.txt",true);
    req.send();

}






