/**
 * ARRAY
 * Méthodes:
 * 01. splice()
 * 02. sort()
 * 03. push(), pop()
 * 04. shift(), unshift()
 * 05. join()
 * 06. reverse()
 * 07. slice()
 * 08. concat()
 * 09. filter()
 * 10. map()
 * 11. forEach()
 * 12. reduce()
 **/

const donneesJeu = {
    joueurs:
    [   {nom: "Bob1", pointage: 10},
        {nom: "Bob2", pointage: 8},
        {nom: "Bob3", pointage: 11},
        {nom: "Bob4", pointage: 1},
        {nom: "Bob5", pointage: 0},
        {nom: "Bob6", pointage: 3},
        {nom: "Bob7", pointage: 3},
        {nom: "Bob8", pointage: 7},
        {nom: "Bob9", pointage: 44}
        ]
};
console.log("Données du Jeu au départ: ");
// La méthode table de l'objet Console permet de présenter
// la structure des objets
// sous la forme d'un tableau de données
console.table(donneesJeu.joueurs);



/* 01. Méthode splice()
* La méthode splice() est une méthode polyvalente
*   pour ajouter ou supprimer des éléments
*   dans un tableau.
* Le premier argument précise à partir de quel index
*   il faut ajouter ou supprimer
* Le second argument précise le nombre d'items à supprimer
* Les arguments suivants sont les éléments à ajouter
* Retourne les éléments supprimés ou retourne [] lorsqu'il ajoute
* Exemples:
**/
const arrChiffres = [5, 4, 3, 2, 1];
const spliceDeSuppression = arrChiffres.splice(3, 2);
console.log('Retour du spliceDeSuppression : ' + spliceDeSuppression);
console.log('arrChiffres après splice(3,2): ' + arrChiffres);
const spliceDAjout = arrChiffres.splice(3, 0, 2, 1);
console.log("Retour du spliceDAjout: " + spliceDAjout);
console.log("arrChiffres après splice(3, 0, 2, 1): " + arrChiffres);

/**
 * 02. Méthode sort()
 * Lorsque la méthode est utilisée sans argument,
 *   elle opère un classement par ordre alphabétique.
 * Si on veut un ordre autre que alphabétique,
 *   il faut fournir en argument une fonction de comparaison.
 **/
/* Tri alphabétique */
const lettres = ["g", "z", "o", "f"];
console.log(lettres.sort().toString()); // "f", "g", "o", "z"
console.log(arrChiffres.sort().toString()); // 1, 2, 3, 4, 5

/** Tri croissant
 * Pour placer a avant b,
 *   la fonction doit obtenir un chiffre négatif. */
const donneesJeuParPointageCroissant = donneesJeu.joueurs.sort(function (a, b) {
        return a.pointage - b.pointage;
    });
console.table(donneesJeuParPointageCroissant);

/* Tri décroissant */
const donneesJeuParPointageDecroissant = donneesJeu.joueurs.sort(function (a, b) {
        return b.pointage - a.pointage;
    });
console.table(donneesJeuParPointageDecroissant);



/**
 * 03. Méthodes push() et pop()
 * La méthode push permet d'ajouter un élément à la fin du tableau
 * La méthode pop permet de supprimer un élément à la fin du tableau
 **/
donneesJeu.joueurs.push({nom: "Bob123", pointage: 123});
console.log("Données du Jeu après push: ");
console.table(donneesJeu.joueurs);

donneesJeu.joueurs.pop();
console.log("Données du Jeu après pop: ");
console.table(donneesJeu.joueurs);



/**
 * 04. Méthodes unshift() et shift()
 * La méthode unshift permet d'ajouter un élément au début du tableau
 * La méthode shift permet de supprimer un élément au début du tableau
 **/
donneesJeu.joueurs.unshift({nom: "Bob234", pointage: 234});
console.log("Données du Jeu après unshift: ");
console.table(donneesJeu.joueurs);

donneesJeu.joueurs.shift();
console.log("Données du Jeu après shift: ");
console.table(donneesJeu.joueurs);



/**
 * 05. Méthode join()
 * Réunit tous les éléments d'un tableau dans une chaine de caractères.
 * Un paramètre peut être ajouté pour spécifier un séparateur autre qu'une virgule
 **/
const a = ['Air', 'Eau', 'Feu'];
const jointure = a.join();    // 'Air,Eau,Feu'
console.log("Jointure: " + jointure);

const jointureAvecSeparateur = a.join('-'); // 'Air-Eau-Feu'
console.log("Jointure avec séparateur: " + jointureAvecSeparateur);


/**
 * 06. Méthode reverse()
 * La méthode reverse() transpose les éléments d'un tableau :
 *   le premier élément devient le dernier et le dernier devient le premier
 *   et ainsi de suite.
 **/
console.log('arrChiffres: ' + arrChiffres);
arrChiffres.reverse(); // [1, 2, 3, 4, 5]
console.log('arrChiffres après reverse: ' + arrChiffres); // [5, 4, 3, 2, 1]


/**
 * 07. Méthode slice()
 * Renvoie un objet tableau, contenant une tranche du tableau d'origine.
 * La tranche est définie par un indice de début
 *   et un indice de fin (exclus). Le tableau original ne sera pas modifié.
 **/
const trancheArrayChiffres = arrChiffres.slice(2, 5);
console.log('arrChiffres: ' + arrChiffres); //
console.log('tranche de arrChiffres: ' + trancheArrayChiffres); //

