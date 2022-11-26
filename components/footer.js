class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="pt-6">
      <div class="container">
        <div class="row">
          <!-- Footer Widget 1 -->
          <div class="col-sm-6 col-md-3 mb-5">
            <h3>Folio<span class="text-primary">.</span></h3>
            <p>Bootstrap based Creative Agency Portfolio Theme.</p>
            <div class="d-flex me-auto">
              <h6 class="mt-2 me-4">Follow on:</h6>
              <div class="list-group-inline list-unstyled text-primary-hover">
                <a href="#" class="list-group-item bg-transparent">Fb</a>
                <a href="#" class="list-group-item bg-transparent">Tw</a>
                <a href="#" class="list-group-item bg-transparent">Dr</a>
              </div>
            </div>
          </div>
          <!-- Footer Widget 2 -->
          <div class="col-sm-6 col-md-3 mb-5">
            <h5 class="mb-4">Our offices</h5>
            <!-- Address 1 -->
            <p class="fw-bold text-dark mb-2">New York, USA (HQ)</p>
            <address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
            <p>Call: <a href="#" class="text-body"><u>469-537-2410</u> (Toll-free)</a> </p>
            <!-- Address 2 -->
            <p class="fw-bold text-dark mb-2">Mumbai, India</p>
            <address class="mb-0">2492 Centennial NW, Acworth, GA, 30102</address>
            <p>Call: <a href="#" class="text-body"><u>(678) 324-1251</u> (Toll-free)</a> </p>
          </div>
          <!-- Footer Widget 3 -->
          <div class="col-sm-6 col-md-3 mb-5">
            <h5 class="mb-4">Useful links</h5>
            <div class="row">
              <div class="col-6">
                <ul class="nav flex-column text-primary-hover">
                  <li class="nav-item"><a class="nav-link pt-0" href="#">Our Work</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Develop</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Builder</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Market</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="nav flex-column text-primary-hover">
                  <li class="nav-item"><a class="nav-link pt-0" href="#">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Career <span class="badge bg-danger ms-2">2 Job</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Work</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer Widget 4 -->
          <div class="col-sm-6 col-md-3 mb-5">
            <h5 class="mb-4">Stay in touch</h5>
            <p>Subscribe to our newsletter to receive exclusive offers.</p>
            <div class="mb-3 mb-0">
              <input class="form-control mb-3" type="email" placeholder="Enter email...">
              <button class="btn btn-dark mb-0">Join us</button>
            </div>
          </div>
          
        </div>
    
        <!-- Divider -->
        <div class="divider opacity-1"></div>
    
        <!-- Footer copyright START -->
        <div class="row align-items-center justify-content-md-between py-4">
          <div class="col-md-6">
            <div class="text-center text-md-start">©2022 <a href="https://www.webestica.com/" target="_blank">Webestica</a>. All rights reserved
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
              <li class="nav-item"><a class="nav-link text-body text-primary-hover" href="#">Terms</a></li>
              <li class="nav-item"><a class="nav-link text-body text-primary-hover" href="#">Privacy</a></li>
              <li class="nav-item"><a class="nav-link text-body text-primary-hover pe-0" href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <!-- Footer copyright END -->
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);