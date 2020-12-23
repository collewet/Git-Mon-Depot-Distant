

    
var jeunes = 1;
var moyens = 1;
var vieux = 1;
var personnes;

do
{
    personnes = window.prompt("Entrez votre âge");
    if (personnes < 20)
    {
    document.write("jeune :"+" "+personnes+"ans"+"n°"+ jeunes);
        jeunes++
    }

    else if (personnes >= 20 && personnes <= 40)
    {
        document.write("moyens : "+ " "+personnes+"ans"+"n°"+moyens);
        moyens++
    }

    else if (personnes > 40 && personnes <= 100)
    {
        document.write("vieux : "+" "+personnes+"n°"+"ans"+vieux);
        vieux++
    }
    else if(personnes > 100)
    {
    vieux++;
    break
    }
 
} while(personnes);
