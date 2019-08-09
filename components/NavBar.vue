<template>
  <nav>
    <nuxt-link to="/">home</nuxt-link>|
    <nuxt-link to="/project">projects</nuxt-link>|
    <nuxt-link to="resume">RESUME</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
nav {
  width: 100%;
  display: flex;
  flex: 0;
  position: fixed;
  background: #636e72;
  border: 0.1em solid gray;
  justify-content: space-evenly;
  padding: 0.1em;
}
nav a {
  display: block;
  border: 0.1em solid green;
  color: aliceblue;
  padding: 0.2em 10%;
  margin: 0 0.2em;
}
nav a:hover {
  display: block;
  border: 0.1em solid green;
  background: #74b9ff;
  color: #dfe6e9;
  padding: 0.2em 10%;
  margin: 0 0.2em;
}
.nuxt-link-exact-active {
  background: #bdc3c7;
}
</style>
