<template>
  <div>
    <NavBar />
    <Projects />
    <SwApi/>
    <Contacts />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Contacts from "../components/Contacts";
import SwApi from "../components/projects/SwApi";
import Projects from "../components/projects/Project";
import axios from "axios";

export default {
  name: "projectpage",
  components: {
    Contacts,
    NavBar,
    SwApi,
    Projects
  },
  head: {
    title: "projects",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  },
  computed: {},
  methods: {
    createProject() {
      axios.post();
    }
  }
};
</script>

<style>
</style>
