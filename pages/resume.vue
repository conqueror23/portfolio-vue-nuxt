<template>
    <div>
        <NavBar/>
        <div id="resume">
        resume page
            
        </div>

        <div id='skills'>
            
        </div>
        <Contacts />
    </div>
</template>

<script>
import Contacts from '../components/Contacts'
import NavBar from '../components/layout/NavBar'
export default {
    name:'resume',
    components:{
        Contacts,
        NavBar,
    },
      head: {
    title: 'resume',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

}
</script>

<style>

</style>
