class MainHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="navbar-light header-static navbar-sticky navbar-space-lg">
        <!-- Logo Nav START -->
        <nav class="navbar navbar-expand">
          <div class="container">

            <!-- Logo START -->
            <a class="navbar-brand d-flex" href="index.html">
              <img class="navbar-brand-item" src="assets/images/logo.png" alt="Logo">
              <h6 class="smaller text-muted mb-0 ms-2 d-none d-sm-block">Eric<br>Schall</h6>
            </a>
            <!-- Logo END -->

            <!-- Nav Right START -->
            <div class="nav flex-nowrap align-items-center">
              <!-- Offcanvas Opener -->
              <div class="nav-item ms-4">
                <a class="nav-link p-0 flex-row" data-bs-toggle="offcanvas" href="#offcanvasFullDark" role="button" aria-controls="offcanvasFullDark">
                  <span class="font-heading fw-bold" data-bs-target="#offcanvasFullDark">Menu</span>
                  <i class="bi bi-text-right rtl-flip display-8 align-middle" data-bs-target="#offcanvasFullDark"></i>
                </a>
              </div>
            </div>
            <!-- Nav Right END -->
            
          </div>
        </nav>
        <!-- Logo Nav END -->
      </header>
      `;
    }
  }
  
  customElements.define('main-header-component', MainHeader);