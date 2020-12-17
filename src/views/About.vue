<template>
    <div class="about">
        <h1>This is an about page</h1>

        <p>raw value: {{ value }}</p>
        <p>parseInt: {{ parseInt(value) }}</p>
    </div>
</template>

<script>

    export default {
        name: 'About',
        methods: {
            parseInt(val) {
                return parseInt(val)
            },
        },
        data() {
            return {
                value: 25.123,
            }
        },
    }
</script>
