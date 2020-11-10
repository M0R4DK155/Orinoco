class Component{

  DOM = null;

  /**
   * [constructor description]
   *
   * @param   {String}  tagName    [tagName description]
   * @param   {Object}  props      [props description]
   * @param   {HTMLElement}  domTarget  [domTarget description]
   *
   * @return  {[type]}             [return description]
   */
  constructor(tagName, props, domTarget){
    for (const [key, value] of Object.entries(props)) {
      this[key]=value;
    }
    this.DOM = document.createElement(tagName);
    domTarget.appendChild(this.DOM);
  }
}