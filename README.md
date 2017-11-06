# Exercice Javascript
Javascript exercise

Le but de cet exercice est de réaliser un programme simulant le combat round par round de deux participants, pour lesquels nous allons définir plusieurs propriétés.
            
Le fichier html 'index.html' à votre disposition contient un formulaire permettant de saisir des valeurs pour chaque personnage.            

            1. Dans index.html, Rajouter un bouton dans le div 'start-fight' et donnez lui un id.

            2. Créez un fichier 'script.js' et liez le à la page Html.
       
            3. Ajoutez un évènement de click à votre bouton (dans le fichier script) et créez une fonction "validation".
       
            4. Récupérez chaque valeur saisie dans le formulaire et stockez les dans des variables locales.
       
            5. Effectuez un test pour la variable de santé, si la valeur saisie n'est pas un nombre, afficher 'nombre obligatoire'.
        
            6. Une fois toutes les valeurs récupérées, créez un booléen 'isValid' qui doit être true quand tous les champs sont remplis, et false si un champ est vide.
       
            7. Si isValid est à false, écrire dans le div qui a l'id "error", "le formulaire est invalide" et arrêtez l'execution
        
            8. Si votre 'isValid' est correct, déclarez deux objets et donnez leur comme propriétés :<br><br>
            var fighter1 = {
                name : "Ragnar",
                health : 130,
                strength : 15,
                criticalChance : 5,
                armor : 5
            };
       
            9. Créez une fonction "goFight" qui prend 2 paramètres (les deux objets des combattants)
        
            10. Cachez le formulaire (qui a l'id 'formulaire')
        
            11. Rendez visible le conteneur de notre tableau (qui a l'id 'fight')
        
            12. Dans le tableau html de 'index.html', vous trouverez deux th (table heading), représentant les noms des combattants.
            Remplacez 'player1' et 'player2' par les noms des combattants saisis dans le formulaire.
       
            13. Récupérez dans une variable "insert" le tableau ayant l'id "fight-table".
     
            14. Faites un 'for' ou un 'while' pour simuler 100 rounds.
        
            15. Déclarez et calculez les variables suivantes pour chaque round :
            Les dégats que chaque joueur inflige à l'autre
            - var damagePlayer1
            - var damagePlayer2
            La santé restante de chaque joueur
            - var healthPlayer1 
            - var healthPlayer2

            16. Si la vie d'un des joueurs atteint 0, créez un div déclarant le vainqueur, et arrêtez la boucle.

Pour aller plus loin
    
            17. Générer les valeurs du formulaire dynamiquement, à chaque rechargement, la vie, l'esquive etc doivent être comprises entre 0 et 100.
            18. Enregistrez dans un cookie les statistiques des combats au fur et à mesure, et faites une page "historique des combats".<br>
            19. Afficher deux images (1 par combattant), et animez chaque round d'un mouvement du joueur qui attaque.
        
