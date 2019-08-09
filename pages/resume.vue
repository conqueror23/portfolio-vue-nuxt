<template>
  <div id="resume">
    <NavBar />
    <Education />
    <Skills />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
export default {
  name: "resume",
  components: {
    NavBar,
    Education,
    Skills,
    Footer
  },
  head: {
    title: "resume",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  }
};
</script>

<style>
.resume {
  
}
</style>
