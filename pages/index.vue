<template>
  <div class="container">
  <NavBar/>
  homepage
  <Contacts />
  </div>
</template>

<script>
import NavBar from '../components/layout/NavBar'
import Contacts from '../components/Contacts'

export default {
  name:'homepage',
  components: {
    NavBar,
    Contacts,
  },
   head: {
    title: 'homepage',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

}
</script>

<style>


</style>
