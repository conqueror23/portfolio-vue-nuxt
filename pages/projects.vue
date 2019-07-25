<template>
    <div>
        <NavBar/>
        <Projects />
        <SwApi/>
        project page
        {{skilN}}
        <Contacts />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Contacts from '../components/Contacts'
import SwApi from '../components/projects/SwApi'
import Projects from '../components/projects/Project'
export default {
  name:'projectpage',
  data(){
    return{
    skills:10,

    }
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
    skilN:function(){
      return this.skills+1;
    }
  }

}
</script>

<style>

</style>
