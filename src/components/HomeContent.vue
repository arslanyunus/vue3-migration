<template>
    <el-row class="home" type="flex" justify="center">
        <el-card style="width: 250px;">
            <p>Home Content</p>

            <el-input v-model="input" style="margin-bottom: 20px"></el-input>

            <el-input v-model="inputTitle" style="margin-bottom: 20px"></el-input>

            <el-button icon="el-icon-s-promotion" @click="trigger">trigger event bus emit</el-button>
        </el-card>
    </el-row>
</template>

<script>
import EventBus from '@/EventBus';

export default {
    name: 'Home',
    model: {
        prop: 'message',
        event: 'change',
    },
    props: {
        message: String,
        title: String
    },
    data() {
        return {
            input: '',
            inputTitle: '',
        };
    },
    methods: {
        trigger() {
            EventBus.bus.$emit('setMessage', 'event bus set message');
        },
    },
    created() {
        this.input = this.message;
        this.inputTitle = this.title;
    },
    watch: {
        input() {
            this.$emit('change', this.input);
        },
        inputTitle() {
            this.$emit('update:title', this.inputTitle);
        },
        message() {
            this.input = this.message;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
