var nom = document.getElementById("nom");
var missnom = document.getElementById("missnom");
var nomValid = new RegExp("/^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a-z]?$/)");

var prenom = document.getElementById("prenom");
var missprenom = document.getElementById("missprenom");
var prenomValid = new RegExp("/^[a-zA-Z}[a-z}+([-'\s][a-zA-Z][a-z]?$/)");


var datedenaisance = document.getElementById("bday");


var cp = document.getElementById("codepostal");
var cpValid = new RegExp("/^[0-9][0-9][0-9][0-9][0-9]+$/");

var mail = document.getElementById("Email");
var mailformat = "@";



var formValid = document.getElementById("button1");

formValid.addEventListener("click",validation);
function validation(event){
    if( nom.validity.valueMissing){
    event.preventDefault();
    missnom.textContent = "nom manquant";
    }
    else if(nom.Valid.match(nom.value)==false){
        event.preventDefault()
        missnom.textContent = "format incorrect";
    }

    if (prenom.validity.valueMissing){
        event.preventDefault();
        missprenom.textContent = "nom manquant";
        
    }
    else if(prenom.Valid.match(prenom.value)==false){
        event.preventDefault()
        missprenom.textContent="format incorrect";
    }

    if(parseInt(cp.value.lenght !=5) || isNaN(cp.value) || cp.value==""){
        alert("veuillez saisir 5 chiffres");
        return false;
    }
    if(mail.value.match(mailformat)){ 
    return true;
    }
    else
    {
        alert("Email doit contenir @");
        return false;
    }
}           




