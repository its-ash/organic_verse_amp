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
               <h4>9414022507</h4>
              </a>
              <a target="_blank" href="https://www.google.com/maps/dir/26.8828672,75.7694464/sdp+machines/@26.6625801,74.6155446,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x396bddf221bbed2f:0x5f39736c19da042f!2m2!1d74.5830608!2d26.4391142" class="col-md-3 col-8">
                <lottie-player src="/lottie/address.json" loop autoplay></lottie-player>
                <p class="mt-n5">Corporate Office</p>
                <h4>Foisagar, Lucky Choraha ke pass, Kajipura, Rajasthan 305005</h4>
              </a>
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
