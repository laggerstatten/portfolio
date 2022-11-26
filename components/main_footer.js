class MainFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-dark pt-6 bg-dark-overlay-5 pattern-overlay-3">
            <div class="container">
                <div class="row pb-5">
                </div>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('main-footer-component', MainFooter);