<template>
  <div>
    <NavBar />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import Projects from "../components/projects/Project";
import axios from "axios";

export default {
  name: "projectpage",
  components: {
    NavBar,
    Projects,
    Footer
  },
  head: {
    title: "projects",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  },
  
};
</script>

<style>
</style>
