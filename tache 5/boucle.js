function voirDefinition() {
            // Récupérer le nom de la boucle entrée par l'utilisateur
            let nomBoucle = document.getElementById("boucleInput").value;
            let definition = "";
            let exemple = "";

            // Vérifier le nom de la boucle et fournir la définition et un exemple
            switch (nomBoucle.toLowerCase()) {
                case "for":
                    definition = "La boucle for est utilisée pour exécuter un bloc de code un nombre fixe de fois.";
                    exemple = "for (let i = 0; i < 5; i++) { console.log(i); }";
                    break;
                case "while":
                    definition = "La boucle while est utilisée pour exécuter un bloc de code tant qu'une condition spécifiée est vraie.";
                    exemple = "let i = 0; while (i < 5) { console.log(i); i++; }";
                    break;
                case "do while":
                    definition = "La boucle do-while est similaire à la boucle while, mais elle s'assure que le bloc de code est exécuté au moins une fois avant de vérifier si la condition est vraie.";
                    exemple = "let i = 0; do { console.log(i); i++; } while (i < 5);";
                    break;
                case "foreach":
                    definition = "La boucle foreach est utilisée pour itérer sur les éléments d'une collection (comme un tableau ou un objet) en exécutant un bloc de code pour chaque élément.";
                    exemple = "let fruits = ['pomme', 'banane', 'orange']; fruits.forEach(function(fruit) { console.log(fruit); });";
                    break;
                default:
                    definition = "La boucle spécifiée n'existe pas ou n'est pas prise en charge dans cet exemple.";
                    exemple = "Aucun exemple disponible.";
            }

            // Afficher la définition et l'exemple
            document.getElementById("definition").textContent = definition;
            document.getElementById("exemple").textContent = exemple;
        }
 
