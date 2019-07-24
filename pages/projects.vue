<template>
    <div>
        <NavBar/>
        project page
        <Contacts />
    </div>
</template>

<script>
import NavBar from '../components/layout/NavBar'
import Contacts from '../components/Contacts'
export default {
    components:{
        Contacts,
        NavBar,
    },
    head: {
    title: 'projects',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

}
</script>

<style>

</style>
