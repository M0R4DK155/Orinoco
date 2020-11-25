class LifeCycle {
    die() { };
    mounted() {
        this.whenMounted();
    }

    //Observateur de mutations DOM

    // Fonction callback à éxécuter quand une mutation est observée
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('Un noeud enfant a été ajouté ou supprimé.', mutation);
                if (mutation.addedNodes[0] !== undefined) orinoco.products[mutation.addedNodes[0].id].mounted();
                if (mutation.removedNodes[0] !== undefined) orinoco.products[mutation.removedNodes[0].id].unmounted();
            }
            else if (mutation.type === 'attributes') {
                console.log("L'attribut '" + mutation.attributeName + "' a été modifié.");
            }
        }
    };

    // Créé une instance de l'observateur lié à la fonction de callback
    const observer = new MutationObserver(callback);

    // Commence à observer le noeud cible pour les mutations précédemment configurées
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
};
