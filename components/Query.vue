<template>
  <section class="contact pb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-heading">
            <h4 class="subheading">Organic Verse</h4>
            <nuxt-link :to="{name: 'index'}" class="subtitle">Organic Verse</nuxt-link>
            <h2>Have any query <span>on your mind?</span></h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 ">
          <form class="contact__form form-row" @submit.prevent="submitForm" id="contactForm">
            <div class="row">
              <div class="col-12">
                <div class="alert alert-success contact__msg" style="display: none" role="alert">
                  Your message was sent successfully.
                </div>
              </div>
            </div>
            <div class="row form-row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="text" id="name" name="name" class="form-control" placeholder="Your Name">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="text" name="email" id="email" class="form-control" placeholder="Email Address">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="text" name="subject" id="subject" class="form-control" placeholder="Subject">
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group">
                  <textarea id="message" name="message" cols="30" rows="5" class="form-control"
                            placeholder="Your Message"></textarea>
                </div>
              </div>
            </div>

            <div class="col-lg-12 d-flex justify-content-center">
              <div class="mt-4">
                <button class="btn btn-primary small p-0 px-4 py-1" type="submit">
                  <span>Send</span>
                  <SendIcon style="max-width: 40px;width: 40px"></SendIcon>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SendIcon from "@/assets/svg/send.svg";

export default {
  name: "Query",
  components: {
    SendIcon
  },
  methods:{
    submitForm(){
      console.log("here");
    }
  }
};
</script>

<style scoped>

</style>
