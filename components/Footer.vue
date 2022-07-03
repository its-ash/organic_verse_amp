<template>
  <section class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mr-auto col-sm-6 col-md-6">
            <div class="footer-widget footer-about mb-5 mb-lg-0">
              <img src="/logo.png" alt="Organic Verse" class="w-50">
              <!--              <p class="mt-3">Veniam Sequi molestias aut necessitatibus optio magni at natus accusamus . Nostrud-->
              <!--                exercitation ullamco laboris nisi ut aliquip.</p>-->
              <ul class="list-inline footer-socials">
                <li class="list-inline-item"><a href="https://www.facebook.com/organicverse/"><i
                  class="fab fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="https://www.instagram.com/organic_verse/"><i
                  class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-google-play"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-apple"></i></a></li>
              </ul>
            </div>
          </div>
          <!--          <div class="col-lg-2 col-sm-6 col-md-6">-->
          <!--            <div class="footer-widget footer-contact mb-5 mb-lg-0">-->
          <!--              <h5 class="widget-title">Services</h5>-->
          <!--              <ul class="list-unstyled">-->
          <!--                <li><a href="#">Our Gallery</a></li>-->
          <!--                <li><a href="#">Solutions</a></li>-->
          <!--                <li><a href="#">Our Farmers</a></li>-->
          <!--                <li><a href="#">Privacy Policy</a></li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="footer-widget footer-contact mb-5 mb-lg-0">
              <h5 class="widget-title">Contact</h5>
              <ul class="list-unstyled">
                <li>
                  <a target="_blank"
                     href="https://www.google.com/maps/dir/26.8828672,75.7694464/sdp+machines/@26.6625801,74.6155446,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x396bddf221bbed2f:0x5f39736c19da042f!2m2!1d74.5830608!2d26.4391142">
                    <i class="fa fa-map-marker"></i>
                    Foisagar, Kajipura, Rajasthan 305005</a>
                </li>
                <li><a href="mailto:info@organicverse.in"><i class="fa fa-envelope"></i>info@organicverse.in</a></li>
                <li><a href="tel:9414022507"><i class="fa fa-phone"></i>9414022507</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-btm">
      <div class="container">
        <div class="row copyright-bg">
          <div class="col-lg-6">
            <div class="copyright text-lg-left text-center">
              <p>&copy; Copyright reserved to <a href="https://www.neofox.org">Organic Verse</a>-{{ year }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="footer-btm-menu text-lg-right text-center">
              <nuxt-link :to="{name: 'policy'}">Privacy Policy</nuxt-link>
              <nuxt-link :to="{name: 'terms-condition'}">Term & conditions</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  methods: {},
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>

</style>
