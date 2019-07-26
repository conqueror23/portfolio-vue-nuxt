<template>
    <div>
        <NavBar/>
        <Projects />
        <SwApi/>
        project page
        <Contacts />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Contacts from '../components/Contacts'
import SwApi from '../components/projects/SwApi'
import Projects from '../components/projects/Project'
import axios from 'axios'


export default {
  name:'projectpage',
  data(){
   
  },
    components:{
        Contacts,
        NavBar,
        SwApi,
        Projects,
    },
    head: {
    title: 'projects',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  computed:{
    
  },methods:{
    createProject(){
      axios.post()

    }
  }

}
</script>

<style>

</style>
