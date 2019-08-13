<template>
  <div>
    <Info/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from '../components/Footer'
import Info from '../components/home/infos'
import axios from "axios";

export default {
  name: "coverPage",
  components: {
    NavBar,
    Info,
    Footer
  },
  head: {
    title: "cover",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  },
};
</script>

<style>
</style>
