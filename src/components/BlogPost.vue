<template>
  <div id="container">
    <h3>{{ title }}</h3>
    <p>{{ postText }}</p>
    <div>
      <p>Written by {{ author }} at {{ createdDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: String,
    postText: String,
    author: String,
    createdDate: Date,
  },
};
</script>
<style>
#container {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}
</style>
