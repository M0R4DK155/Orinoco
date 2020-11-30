// //Validation du panier
// confirmCart() 
//     orinoco.order.confirmCart({
//         firstName:,
//         name:,
//         email:,
//         address:,
//         city:,
//     })

//  Suppression d'un article
function deleteProduct() {
    let deleteProduct = document.querySelectorAll('#supprime');
    let nomProduit;
    let nombreTotalDeProduit = localStorage.getItem('qté');
    nombreTotalDeProduit = parseInt(nombreTotalDeProduit);
    let coutDuPanier = localStorage.getItem("prixTotal");
    coutDuPanier = parseInt(coutDuPanier);
    let data = JSON.parse(localStorage.getItem('panier'));

    // on fait une boucle For pour afficher les boutons "supprimer produits" autant de fois qu'il y a un article au panier

    for (let i = 0; i < deleteProduct.length; i++) {
        deleteProduct[i].addEventListener('click', () => {
            // récupération du nom du teddy pour plus tard
            nomProduit = deleteProduct[i].parentElement.parentElement.firstChild.innerText.trim();
            console.log(nomProduit);
            // récupération du qté du teddy pour calculs de la suppression
            qté = deleteProduct[i].parentElement.children[1].textContent;
            //conversion du string en number
            qté = parseInt(qté);
            // récupération du prix du teddy pour calculs de la suppression
            let price = deleteProduct[i].parentElement.children[3].textContent;
            //conversion du string en number
            price = parseInt(price);
            //calcul de la qté dans le panier après suppression de l'article
            calculQte = nombreTotalDeProduit - qté;
            localStorage.setItem('qté', calculQte);
            //calcul du prix dans le panier après suppression de l'article
            calculPrice = coutDuPanier - qté * price;
            localStorage.setItem('prixTotal', calculPrice);
            // on supprime la ligne du teddy correspondant au bouton supprimer
            delete data[nomProduit];

            // une petite alerte pour dire qu'un article à été supprimé.
            alert('Vous avez supprimé ' + nomProduit + ' de votre panier ! ')
            // on actualise le LocalStorage et recharge la page pour une mise a jour
            localStorage.setItem('panier', JSON.stringify(data));
            window.location.reload();

            affichagePanier();
            chargementPanier();
        });
    };
};