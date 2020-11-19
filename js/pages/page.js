class Page {
    constructor(pageSpecs) {
        for (const [key, value] of Object.entries(pageSpecs)) {
            this[key] = value;
        }
      if (this.changeHistory === undefined) this.changeHistory = true;
    }

    /**
     * [ariane description]
     *
     * @param   {String|null}  pageEnCours  [pageEnCours description]
     *
     * @return  {String}                    [return description]
     */

    ariane(pageEnCours) {
        return `
    <nav>
      OriKids > <span onclick="new ProductList({changeHistory: true});">Accueil</span> ${pageEnCours === null ? "" : "> " + pageEnCours} 
    </nav>
    `;
    }
}

