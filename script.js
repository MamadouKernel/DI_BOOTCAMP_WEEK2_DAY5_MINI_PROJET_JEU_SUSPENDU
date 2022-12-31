// demander au joueur 1 de choisir un mot
const word = prompt("Joueur 1, choisissez un mot (minimum 8 lettres) :");

// s'assurer que le mot a au moins 8 lettres

if (word.length < 8) {

    console.log("Le mot doit avoir au moins 8 lettres !");

} else {

    // masquer le mot en utilisant des étoiles

    let hiddenWord = '';
    for (let i = 0; i < word.length; i++) {

        hiddenWord += '*';

    }

    console.log(hiddenWord); // afficher le mot masqué dans la console

    // initialiser le compteur de chances et la liste des suppositions

    let chances = 10;

    let guesses = [];

  // boucle tant que le joueur a encore des chances et n'a pas deviné le mot

    while (chances > 0 && hiddenWord.indexOf('*') !== -1) {

        // demander au joueur 2 de deviner une lettre

        let letter = prompt("Joueur 2, devinez une lettre :");

        // vérifier si la lettre a déjà été devinée

        if (guesses.indexOf(letter) !== -1) {

            console.log("Vous avez déjà deviné cette lettre !");

        } else {

            // ajouter la lettre aux suppositions

            guesses.push(letter);

            console.log("Suppositions :", guesses);

            // vérifier si la lettre se trouve dans le mot

            if (word.indexOf(letter) !== -1) {

                console.log("Bonne supposition !");

                // afficher la lettre aux bons endroits dans le mot masqué

                let temp = '';

                for (let i = 0; i < word.length; i++) {

                    if (word[i] === letter) {

                        temp += letter;

                    } else {

                        temp += hiddenWord[i];

                    }
                }
                hiddenWord = temp;

                console.log(hiddenWord); // afficher le mot masqué avec la lettre visible

            } else {

                console.log("Mauvaise supposition !");

                chances--; // décrémenter le compteur de chances

                console.log("Chances restantes :", chances);
            }
        }
    }

    // afficher un message en fonction de la fin de la partie

    if (hiddenWord.indexOf('*') === -1) {

        console.log("CONGRATS YOU WIN !");

    } else {

        console.log("YOU LOSE !");
    }
}