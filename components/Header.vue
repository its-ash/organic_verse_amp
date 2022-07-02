<template>
  <header>
    <!-- Main Menu Start -->
    <div class="site-navigation main_menu " id="mainmenu-area">
      <div class="container">
        <nav class="navbar navbar-expand-lg rounded py-0">
          <nuxt-link class="navbar-brand" :to="{name: 'index'}">
            <img src="/logo.png" alt="Organic Verse" class="img-fluid" style="height: 90px">
          </nuxt-link>
          <!-- Toggler -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                  aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
          </button>
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <nuxt-link :to="{name: 'index'}" class="nav-link js-scroll-trigger">
                  Home
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{name: 'about'}" class="nav-link js-scroll-trigger">
                  About
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{name: 'service'}" class="nav-link js-scroll-trigger">
                  Services
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{name: 'contact'}" class="nav-link">
                  Contact
                </nuxt-link>
              </li>
            </ul>
            <a href="tel:919414022507" class="header-contact d-flex align-items-center">
              <div class="header-contact-icon bg-transparent mb-4">
                <lottie-player src="/lottie/call.json" loop autoplay></lottie-player>
              </div>
              <div class="contact-text">
                <span>Contact for support </span>
                <h4>9414022507</h4>
              </div>
            </a>
          </div> <!-- / .navbar-collapse -->
        </nav>
      </div> <!-- / .container -->
    </div>

  </header>
</template>

<script>
import Phone from "flat-color-icons/svg/phone.svg"
export default {
  name: "Header",
  components:{
    Phone
  }
};
</script>

<style scoped>
</style>
