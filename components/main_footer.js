class MainFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="pt-6">
          <div class="container">
            <!-- Divider -->
            <div class="divider opacity-1"></div>
            <!-- Footer copyright START -->
            <div class="row align-items-center justify-content-md-between py-4">
              <div class="col-md-6">
                <div class="text-center text-md-start">©2022 <a href="https://www.humboldtgeoscience.com/" target="_blank">Eric Schall</a>. All rights reserved
                </div>
              </div>
            </div>
            <!-- Footer copyright END -->
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('main-footer-component', MainFooter);