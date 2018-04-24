
var all = 10
var compte = 0
var m = 0
var nb_chiffre = 1
while (compte < all) {
    while (m < nb_chiffre) {
	console.log(++compte);
	m++;
    }
    m = 0;
    console.log("\n");
    nb_chiffre++;
