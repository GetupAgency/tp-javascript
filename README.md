# Exercice Javascript
Javascript exercise

Le but de cet exercice est de réaliser un programme simulant le combat round par round de deux participants, pour lesquels nous allons définir plusieurs propriétés.
            
Le fichier html 'index.html' à votre disposition contient un formulaire permettant de saisir des valeurs pour chaque personnage.            

            1. Dans index.html, Rajouter un bouton dans le div 'start-fight' et donnez lui un id.

        <p>
            2. Créez un fichier 'script.js' et liez le à la page Html.
        </p>
        <p>
            3. Ajoutez un évènement de click à votre bouton (dans le fichier script) et créez une fonction "validation".
        </p>
        <p>
            4. Récupérez chaque valeur saisie dans le formulaire et stockez les dans des variables locales.
        </p>
        <p>
            5. Effectuez un test pour la variable de santé, si la valeur saisie n'est pas un nombre, afficher 'nombre obligatoire'.
        </p>
        <p>
            6. Une fois toutes les valeurs récupérées, créez un booléen 'isValid' qui doit être true quand tous les champs sont remplis, et false si un champ est vide.
        </p>
        <p>
            7. Si isValid est à false, écrire dans le div qui a l'id "error", "le formulaire est invalide" et arrêtez l'execution
        </p>
        <p>
            8. Si votre 'isValid' est correct, déclarez deux objets et donnez leur comme propriétés :<br><br>
            var fighter1 = {<br>
                name : "Ragnar",<br>
                health : 130,<br>
                strength : 15,<br>
                criticalChance : 5,<br>
                armor : 5<br>
            };<br>
        </p>
        <p>
            9. Créez une fonction "goFight" qui prend 2 paramètres (les deux objets des combattants)
        </p>
        <p>
            10. Cachez le formulaire (qui a l'id 'formulaire')
        </p>
        <p>
            11. Rendez visible le conteneur de notre tableau (qui a l'id 'fight')
        </p>
        <p>
            12. Dans le tableau html de 'index.html', vous trouverez deux th (table heading), représentant les noms des combattants.<br>
            Remplacez 'player1' et 'player2' par les noms des combattants saisis dans le formulaire.
        </p>
        <p>
            13. Récupérez dans une variable "insert" le tableau ayant l'id "fight-table".
        </p>
        <p>
            14. Faites un 'for' ou un 'while' pour simuler 100 rounds.
        </p>
        <p>
            15. Déclarez et calculez les variables suivantes pour chaque round : <br><br>
            Les dégats que chaque joueur inflige à l'autre <br><br>
            - var damagePlayer1 <br>
            - var damagePlayer2<br><br>
            La santé restante de chaque joueur<br><br>
            - var healthPlayer1 <br>
            - var healthPlayer2<br>

        </p>
        <p>
            16. Si la vie d'un des joueurs atteint 0, créez un div déclarant le vainqueur, et arrêtez la boucle.
        </p>
    </div>
    <h1>Pour aller plus loin</h1>
    <div>
        <p>
            17. Générer les valeurs du formulaire dynamiquement, à chaque rechargement, la vie, l'esquive etc doivent être comprises entre 0 et 100.<br>
            18. Enregistrez dans un cookie les statistiques des combats au fur et à mesure, et faites une page "historique des combats".<br>
            19. Afficher deux images (1 par combattant), et animez chaque round d'un mouvement du joueur qui attaque.
        </p>
    </div>
</body>

</html>
