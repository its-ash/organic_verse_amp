<template>
  <div>
    <Header></Header>
    <nuxt></nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  name: "default",
  components:{Header, Footer}
};
</script>

<style lang="scss">
@import "assets/style.scss";
</style>
