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
    let productLine;
    let totalProduct = localStorage.getItem('qty');
    totalProduct = parseInt(totalProduct);
    let totalBasket = localStorage.getItem("totalBasket");
    totalBasket = parseInt(totalBasket);
    let data = JSON.parse(localStorage.getItem('panier'));

    // on fait une boucle For pour afficher les boutons "supprimer produits" autant de fois qu'il y a un article au panier

    for (let i = 0; i < deleteProduct.length; i++) {
        deleteProduct[i].addEventListener('click', () => {
            // récupération du nom du teddy pour plus tard
            productLine = deleteProduct[i].parentElement.parentElement.firstChild.innerText.trim();
            console.log(productLine);
            // récupération du qty du teddy pour calculs de la suppression
            qty = deleteProduct[i].parentElement.children[1].textContent;
            //conversion du string en number
            qty = parseInt(qty);
            // récupération du prix du teddy pour calculs de la suppression
            let price = deleteProduct[i].parentElement.children[3].textContent;
            //conversion du string en number
            price = parseInt(price);
            //calcul de la qty dans le panier après suppression de l'article
            calculQte = totalProduct - qty;
            localStorage.setItem('qty', calculQte);
            //calcul du prix dans le panier après suppression de l'article
            calculPrice = totalBasket - qty * price;
            localStorage.setItem('totalBasket', calculPrice);
            // on supprime la ligne du teddy correspondant au bouton supprimer
            delete data[productLine];

            // une petite alerte pour dire qu'un article à été supprimé.
            alert('Vous avez supprimé ' + productLine + ' de votre panier ! ')
            // on actualise le LocalStorage et recharge la page pour une mise a jour
            localStorage.setItem('panier', JSON.stringify(data));
            window.location.reload();

            addProductsInResume();
            redefineCartContent();
        });
    };
};

// Récupérer la valeur des champs saisis par le client

let firstName = document.getElementById('firstname').value;
let lastName = document.getElementById('name').value;
let email = document.getElementById('email').value;
let address = document.getElementById('address').value;
let city = document.getElementById('city').value;

// on met les valeurs dans un objet pour la requete POST

let contact = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "address": address,
    "city": city,
};

// création de l'objet obligatoire pour la requete à envoyer au serveur
let objt = {
    contact,
    products
};

let achat = JSON.stringify(objt);
// console.log(achat);
// console.log(products);

//afficher une alerte si il manque un renseignement et enregistrer les données dans le localStorage - Regex
let prenom = document.getElementById('firstname');
let oublisPrenom = document.getElementById('oublisPrenom');
let prenomValid = /^[a-zA-Z ,.'-]+$/;

let nom = document.getElementById('name');
let oublisNom = document.getElementById('oublisNom');
let nomValid = /^[a-zA-Z ,.'-]+$/;

let mail = document.getElementById('email');
let oublisEmail = document.getElementById('oublisEmail');
let mailValid = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;

let adresse = document.getElementById('address');
let oublisAdress = document.getElementById('oublisAdress');
let adresseValid = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

let ville = document.getElementById('city');
let oublisVille = document.getElementById('oublisVille');
let villeValid = /^^[a-zA-Z ,.'-]+$/;

if (prenomValid.test(prenom.value) == false) {
    oublisPrenom.textContent = "Format de votre prénom incorrect";
    oublisPrenom.style.color = 'red';
    return event.preventDefault();

} else if (nomValid.test(nom.value) == false) {
    oublisNom.textContent = "Format de votre nom incorrect";
    oublisNom.style.color = 'red';
    return event.preventDefault();

} else if (mailValid.test(mail.value) == false) {
    oublisEmail.textContent = "Format de votre e-mail incorrect";
    oublisEmail.style.color = 'red';
    return event.preventDefault();

} else if (adresseValid.test(adresse.value) == false) {
    oublisAdress.textContent = "Format de votre adresse incorrect";
    oublisAdress.style.color = 'red';
    return event.preventDefault();

} else if (villeValid.test(ville.value) == false) {
    oublisVille.textContent = "Format de votre ville incorrect";
    oublisVille.style.color = 'red';
    return event.preventDefault();

} else if (panier == null || total == 0) {
    return event.preventDefault();

} else {
    // si tout à été bien rempli, on envoi la commande au serveur, avec toutes les coordonnées du client
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            let confirmation = JSON.parse(this.responseText);
            sessionStorage.setItem('order', JSON.stringify(confirmation));
            let prix = JSON.parse(localStorage.getItem('totalBasket'));
            sessionStorage.setItem('prix', JSON.stringify(prix));
            console.log(typeof prix);
            console.log(prix);
            //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
            window.location.href = "commande.html";
        }
    };
    request.open("post", "http://localhost:3000/api/teddies/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(achat);
} 