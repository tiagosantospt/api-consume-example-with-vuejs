<template>
  <section class="country">
    <div class="container">
      <h1 class="title">Country Cases</h1>

      <div class="select-container">
        <select @change="onSelectChange($event)" v-model="countryIndex">
          <option v-for="(c, index) in countries" :key="index" :value="index">{{ c.Country }}</option>
        </select>
      </div>

      <div class="country-stats">
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
      countryIndex: 0,
      countries: {},
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
    },
    onSelectChange(event) {
      this.countryIndex = event.target.value;
      this.getCountryData();
    },
    getCountryData() {
      this.data = this.countries[this.countryIndex];
      this.data.TotalActive = this.data.TotalConfirmed - (this.data.TotalRecovered + this.data.TotalDeaths)
    }
  },
  async created() {
    let response = await covidService.getAll();
    this.countries = response.data.Countries;
    this.getCountryData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/Variables.scss";
@import "../assets/scss/Common.scss";

section.country {
  .select-container {
    display: flex;
    justify-content: center;
    margin-bottom: 45px;
  }
  .select-container select {    
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    outline: none;
    font-weight: bold;
    text-align: center;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    text-align-last: center;
    box-shadow: 0px 0px 10px rgba($grey, 0.8);
    font-size: 20px;
    cursor: pointer;
  }
}
</style>