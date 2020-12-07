
//afficher une alerte si il manque un renseignement et enregistrer les données dans le localStorage
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

  if (prenomValid.test(prenom.value) == false){ //test = on teste notre expression régulière sur prenom.value - Nous renvoie soit "true" soit "false" (OUI j'ai trouvé la Regex dans le texte à tester, NON je n'ai pas trouvé)
    oublisPrenom.textContent = "Format de votre prénom incorrect";
    oublisPrenom.style.color = 'red';
    return event.preventDefault();

  } else if (nomValid.test(nom.value) == false){
    oublisNom.textContent = "Format de votre nom incorrect";
    oublisNom.style.color = 'red';
    return event.preventDefault();

  } else if (mailValid.test(mail.value) == false){
    oublisEmail.textContent = "Format de votre e-mail incorrect";
    oublisEmail.style.color = 'red';
    return event.preventDefault();

  } else if (adresseValid.test(adresse.value) == false){
    oublisAdress.textContent = "Format de votre adresse incorrect";
    oublisAdress.style.color = 'red';
    return event.preventDefault();

  } else if (villeValid.test(ville.value) == false){
    oublisVille.textContent = "Format de votre ville incorrect";
    oublisVille.style.color = 'red';
    return event.preventDefault();

  }
  // si tout à été bien rempli, on envoi la commande au serveur, avec toutes les coordonnées du client
  
  request.open("post", "http://localhost:3000/api/teddies/order");
  request.setRequestHeader("Content-Type", "application/json");
  request.sendForm(achat);
