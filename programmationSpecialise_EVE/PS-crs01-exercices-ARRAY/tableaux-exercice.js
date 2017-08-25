/**
 * Exercices cardio de tableaux {Array}.
 */
var inventeurs = [
    { prenom: 'Albert', nom: 'Einstein', naissance: 1879, deces: 1955 },
    { prenom: 'Isaac', nom: 'Newton', naissance: 1643, deces: 1727 },
    { prenom: 'Galileo', nom: 'Galilei', naissance: 1564, deces: 1642 },
    { prenom: 'Marie', nom: 'Curie', naissance: 1867, deces: 1934 },
    { prenom: 'Johannes', nom: 'Kepler', naissance: 1571, deces: 1630 },
    { prenom: 'Nicolaus', nom: 'Copernicus', naissance: 1473, deces: 1543 },
    { prenom: 'Max', nom: 'Planck', naissance: 1858, deces: 1947 },
    { prenom: 'Katherine', nom: 'Blodgett', naissance: 1898, deces: 1979 },
    { prenom: 'Ada', nom: 'Lovelace', naissance: 1815, deces: 1852 },
    { prenom: 'Sarah E.', nom: 'Goode', naissance: 1855, deces: 1905 },
    { prenom: 'Lise', nom: 'Meitner', naissance: 1878, deces: 1968 },
    { prenom: 'Hanna', nom: 'Hammarström', naissance: 1829, deces: 1909 }
];
// Méthode filter()
// 1. Filtrer la liste des inventeurs
// pour trouver seulement ceux qui ont vécus
// au XVIème siècle (1500 à 1599)
var inventeurs_XVIe = inventeurs.filter(function (inventeur) {
    return inventeur.naissance >= 1500 && inventeur.naissance < 1600;
});
console.log("Exercice Tableaux Cardio #01 - filter()");
console.log(inventeurs_XVIe);
// Méthode map()
// 2. Créer un tableau des inventeurs
// en assemblant les prénoms aux noms de famille.
var inventeursParNomComplet = inventeurs.map(function (inventeur) {
    return inventeur.prenom + " " + inventeur.nom;
});
console.log("Exercice Tableaux Cardio #02 - map()");
console.log(inventeursParNomComplet);
// Méthode sort()
// 3. Trier les inventeurs par date de naissance du plus vieux au plus jeune
var inventeursParDateNaissance = inventeurs.sort(function (a, b) {
    return a.prenom - b.prenom;
});
console.log("Exercice Tableaux Cardio #03 - sort()");
console.table(inventeursParDateNaissance);
// Méthode reduce()
// 4.a Quelle inventeure a vécu le PLUS longtemps?
var inventeurLongueVie = inventeurs.reduce(function (a, b) {
    return b.deces - b.naissance;
}, 0);
console.log("Exercice Tableaux Cardio #04a - reduce() - la PLUS coriace");
console.log(inventeurLongueVie);
// 4.b Quelle inventeure a vécu le MOINS longtemps?
/*const inventeurCourteVie = inventeurs.reduce(





);*/
console.log("Exercice Tableaux Cardio #04b - reduce() - la MOINS coriace");
//console.log(inventeurCourteVie);
// 5. Méthode sort() - encore!
// Trier les inventeurs selon leur longévité
// (du plus âgé au plus jeune)
/*const inventeursParLongevite = inventeurs.sort(function(a, b) {
    const precedent = a.deces - a.naissance;
    const suivant = b.deces - b.naissance;
    // ...
});*/
console.log("Exercice Tableaux Cardio #05 - sort() - par longévité");
//console.table(inventeursParLongevite);
// 6. Exercice de réduction / reduce()
// Additionner les instances de chacun des moyens de transport
// Créer un objet dont les clés sont les moyens de transport
// et leurs valeurs:
//   le nombre d'instances dans le tableau moyensDeTransport
var moyensDeTransport = ['voiture', 'voiture', 'autobus', 'autobus', 'vélo', 'marche', 'voiture', 'triporteur', 'vélo', 'marche', 'voiture', 'triporteur', 'voiture', 'autobus', 'planche à roulettes'];
// const objmoyensDeTransportCompilation =  ...
// console.log(objmoyensDeTransportCompilation); 
