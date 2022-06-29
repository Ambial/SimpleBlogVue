<template>
  <div id="app">
    <BlogPage msg="Awesome Blog" />
  </div>
</template>

<script>
import BlogPage from './components/BlogPage.vue';

export default {
  name: 'App',
  components: {
    BlogPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
