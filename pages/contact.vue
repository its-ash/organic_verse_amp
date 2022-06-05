<template>
  <div>
    <section class="contact-section pt-100 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-inner d-lg-flex">
              <div class="contact-item">
                <img src="assets/images/icon/001-contact.png" alt="" class="img-fluid">
                <p>Email Us</p>
                <h4>support@email.com</h4>
              </div>
              <div class="contact-item">
                <img src="assets/images/icon/002-mail.png" alt="" class="img-fluid">
                <p>Make a Call</p>
                <h4>+45 234 345467</h4>
              </div>
              <div class="contact-item">
                <img src="assets/images/icon/003-maps-and-flags.png" alt="" class="img-fluid">
                <p>Corporate Office</p>
                <h4>Moon Street Light Avenue, 14/05
                  Jupiter, JP 80630 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Query></Query>

  </div>
</template>

<script>
import Query from "~/components/Query";

export default {
  name: "contact",
  components: { Query }
};
</script>

<style scoped>

</style>
