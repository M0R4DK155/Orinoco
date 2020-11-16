function affichageProduit() {

    let article = document.createElement('article');
    let image = document.createElement('img');
    image.src = teddy.imageUrl;
    id = teddy._id;
    let div = document.createElement('div');
    let nom = document.createElement('h3');
    nom.textContent = teddy.name;
    nom.id = "teddy";

    let prix = document.createElement('h4');
    prix.textContent = 'Prix :';
    let price = document.createElement('p');
    price.textContent = teddy.price + ' €';

    let desc = document.createElement('h4');
    desc.textContent = 'Description :';
    let description = document.createElement('p');
    description.textContent = teddy.description;

    // bouton retour à la liste de produit (index.html)
    let liste = document.createElement('button');
    liste.id = "liste";
    liste.textContent = "Retour à la liste";
    liste.addEventListener('click', function () {
        window.location.href = "index.html";
    });
}

/////////
var xhr = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr);
                    alert("Une erreur est survenue")
                };
            };
        };
        xhr.open('GET', 'http://localhost:3000/api/teddies/', true);
        xhr.send();
    });
};

/////////
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE) {
        let confirmation = JSON.parse(this.responseText);
        sessionStorage.setItem('', JSON.stringify(confirmation));
        let prix = JSON.parse(localStorage.getItem(''));
        sessionStorage.setItem('', JSON.stringify(prix));
        //Des que la requete est envoyé, on bascule sur la page de confirmation de commande avec toutes les infos demandé : Id de commande, prix du panier
        window.location.href = "nomdufichier.html";
    }
};
request.open("post", "http://localhost:3000/api/teddies/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(achat);