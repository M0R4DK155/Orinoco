class Modal {
    constructor(domTarget) {
        this.DOM = document.createElement('div'); //Création d'un nouvel élément "div" dans le DOM. L'opérateur this fait référence à Cart
        this.DOM.className = 'aa-cartbox'; //TROUVER l'ELEMENT A CIBLER!
        domTarget.appendChild(this.DOM); //Déplacer un élément d'un endroit vers un autre
        this.products = [];
        this.render();
        orinoco.modal = this;
    }
}