/**
 * 08. Méthode concat()
 * Permet de concaténer de nouveaux éléments dans un tableau.
 * Si ces éléments sont transmis sous forme de tableau,
 *   ils sont extraits du tableau
 * Les tableaux imbriqués sont conservés (voir dernier exemple)
 **/
let tChiffres = [1, 2];
console.log("tChiffres initial: " + tChiffres);
tChiffres = tChiffres.concat([3, 4]); // Returns [1, 2, 3, 4]
tChiffres = tChiffres.concat([5, 6]); // Returns [1, 2, 3, 4, 5, 6]
tChiffres = tChiffres.concat([7, [8, 9]]);   // Returns [1,2,3,4,5,6,7,[8,9]]
console.log("tChiffres final: ");
console.log(tChiffres);



/* 09. Méthode filtre()
* Prend en argument une fonction anonyme qui définie
*   une condition à respecter (un prédicat).
* La fonction anonyme reçoit en argument tour à tour
*   chaque item du tableau d'origine.
* Si la condition est respectée (true) l'item est conservé.
**/
const arrChiffres_sousEnsemble = arrChiffres.filter(function(chiffre) {
    return chiffre < 3;
});
console.log("Filtre: " + arrChiffres_sousEnsemble); // arrChiffres_sousEnsemble = [2,1]



/**
 * 10. Méthode map()
 * Passe chaque élément du tableau
 *   à une fonction anonyme que vous définissez,
 *   et qui retourne un tableau des valeurs obtenues.
 */
const arrChiffres_gonflesParMap = arrChiffres.map(function(chiffre) {
    return chiffre * chiffre;
});
console.log("arrChiffres : " + arrChiffres);
console.log("Map: " + arrChiffres_gonflesParMap); // arrChiffres_gonflesParMap = [24, 16, 9, 4, 1] 



/* 11. Méthode forEach()
 * La méthode forEach() boucle sur chaque élément du tableau
 * pour exécuter une fonction anonyme qui prend en paramètres
 * jusqu'à 3 arguments.
 * - l'élément du tableau
 * - son index
 * - le tableau lui-même
 **/
/* 11.a premier exemple: */
let sommeAvecforEach = 0;
arrChiffres.forEach(function(chiffre, index, tableau){
    sommeAvecforEach += chiffre;
});
console.log("arrChiffres : " + arrChiffres);
console.log("sommeAvecforEach : " + sommeAvecforEach);

/* 11.b deuxième exemple: */
donneesJeu.joueurs.forEach(function (joueur, index, tableau){
    joueur.id = index + tableau.length;
});
console.table(donneesJeu.joueurs);

/* 11.c troisième exemple: */
function cliquerRechauffer(evenement){
    console.log(this);
    this.innerText = "encore cool mais réchauffés";
}
const lesParagraphesCool = document.querySelectorAll(".cool");
// lesParagraphesCool est une liste de noeuds du DOM (NodeList)
// Notez qu'une NodeList n'est pas un Array
// Si on veut s'en servir comme tel, il faut faire une conversion
const arrParagraphesCool = Array.apply(null, lesParagraphesCool);
arrParagraphesCool.forEach(function(p){
    p.addEventListener("click", cliquerRechauffer);
});



/**
 * 08. Méthode reduce()
 * prend comme premier argument une fonction anonyme destinée
 *   à combiner les éléments du tableau pour les réduire à un seul élément
 * le second argument est la valeur de départ à donner à "a".
 * À la différence des fonctions forEach(), map() ou sort(),
 * le premier paramètre (a) n'est pas un élément du tableau
 * mais le résultat de chaque itération.
 * Toutefois, si on omet le second paramètre,
 *   la valeur de départ sera le premier item du tableau
 **/
/* on débute avec a = 0
 * pour additionner tout les éléments du tableau */
const somme = arrChiffres.reduce(function(a, b){
    return a + b;
}, 0);
console.log("Somme par réduction : " + somme);

/* on débute avec a = 1,
 * pour multiplier tout les éléments du tableau */
const produit = arrChiffres.reduce(function(a, b){
    return a * b;
}, 1);
console.log("Produit par réduction : " + produit);

/* on débute avec a = le premier élément du tableau,
 * puis on compare chaque valeur pour trouver le chiffre le plus grand
 * Syntaxe de l'instruction ternaire:
 * condition ? oui : non
 **/
const chiffreLePlusGrand = arrChiffres.reduce(function(a, b){
    return (a > b) ? a : b;
});
console.log("Chiffre le plus grand : " + chiffreLePlusGrand);

/**
 * À partir de la liste des repas pris dans la semaine 1
 * On veut créer un objet listant pour chaque menu : le nombre de fois consommé
 * on débute avec a = {} // un objet vide
 **/
const repasSemaine1 = ["Salade verte", "Ommelette", "Club Sandwich", "Salade verte", "Club Sandwich", "Salade verte", "Mac&Cheese", "Salade verte", "Boeuf Stroganoff", "Salade verte", "Spaghetti", "Salade verte", "Gratin de légumes", "Ommelette"];

const objRepasSemaine1Compilation = repasSemaine1.reduce(
    function (obj, item){
        if(!obj[item]){      // si ce menu n'est pas dans l'objet
           obj[item] = 0;    // l'ajouter avec un nombre de fois = 0
        }
        obj[item]++;         // incrémenter le nombre de fois ce menu dans l'objet
        return obj;
    }, {}
);
console.log("objRepasSemaine1Compilation :  ");
console.log(objRepasSemaine1Compilation);