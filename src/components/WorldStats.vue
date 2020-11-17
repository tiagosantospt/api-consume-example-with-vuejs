<template>
  <section class="stats">
    <div class="container">
      <h1 class="title">World Cases</h1>
      <BoxContainer 
        :totalActive="data.TotalActive"
        :totalConfirmed="data.TotalConfirmed"
        :totalRecovered="data.TotalRecovered"
        :totalDeaths="data.TotalDeaths"
      />
    </div>
  </section>
</template>

<script>
import BoxContainer from './common/BoxContainer.vue'

export default {
  props: ['data'],
  components: { BoxContainer }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/Variables.scss";

section.stats {
  background-color: rgba($grey, .4);
  box-shadow: 0px 20px 20px rgba($grey, .4);
}

</style>