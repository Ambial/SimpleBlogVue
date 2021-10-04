<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <BlogPost
      title="First!"
      postText="Hello World! This is my first blog post and the start of an epic journey! Welcome to this fantastic job and thank you for joining me here!"
      author="Simon"
      :createdDate="this.$moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')"
    />
  </div>
</template>
<script>
import BlogPost from "./BlogPost.vue";

export default {
  name: "BlogPage",
  components: {
    BlogPost,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
