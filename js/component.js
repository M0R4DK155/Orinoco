class Component extends LifeCycle {

    DOM = null;

    /**
     * [constructor description]
     *
     * @param   {String}        tagName    [tagName description]
     * @param   {Object}        props      [props description]
     * @param   {HTMLElement}   domTarget  [domTarget description]
     *
     * @return  {[type]}             [return description]
     */
    constructor(tagName, props, domTarget) {
      super();
        for (const [key, value] of Object.entries(props)) {
            this[key] = value;
        }
        this.DOM = document.createElement(tagName);
        this.DOM.id = this.id;
        domTarget.appendChild(this.DOM);
        console.log(DOM)
    }

    // mounted() {
    //     // alert("ajouté");
    // }
    // unmounted() {
    //     delete (orinoco.products[this.ref]);
    //     if( this.whenUnmounted !== undefined ) this.whenUnmounted();
    // }
}

