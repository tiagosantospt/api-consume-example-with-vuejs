<template>
  <main id="app">
    <Hello msg="Stay at home to protect your family and be safe"/>
    <WorldStats :data="worldData"/>
    <CountryStats :countries="countries" ref="countryStatsComponent"/>
    
    <div class="footer">
      <p>Made with <span class="red">love</span> by <a href="https://www.linkedin.com/in/tiagosantospt/">tiagosantospt</a></p>
    </div>
  </main>
</template>

<script>

import CovidService from './services/covidService';
const covidService = new CovidService();

import Hello from './components/Hello.vue'
import WorldStats from './components/WorldStats.vue'
import CountryStats from './components/CountryStats.vue'

export default {
  name: 'App',
  components: {
    Hello,
    WorldStats,
    CountryStats
  },
  data : function () {
    return {
      countries: {},
      worldData: {
        TotalConfirmed : '--- --- ---',
        TotalActive : '--- --- ---',
        TotalRecovered : '--- --- ---',
        TotalDeaths : '--- --- ---',
      }
    }
  },
  async created() {
    let response = await covidService.getAll();
    this.worldData = response.data.Global;
    this.worldData.TotalActive = this.worldData.TotalConfirmed - (this.worldData.TotalRecovered + this.worldData.TotalDeaths)
    this.countries = response.data.Countries;
    // this.$refs.countryStatsComponent.getCountryData();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

@import "./assets/scss/Variables.scss";
@import "./assets/scss/Common.scss";

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $darker-grey;
  background-color: white;
}

a {
  color: $red;
  font-weight: 500;
  text-decoration: none;
}

.red {
  color: $red;
}

.footer {
  width: 100%;
  text-align: center;
}

</style>
