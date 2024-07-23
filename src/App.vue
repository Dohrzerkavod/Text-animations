<template>
  <div id="app">
    <TextAnimation />
  </div>
</template>

<script>
import TextAnimation from "./components/TextAnimation.vue";

export default {
  name: "App",
  components: {
    TextAnimation
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
