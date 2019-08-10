<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/project">Project</nuxt-link>
          <nuxt-link to="/resume">Resume</nuxt-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style >
nav a {
  font-size: 2em;
  color: aliceblue;
  margin-left: 2em;
  font-weight: 600;
}
.nuxt-link-exact-active {
  text-decoration: underline;
}
</style>