<template>
  <header>
    <!-- Main Menu Start -->
    <div class="site-navigation main_menu " id="mainmenu-area">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <nuxt-link class="navbar-brand" :to="{name: 'index'}">
            <img src="~/assets/images/logo-dark.png" alt="Orgenik" class="img-fluid">
          </nuxt-link>
          <!-- Toggler -->

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
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
            <div class="header-contact d-flex align-items-center">
              <div class="header-contact-icon">
                <i class="ti-headphone-alt"></i>
              </div>
              <div class="contact-text">
                <span>Contact for support </span>
                <h4>34 345 23546</h4>
              </div>
            </div>
          </div> <!-- / .navbar-collapse -->
        </nav>
      </div> <!-- / .container -->
    </div>

  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

</style>
