<template>
    <div class="world-stats">
        <Box :number="totalConfirmed" desc="TOTAL CASES"/>
        <Box :number="totalActive" desc="ACTIVE CASES"/>
        <Box :number="totalRecovered" desc="RECOVERED CASES"/>
        <Box :number="totalDeaths" desc="TOTAL DEATHS"/>
    </div>
</template>

<script>
import Box from './Box.vue'

export default {    
    props: ['totalConfirmed', 'totalActive', 'totalRecovered', 'totalDeaths'],
    components: { Box }
}
</script>