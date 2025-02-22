class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    toggleNavbar() {
        const toggler = this.querySelector(".navbar-toggler");
        toggler?.addEventListener("click", function () {
            toggler.classList.toggle("open");

            if (toggler.classList.contains("open")) {
                toggler.innerHTML = ` 
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>`;
            } else {
                toggler.innerHTML = `<span class="navbar-toggler-icon toggler-icon"></span>`;
            }
        });
    }

    connectedCallback() {
        // Get attributes passed from the component usage
        const theme = this.getAttribute('data-theme') || 'dark'; // default: dark theme
        const bgColor = this.getAttribute('data-bg') || 'navbar-bg';
        const logoSrc = this.getAttribute('data-logo') || './imgs/rqm-white.png';

        // Set Navbar HTML with dynamic attributes
        this.innerHTML = `
        <nav id="navbar" class="navbar navbar-expand-lg navbar-${theme} ${bgColor} fixed-top mt-3 mt-lg-5">
            <div class="container">
                <!-- Logo -->
                <a class="navbar-brand" href="index.html">
                    <img src="${logoSrc}" width="89" height="47" alt="">
                </a>

                <!-- Navbar Toggler -->
                <span class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation toggler-icon">
                    <span class="navbar-toggler-icon"></span>  
                </span>

                <!-- Navbar Menu -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto px-4 mt-lg-0 mt-4 mb-lg-0">
                        <li class="nav-item mx-lg-3">
                            <a class="nav-link" href="/">الرئيسية</a>
                        </li>
                        <li class="nav-item mx-lg-3">
                            <a class="nav-link" href="">عن رقم</a>
                        </li>
                        <li class="nav-item mx-lg-3">
                            <a class="nav-link" href="/services">الخدمات</a>
                        </li>
                        <li class="nav-item mx-lg-3">
                            <a class="nav-link" href="#">تواصل معنا</a>
                        </li>
                    </ul>
                    <!-- Language Switcher & Contact Button (For Desktop) -->
                    <ul class="navbar-nav d-none px-0 d-lg-flex me-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <button class="contact-us main-color">تواصل معنا</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

        this.toggleNavbar();
    }
}

// Define the custom element
customElements.define('navbar-component', Navbar);
