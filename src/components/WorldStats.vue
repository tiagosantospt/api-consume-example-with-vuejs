<template>
  <section class="stats">
    <div class="container">
      <h1 class="title">World Cases</h1>

      <div class="world-stats">
        <div class="stat-box">
          <div class="content">
            <p class="number">{{ numberWithSpaces(data.TotalConfirmed) }}</p>
            <p class="desc">TOTAL CASES</p>
          </div>
        </div>
        <div class="stat-box">
          <div class="content">
            <p class="number">{{ numberWithSpaces(data.TotalActive) }}</p>
            <p class="desc">ACTIVE CASES</p>
          </div>
        </div>
        <div class="stat-box">
          <div class="content">
            <p class="number">{{ numberWithSpaces(data.TotalRecovered) }}</p>
            <p class="desc">RECOVERED CASES</p>
          </div>
        </div>
        <div class="stat-box">
          <div class="content">
            <p class="number">{{ numberWithSpaces(data.TotalDeaths) }}</p>
            <p class="desc">TOTAL DEATHS</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import CovidService from '../services/covidService';
const covidService = new CovidService();

export default {
  data: function () {
    return {
      data: {
        TotalConfirmed : '--- --- ---',
        TotalActive : '--- --- ---',
        TotalRecovered : '--- --- ---',
        TotalDeaths : '--- --- ---',
      }
    }
  },
  methods: {
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  async created() {
    let response = await covidService.getAll();
    this.data = response.data.Global;
    this.data.TotalActive = this.data.TotalConfirmed - (this.data.TotalRecovered + this.data.TotalDeaths)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../assets/scss/Variables.scss";
@import "../assets/scss/Common.scss";

section.stats {
  background-color: rgba($grey, .4);
  box-shadow: 0px 20px 20px rgba($grey, .4);
}

</style>