/* eslint-disable no-unused-vars */

// Règles pour les pages - Template principal (référence à l'Atomic Design).
class Page {
	constructor(pageSpecs) {
		for (const [key, value] of Object.entries(pageSpecs)) { //Object.entries () crée un tableau de tableaux. Chaque tableau interne a deux éléments. Le premier est la clé et le deuxième est la valeur.
			this[key] = value;
		}
		if (this.changeHistory === undefined) this.changeHistory = true; //Gestion historique par défaut, si pas défini il le fait
	}

	/**
   * [ariane description]
   *
   * @param   {String|null}  pageEnCours  [pageEnCours description]
   *
   * @return  {String}                    [return description]
   */

	//Affichage dynamique du fil d'ariane
	ariane(pageEnCours) {
		return `
    <nav>
      OriKids > <span onclick="new ProductList({changeHistory: true});">Accueil</span> ${pageEnCours === null ? "" : "> " + pageEnCours} 
    </nav>
    `;
	}
}

