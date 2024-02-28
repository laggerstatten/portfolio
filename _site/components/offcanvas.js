class Offcanvas extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasFullDark" data-bs-backdrop="false" aria-labelledby="offcanvasFullDark">
        <div class="offcanvas-header position-absolute top-0 end-0 z-index-9">
            <a class="ms-auto btn btn-primary btn-round zoom-hover" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fas fa-times p-0"></i>
            </a>
        </div>
            <div class="offcanvas-body position-relative px-5 px-md-8 pt-3 pt-md-7">
                <!-- Offcanvas inner START -->
                    <div class="w-100 h-100 d-flex align-items-start flex-column">
                        <!-- Offcanvas Menu START -->
                        <ul class="nav dropdown-toggle-start-icon flex-column">

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2 position-relative">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke text-primary-shadow" href="index.html">Home</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— Design & Me</p>
                                <!-- Offcanvas dropdown toggle START -->
                                <a class="dropdown-toggle collapsed" data-bs-toggle="collapse" href="#home-dropdown-collapse" role="button" aria-expanded="false" aria-controls="home-dropdown-collapse"></a>
                                <!-- Offcanvas dropdown toggle END -->
                            </li>

                            <!-- Home menu Dropdown START -->
                            <li class="collapse" id="home-dropdown-collapse">
                                <ul class="nav flex-column w-100 pb-4 pe-0 pe-lg-5">
                                    <li class="nav-item"> <a class="nav-link px-0 text-body" href="/index.html#featuredProjects">Featured Projects</a> </li>
                                </ul>
                            </li>
                            <!-- Home menu Dropdown END -->

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke" href="/portfolio.html">Portfolio</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— projects from the last 5 years</p>
                            </li>

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke" href="/blog-minimal.html">Blog</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— thoughts on design</p>
                            </li>

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke" href="/design_timeline.html">Design Timeline</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— my time at LSC</p>
                            </li>

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke" href="/aboutme.html">About Me</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— who am I?</p>
                            </li>

                            <!-- Nav item -->
                            <li class="nav-item d-block d-md-flex mb-2">
                                <h5 class="display-5 mb-0"><a class="nav-link text-light-stroke" href="/contact.html">Contact Me</a></h5>
                                <p class="align-self-center mt-0 mt-md-5">— talk to me</p>
                            </li>


                        </ul>
                        <!-- Offcanvas Menu END -->

                    </div>
                <!-- Offcanvas inner END -->
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('offcanvas-component', Offcanvas);