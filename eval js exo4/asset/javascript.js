
var QTECOM = parseInt(prompt('Combien?'));
var pu= parseInt(prompt("prix unitaire"));


while(QTECOM <= 0 || isNaN(QTECOM)){
    QTECOM = parseInt(prompt('Error, Quelle quantité?'));
}
   
var tot = pu*QTECOM;

function prixavecremise(){
tot = pu*QTECOM;
if(tot=>100 && tot<=200)
    {
    var prixremise = tot-(tot*0.05);
    document.write("prix remisé = "+prixremise);
    }
else if(tot>200)
    {
    var prixremise = tot-(tot*0.1);
    document.write("prix remisé = "+prixremise);
    }
    return prixremise;
}
var prixremise = prixavecremise()


function fraisdeport(){
 
    if((prixremise-(prixremise*0.02))<500 && (prixremise*0.02)<6)
    { 
    
    document.write("cout total = "+(prixremise+6));
    }
    
    else if(prixremise-(prixremise*0.02)>500)
    {
    document.write("cout total = "+prixremise);
    }
}
fraisdeport()