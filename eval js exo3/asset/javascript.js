var tableau = ["Audrey", "Aurelien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; 
console.log(tableau[2]);
console.log(tableau);

var saisie = prompt("saisissez un nom");

console.log(tableau.indexOf(saisie));

var position = tableau.indexOf(saisie);

if( position== (-1)){

    console.log("le prénom n'est pas présent !");
}

else{

    //on supprime du tableau le prénom trouvé
    tableau.splice(position, 1);

    console.log(tableau);
    tableau.push('');
    console.log(tableau);

}
