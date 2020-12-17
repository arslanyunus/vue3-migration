<template>
    <div class="home">
        <h1>This is an home page!</h1>

        <p><b>message:</b> {{message}}</p>
        <p><b>title:</b> {{title}}</p>
        <HomeContent v-model="message" v-model:title="title"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'
import EventBus from '@/EventBus';

export default {
    name: 'Home',
    components: {
        HomeContent,
    },
    data() {
        return {
            message: 'this is a home message',
            title: 'this is a home title',
        };
    },
    mounted() {
        EventBus.bus.$on('setMessage', (message) => {
            this.message = message;
        });
    },
    beforeUnmount() {
        EventBus.bus.$off('setMessage');
    },
};
</script>
