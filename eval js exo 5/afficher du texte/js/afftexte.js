

var reponse1 = "nom";// declaration de variable)//
var reponse2 = "prenom";
//window.alert(reponse1);//ouverture fenêtre// 
reponse1 = window.prompt("Saisissez votre prenom");
//window.alert(reponse2);//
reponse2 = window.prompt("saisissez votre prenom");
if (window.confirm("êtes-vous un homme ?")== true);
{
    window.alert("bonjour monsieur" + reponse1 + reponse2);
    
 }

 var a = "100";
 var nb = parseFloat(a)
 var b = 100;
 var c = 1.00;
 var d = true;
 window.alert("Ceci est une chaîne de caractères:" + b);
 b--;// decrementation//
 
window.alert("Ceci est une chaîne de caractères" + (nb + c));
// additionne chaine de caractères et réel//

//!(d==true);inverser un booleen//

var reponse = "oui";
if(reponse == "oui")
{
    console.log("bonne réponse");//affiche"bonne réponse" dans la console//
}



var reponse = "C";

if (reponse == "A")
{
   console.log("Bonne réponse !");
} 
else if (reponse == "B")
{
   console.log("Mauvaise réponse !");
} 
else 
{ 
   console.log("Réponse inconnue.");
} 

var modele = "A4";

switch (modele)
{   
  case "208" :
     console.log("Modèle 208 : marque Peugeot");  
     break; 

  case "Clio" :
     console.log("Modèle Clio : marque Renault"); 
     break;  

  case "C3" :
     console.log("Modèle C3 : marque Citroën");
     break;

  default: 
     console.log("Modèle "+modele+": marque inconnue");
} 






