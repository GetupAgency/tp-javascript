// On récupère notre bouton de soumission du formulaire
var formValid = document.getElementById("submitForm");

// On lui ajoute un évènement de Click
formValid.addEventListener("click", validation);

// Function appelée par le click de soumission du formulaire
function validation(event) {
  // On récupère les valeurs des deux noms
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;

  // On récupère la valeur des santés
  var health1 = document.getElementById("health1").value;
  // Si la santé du premier joueur n'est pas un nombre, afficher une alert ("nombre obligatoire !")
  if (!isNumber(health1)) {
    alert("Nombre obligatoire");
    return false;
  }
  var health2 = document.getElementById("health2").value;

  //On récupère les valeurs des forces
  var strength1 = document.getElementById("strength1").value;
  var strength2 = document.getElementById("strength2").value;

  // On récupère les valeurs de la chance critique
  var criticalChance1 = document.getElementById("criticalChance1").value;
  var criticalChance2 = document.getElementById("criticalChance2").value;

  // On récupère les valeurs de la chance critique
  var esquive1 = document.getElementById("esquive1").value;
  var esquive2 = document.getElementById("esquive2").value;

  // On récupère les valeurs de l'armure
  var armor1 = document.getElementById("armor1").value;
  var armor2 = document.getElementById("armor2").value;

  // On défini un boolean qui spécifie si tous les champs du formulaire sont remplis correctement
  var isValid =
    health1 &&
    health2 &&
    strength1 &&
    strength2 &&
    criticalChance1 &&
    criticalChance2 &&
    armor1 &&
    armor2 &&
    name1 &&
    name2;

  // Si le boolean est vrai, alors on déclare deux combattants
  if (isValid) {
    // On affecte à nos propriétés d'objet les valeurs correspondantes
    var fighter1 = {
      name: name1,
      health: health1,
      strength: strength1,
      criticalChance: criticalChance1,
      esquive: esquive1,
      armor: armor1
    };
    var fighter2 = {
      name: name2,
      health: health2,
      strength: strength2,
      criticalChance: criticalChance2,
      esquive: esquive2,
      armor: armor2
    };
    // On appelle une methode goFight() qui prend deux paramètres (les deux combattants)
    goFight(fighter1, fighter2);
  } else {
    // Si isValid est false, on affiche le message d'erreur
    document.getElementById("error").textContent = "Le formulaire est invalide";
  }
}

// Notre fonction simulant le combat
function goFight(fighter1, fighter2) {
  // On affiche le conteneur du combat
  var fightDiv = document.getElementById("fight");
  fightDiv.style.display = "block";

  // On cache le formulaire
  document.getElementById("formulaire").style.display = "none";

  // On nomme nos deux combattants dans le tableau
  document.getElementById("fighter1").innerHTML = fighter1.name;
  document.getElementById("fighter2").innerHTML = fighter2.name;

  // On récupère le tableau qui va contenir nos statistiques
  var insert = document.getElementById("fight-table");

  /**
     * A la place du while, nous aurions pu faire un for 
     * for(var i = 1;i<=200;i++) 
     * */
  var i = 1;
  while (fighter1.health >= 0 && fighter2.health >= 0) {
    // chance de CC aléatoire
    chanceCC1 = Math.ceil(Math.random() * 100);
    chanceCC2 = Math.ceil(Math.random() * 100);

    // chance d'esquive aléatoire
    esquiveP1 = Math.ceil(Math.random() * 100);
    esquiveP2 = Math.ceil(Math.random() * 100);

    // Les dégats infligés des deux joueurs
    // var damageJoueur1 = son nombre de dégats etc*/
    var damageBase1 = fighter1.strength - fighter2.armor;
    var damageBase2 = fighter2.strength - fighter1.armor;

    // Si esquive, damage = 0, sinon si isCritical = true, damage = damage *1.5, sinon damage = damage
    var damageF1 = !isEsquive(esquiveP2, fighter2.esquive)
      ? isCritical(damageBase1, chanceCC1, fighter1.criticalChance)
      : 0;
    var damageF2 = !isEsquive(esquiveP1, fighter1.esquive)
      ? isCritical(damageBase2, chanceCC2, fighter2.criticalChance)
      : 0;

    // La vie restante des deux joueurs
    fighter1.health = fighter1.health - damageF2;
    fighter2.health = fighter2.health - damageF1;

    // On déclare notre nouvelle ligne du tableau
    var new_row = insert.insertRow(i + 1);

    // Première case, le numéro du round
    new_row.insertCell(0).innerHTML = "<strong>Round " + i + "</strong>";
    // Seconde case, le nombre de points encaissés par le joueur 1
    new_row.insertCell(1).innerHTML = damageF2;
    // Troisième case, le nombre de points infligés par le joueur 1
    new_row.insertCell(2).innerHTML = damageF1;
    // Quatrième case, la vie restante du joueur 1
    new_row.insertCell(3).innerHTML = fighter1.health;
    // Cinquième case, le nombre de points encaissés par le joueur 1
    new_row.insertCell(4).innerHTML = damageF1;
    // Sixième case, le nombre de points infligés par le joueur 1
    new_row.insertCell(5).innerHTML = damageF2;
    // Septième case, la vie restante du joueur 1
    new_row.insertCell(6).innerHTML = fighter2.health;

    // Fighter 2 win
    if (fighter1.health <= 0 && fighter2.health > fighter1.health) {
      fightDiv.innerHTML += "<h1>WINNER : " + fighter2.name + "</h1>";
    } else if (fighter2.health <= 0 && fighter1.health > fighter2.health) {
      // Fighter 1 win
      fightDiv.innerHTML += "<h1>WINNER : " + fighter1.name + "</h1>";
    }
    /**
         * Dans le cas d'un for, on doit stopper la boucle quand le combat est fini
         * if(fighter1.health <= 0 || fighter2.health <= 0){
         *  return false;
         *   }
         */
    i++;
  }
}
function isEsquive(esquiveRandom, esquiveChance) {
  //esquiveRandom est le nombre aléatoire généré entre 0 et 100
  // si il est inférieur ou égal à notre chance d'esquive, le joueur esquive
  return esquiveRandom <= esquiveChance;
}

function isCritical(damageBase, criticalRandom, criticalChance) {
  //criticalRandom est le nombre aléatoire généré entre 0 et 100
  // si il est inférieur ou égal à notre chance critique, le joueur fait un coup critique
  // son dégat est augmenté de 50%
  // on pourrait bien sur définir ses dégats critiques indépendamment
  return criticalChance <= criticalRandom ? damageBase * 1.5 : damageBase;
}

// isNumber à l'aide de Regexp
function isNumberRegexp(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}
// isNumber à l'aide de la méthode javascript native isNaN
function isNumber(obj) {
  return !isNaN(parseFloat(obj));
}
