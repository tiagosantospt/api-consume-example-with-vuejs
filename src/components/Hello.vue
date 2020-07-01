<template>
  <section class="hello">
    <div class="back-text">2020</div>
    <h1>Covid-<span class="red">19</span></h1>
    <p>{{ msg }}</p>
  </section>
</template>

<script>

export default {
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/Hello.scss";
</style>