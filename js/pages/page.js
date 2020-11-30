class Page extends LifeCycle {
  constructor(pageSpecs) {
    super();
    for (const [key, value] of Object.entries(pageSpecs)) {
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

