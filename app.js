"use strict";

// Déclaration de constantes 
const TVA = 20;

// Déclaration des variables
var montantTVA;
let prixHT, prixTTC;



// Affiche une instruction pour l'utilisateur
// Saisir le prix Hors Taxe:
// Capture la valeur d'entrée prixHT
prixHT = prompt("Saisir le prix Hors Taxe");

// Vérification de l'entrée
if (isNaN(prixHT))
{
    console.error("Erreur de saisie");
}
else 

{
        // Convertir chaîne de caractères (prixHT) en Nombre
    prixHT = parseFloat(prixHT);
    
    // Calcul du montant de la TVA 
    montantTVA = prixHT * ( TVA/100 );

console.log(montantTVA);
console.log(typeof(montantTVA));

// Calcul du prix TTC
prixTTC = prixHT + montantTVA;
console.log(prixTTC);

// Affiche le montant TVA et le prix TTC
let output = `>> Montant TVA: ${montantTVA}<br> -Prix TTC: ${prixTTC}`;

document.write(output);
}