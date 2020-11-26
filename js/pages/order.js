//Création de la page panier
class Order extends Page {
  constructor(pageSpecs = {}) {
    super(pageSpecs)
    console.log(pageSpecs, this)
    if (this.changeHistory) orinoco.pageManager.changePage("oriKids : votre panier", "panier", this); //Historique changement de page
    orinoco.pageManager.domTarget.innerHTML = this.template();
  }

  template() {
    return `
      <div id="contentBasket"></div>
      <div id="totalBasket">Le montant total de votre commande est de : €</div>
      <form id="formulaire">
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="firstname">Prénom :</label>
            <input type="text" name="firstName" class="form-control" id="firstname" placeholder="Votre prénom..." required /><span id="oublisPrenom"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="name">Nom :</label>
            <input type="text" name="lastName" class="form-control" id="name" placeholder="Votre nom..." required /><span id="oublisNom"></span><br />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="email">Email :</label>
            <input type="email" name="email" class="form-control" id="email" placeholder="Votre email@email.fr" required /><span id="oublisEmail"></span><br />
          </div>
          <div class="form-group col-md-5">
            <label for="address">Adresse :</label>
            <input type="text" name="address" class="form-control" id="address" placeholder="6, Rue du Moulin" required /><span id="oublisAdress"></span><br />
          </div>
        </div>
        <div class="form-group col-md-8">
          <label for="city">Ville :</label>
          <input type="text" name="city" class="form-control" id="city" placeholder="Votre ville..." required /><span id="oublisVille"></span><br />
        </div>

        <a id="lien" href="confirmation.html">
          Valider
        </a>
      </form>
      
      `
  }

  whenMounted() {
    alert("à compléter");
  }

}
