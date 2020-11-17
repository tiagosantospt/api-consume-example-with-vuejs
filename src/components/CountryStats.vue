<template>
  <section class="country">
    <div class="container">
      <h1 class="title">Country Cases</h1>

      <div class="select-container">
        <select @change="onSelectChange($event)" v-model="countryIndex">
          <option v-for="(c, index) in countries" :key="index" :value="index">{{ c.Country }}</option>
        </select>
      </div>

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
  props: ['countries'],
  components: { BoxContainer },
  data: function () {
    return {
      countryIndex: 0,
      data: {
        TotalConfirmed : '--- --- ---',
        TotalActive : '--- --- ---',
        TotalRecovered : '--- --- ---',
        TotalDeaths : '--- --- ---',
      }
    }
  },
  methods: {
    onSelectChange(event) {
      this.countryIndex = event.target.value;
      this.getCountryData();
    },
    getCountryData() {
      // verify if the countries array is empty
      if(Object.keys(this.countries).length === 0 && this.countries.constructor === Object) { return; }

      //if not...
      this.data = this.countries[this.countryIndex];
      this.data.TotalActive = this.data.TotalConfirmed - (this.data.TotalRecovered + this.data.TotalDeaths)
    }
  },
  watch: {
    countries: {
      handler: 'getCountryData',
      immediate: true
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/Variables.scss";

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