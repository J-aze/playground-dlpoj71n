# L'algorithme du professeur Guique

Extrait de https://callicode.fr/pydefis/Algorithme/txt

Les valeurs a, b et c sont fournies en paramètre à l'algorithme.

    Initialiser k et n respectivement à 1 et 0
    répéter tant que k est strictement inférieur à 1000-n
    a <- b
    b <- c + a
    c <- 3\*c + 4\*a - b
    n <- a + b
    augmenter k de 1
    fin répéter
Défi
<br/>Ecrire la fonction qui, étant donné les valeurs de a, b et c renvoie la valeur de c à la fin de l'algorithme.

@[Écrire l'algorithme.]({ "stubs": ["professeur_guique.js"], "command": "node_modules/mocha/bin/mocha professeur_guique.spec.js"})
