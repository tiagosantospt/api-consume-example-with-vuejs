<template>
    <div class="stat-box">
        <div class="content">
        <p class="number">{{ number | numberWithSpaces }}</p>
        <p class="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['number', 'desc'],
    filters: {
        numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
    },
}
</script>