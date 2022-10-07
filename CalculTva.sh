#!/bin/bash
clear;

# Déclaration de constantes
readonly TVA=20;

# Déclaration de variables
montantTVA=NULL;
prixHT=NULL;
prixTTC=NULL;

# Affiche une instruction pour l'utilisateur
# >  Saisir le prix Hors Taxe
echo "Saisir le prix Hors Taxe:";
# Capture la valeur d'entrée prixHT
read prixHT;

echo $prixHT;
# Calcul du montant de la TVA
montantTVA=$(echo "$prixHT*($TVA/100)"| bc- l);
echo $montantTVA;
# Calcul du prix TTC prix TTC
prixTTC=$(echo "$prixHT+$montantTVA"| bc -l);
echo $prixTTC;

# Affiche le Montant de la TVA et le prix TTC
echo ">>Montant TVA: $montantTVA";
echo ">>Prix TTC: $prixTTC";