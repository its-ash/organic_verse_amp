<template>
  <div>
    <section class="contact-section py-5 my-md-5">
      <div class="container py-3 my-5">
        <div class="row">
          <div class="col-lg-12">
            <div class="row justify-content-md-between justify-content-center">
              <a href="mailto:we@organicverse.in" class="col-md-3 col-8">
                <lottie-player src="/lottie/email.json" loop autoplay></lottie-player>
                <p class="mt-n5">Email Us</p>
                <h4>we@organicverse.in</h4>
              </a>
              <a href="tel:919414022507</h4>" class="col-md-3 col-8">
                <lottie-player class="p-4" src="/lottie/call.json" loop autoplay></lottie-player>
                <p class="mt-n5">Make a Call</p>
                <a href=""><h4>+9414022507</h4></a>
              </a>
              <div class="col-md-3 col-8">
                <lottie-player src="/lottie/address.json" loop autoplay></lottie-player>
                <p class="mt-n5">Corporate Office</p>
                <h4>Moon Street Light Avenue, 14/05
                  Ajmer, RJ 80630 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
