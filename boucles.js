"use strict";

let fruits = [
    "Pommes",
    "Poires",
    "Pêches"
];

console.log(fruits.length);

// Boucle For
for (let i = 0; i < fruits.length; i++)
{
   console.log(fruits[i]); 
}

// Exemple de vénère. Boucle for dans la vie courante.

let users = [
    {
        firstname: "Bruce",
        lastname: "WAYNE",
    },
    {
        firstname: "Clark",
        lastname: "KENT",
    },
]

for (let i = 0; i < users.length; i++)
{
    console.log( users[i].firstname );
}
console.info('------------------------------------------------------');

// Boucle While
var i = 0;
while (i < fruits.length) 
{
    console.log(fruits[i]);
    i++;
}

console.info('------------------------------------------------------');

while (fruits.length)
{
    console.log( fruits[0] );
    fruits.shift();
}

console.info('------------------------------------------------------');

// Boucle Do While 

fruits = [
    "Fraises",
    "Kiwi"
]
 
do {
    console.log( fruits[0]);
    fruits.shift();
} while (fruits.length);