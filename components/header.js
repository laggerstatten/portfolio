class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="navbar-light header-static navbar-sticky">
        <!-- Logo Nav START -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">

                <!-- Logo START -->
                <a class="navbar-brand" href="../index.html">
                    <img class="navbar-brand-item" src="../assets/images/logo.png" alt="Logo">
                </a>
                <!-- Logo END -->
    
                <!-- Responsive navbar toggler -->
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"> </span>
                </button>
    
                <!-- Main Menu START -->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll mx-auto">
                        <!-- Menu item 1 Main -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="mainMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Main</a>
                            <div class="dropdown-menu pb-3 pb-lg-0" aria-labelledby="mainMenu">
                                <div class="container">
                                    <div class="row g-0 flex-fill">
                                        <div class="col-sm-6 col-lg-3">
                                            <ul class="list-unstyled mb-4 mb-lg-0">
                                                <li class="dropdown-header">Main</li>
                                                <li> <a class="dropdown-item" href="../index.html">Home</a> </li>
                                                <li> <a class="dropdown-item" href="../portfolio.html">Portfolio</a> </li>
                                                <li> <a class="dropdown-item" href="../design_timeline.html">Design Timeline</a> </li>
                                                <li> <a class="dropdown-item" href="../about_me.html">About Me</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- Menu item 2 Featured -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="featuredMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Featured</a>
                            <div class="dropdown-menu pb-3 pb-lg-0" aria-labelledby="featuredMenu">
                                <div class="container">
                                    <div class="row g-0 flex-fill">
                                        <div class="col-sm-6 col-lg-3">
                                            <ul class="list-unstyled mb-4 mb-lg-0">
                                                <li class="dropdown-header">Featured Projects</li>
                                                <li> <a class="dropdown-item" href="../project_detail/Western_Destinations.html">Western Destinations</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/Rural_Texas.html">Rural Texas</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/HEB_Vietnamese_OwnBrand.html">H-E-B Vietnamese Own-Brand</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/Global_Conflagration.html">"Global Conflagration"</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/Generic_Aquarium.html">Generic Aquarium</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/StDalfour_Latin_Market.html">St. Dalfour Latin Market</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/WeDidntStartTheFire.html">We Didn't Start the Fire</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/Primary_Sector_Currency.html">Primary Sector Currency</a> </li>
                                                <li> <a class="dropdown-item" href="../project_detail/Elephants_And_Mice.html">Elephants & Mice</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> 
                        <!-- Menu item 3 Portfolio -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="portfolioMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                            <div class="dropdown-menu pb-3 pb-lg-0" aria-labelledby="portfolioMenu">
                                <div class="container">
                                    <div class="row g-0 flex-fill">
                                        <div class="col-sm-6 col-lg-3">
                                            <ul class="list-unstyled mb-4 mb-lg-0">
                                                <li class="dropdown-header">Portfolio by Discipline</li>
                                                <li> <a class="dropdown-item" href="../discipline/illustrator_projects.html">Adobe Illustrator</a> </li>
                                                <li> <a class="dropdown-item" href="../discipline/photoshop_projects.html">Adobe Photoshop</a> </li>
                                                <li> <a class="dropdown-item" href="../discipline/indesign_projects.html">Adobe InDesign</a> </li>
                                                <li> <a class="dropdown-item" href="../discipline/studio_art_projects.html">Studio Art</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- Main Menu END -->

            </div>
        </nav>
        <!-- Logo Nav END -->
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);