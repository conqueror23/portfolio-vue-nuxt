<template>
  <div class="Resume">
    <NavBar />
    <Education />
    <Skills />
    <Contacts />
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import NavBar from "../components/NavBar";

import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
export default {
  name: "resume",
  components: {
    Contacts,
    NavBar,
    Education,
    Skills
  },
  head: {
    title: "resume",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  }
};
</script>

<style>

</style>
