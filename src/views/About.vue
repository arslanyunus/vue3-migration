<template>
    <div class="about">
        <h1>This is an about page</h1>

        <p>raw value: {{ value }}</p>
        <p>parseInt: {{ value | parseInt }}</p>
    </div>
</template>

<script>

    export default {
        name: 'About',
        filters: {
            parseInt(val) {
                return parseInt(val)
            }
        },
        data() {
            return {
                value: 25.123,
            }
        },
    }
</script>
