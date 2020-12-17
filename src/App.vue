<template>
    <div id="app">
        <el-menu mode="horizontal" :router="true">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
            <el-menu-item index="/contact">Contact</el-menu-item>
        </el-menu>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    };
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
