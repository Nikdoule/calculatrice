let tab = document.getElementsByClassName("button");
let ecran = document.getElementById("affichage");
let egal = document.getElementById("result");
let reset = document.getElementById("reset");
let returner = document.getElementById("return");


for(let i = 0; i < tab.length; i++){

    tab[i].addEventListener("click", affich);
}

function affich(){

    if(ecran.textContent == 0){
        ecran.textContent = "";
    }
    ecran.textContent += this.textContent;
    return;
}
function resultats(a){

    ecran.textContent = eval(ecran.textContent);
    
    return(a);
}
egal.addEventListener("click", resultats);

function effac(){

    ecran.textContent = "0";

    return;
}
reset.addEventListener("click", effac);

function arriere(){

    /*let longueur = ecran.textContent.length;

    longueur -= 1;
    ecran.textContent = longueur;*/

    ecran.textContent = ecran.textContent.replace(ecran.textContent.slice(-1), "")
    return;
}

returner.addEventListener("click", arriere);








