class Footer extends HTMLElement {
    connectedCallback() {
        // Retrieve attributes to customize the footer
        const bgColor = this.getAttribute('data-bg') || 'main-bg'; // Default background class
        const textColor = this.getAttribute('data-text') || 'text-white'; // Default text color
        const logoSrc = this.getAttribute('data-logo') || './assets/imgs/rqm.png'; // Default logo 
        const year = new Date().getFullYear(); // Get current year dynamically

        // Render Footer HTML
        this.innerHTML = `
        <footer class="footer ${bgColor} ${textColor} py-4">
            <div class="container">
                <div class="row align-items-start">
                    <!-- Logo & Tagline -->
                    <div class="col-lg-3 col-md-12 text-xl-start text-center my-4 my-lg-0">
                        <img src="${logoSrc}" alt="Logo" class="mb-2" style="max-width: 100px;">
                        <p class="small">بوابتك للمستقبل الرقمي</p>
                    </div>

                    <!-- About Section -->
                    <div class="col-lg-2 col-md-4 col-6 text-xl-start text-center">
                        <h6 class="fw-bold mb-3">عن رقم</h6>
                        <ul class="list-unstyled p-0">
                            <li><a href="#" class="text-decoration-none ${textColor}">الرئيسية</a></li>
                            <li><a href="#" class="text-decoration-none ${textColor}">من نحن</a></li>
                            <li><a href="#" class="text-decoration-none ${textColor}">الخدمات</a></li>
                        </ul>
                    </div>

                    <!-- Useful Links -->
                    <div class="col-lg-2 col-md-4 col-6 text-xl-start text-center">
                        <h6 class="fw-bold mb-3">روابط تهمك</h6>
                        <ul class="list-unstyled p-0">
                            <li><a href="#" class="text-decoration-none ${textColor}">سياسة الخصوصية</a></li>
                            <li><a href="#" class="text-decoration-none ${textColor}">تواصل معنا</a></li>
                        </ul>
                    </div>

                    <!-- Location -->
                    <div class="col-lg-2 col-md-4 col-6 text-xl-start text-center">
                        <h6 class="fw-bold mb-3">مقرنا</h6>
                        <p class="small mb-0">طريق عثمان بن عفان - الرياض 12481</p>
                    </div>

                    <!-- Social Media -->
                   <div class="col-lg-3 col-md-4 col-6 text-xl-start text-center">
                    <h6 class="fw-bold mb-4">تابعنا</h6>
                    <div class="social-icons ">
                        <a href="https://www.linkedin.com/company/byrqm-sa" target="_blank"
                            class="text-light text-decoration-none mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path d="M7 10.5V17.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M11 13.5V17.5M11 13.5C11 11.8431 12.3431 10.5 14 10.5C15.6569 10.5 17 11.8431 17 13.5V17.5M11 13.5V10.5"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.00801 7.5H6.99902" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M2.5 12.5C2.5 8.02166 2.5 5.78249 3.89124 4.39124C5.28249 3 7.52166 3 12 3C16.4783 3 18.7175 3 20.1088 4.39124C21.5 5.78249 21.5 8.02166 21.5 12.5C21.5 16.9783 21.5 19.2175 20.1088 20.6088C18.7175 22 16.4783 22 12 22C7.52166 22 5.28249 22 3.89124 20.6088C2.5 19.2175 2.5 16.9783 2.5 12.5Z"
                                    stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=966554404688" target="_blank"
                            class="text-light mx-2 text-decoration-none">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path
                                    d="M2.5 12.5C2.5 8.02166 2.5 5.78249 3.89124 4.39124C5.28249 3 7.52166 3 12 3C16.4783 3 18.7175 3 20.1088 4.39124C21.5 5.78249 21.5 8.02166 21.5 12.5C21.5 16.9783 21.5 19.2175 20.1088 20.6088C18.7175 22 16.4783 22 12 22C7.52166 22 5.28249 22 3.89124 20.6088C2.5 19.2175 2.5 16.9783 2.5 12.5Z"
                                    stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                <path
                                    d="M16.5 12.5C16.5 14.9853 14.4853 17 12 17C9.51472 17 7.5 14.9853 7.5 12.5C7.5 10.0147 9.51472 8 12 8C14.4853 8 16.5 10.0147 16.5 12.5Z"
                                    stroke="white" stroke-width="1.5" />
                                <path d="M17.5078 7H17.4988" stroke="white" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                        </a>
                        <a href="mailto:info@rqm.sa" target="_blank" class="text-light mx-2 text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path d="M2 6.5L8.91302 10.417C11.4616 11.861 12.5384 11.861 15.087 10.417L22 6.5"
                                    stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                                <path
                                    d="M2.01577 13.9756C2.08114 17.0412 2.11383 18.5739 3.24496 19.7094C4.37608 20.8448 5.95033 20.8843 9.09883 20.9634C11.0393 21.0122 12.9607 21.0122 14.9012 20.9634C18.0497 20.8843 19.6239 20.8448 20.7551 19.7094C21.8862 18.5739 21.9189 17.0412 21.9842 13.9756C22.0053 12.9899 22.0053 12.0101 21.9842 11.0244C21.9189 7.95886 21.8862 6.42609 20.7551 5.29066C19.6239 4.15523 18.0497 4.11568 14.9012 4.03657C12.9607 3.98781 11.0393 3.98781 9.09882 4.03656C5.95033 4.11566 4.37608 4.15521 3.24495 5.29065C2.11382 6.42608 2.08114 7.95885 2.01576 11.0244C1.99474 12.0101 1.99475 12.9899 2.01577 13.9756Z"
                                    stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="https://x.com/byrqm_sa" target="_blank" class="text-light mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path
                                    d="M3 21.5L10.5484 13.9516M10.5484 13.9516L3 3.5H8L13.4516 11.0484M10.5484 13.9516L16 21.5H21L13.4516 11.0484M21 3.5L13.4516 11.0484"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                </div>

                <!-- Copyright -->
                <div class="row text-center mt-5">
                    <div class="col-12">
                        <hr>
                        <p class="small mb-0">جميع الحقوق محفوظة لشركة رقم © ${year}</p>
                    </div>
                </div>
            </div>
        </footer>`;
    }
}

// Define the custom element
customElements.define('footer-component', Footer);
