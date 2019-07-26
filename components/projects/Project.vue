<template>
  <div class="project-components">
    <Test />
    <!-- cannot read other components anymore ?? no cannot be -->
    <button @click="getProjectForm">Add Project Form</button>
    <button @click="getWorkForm">Add Work Form</button>
    <hr>
    <section class='form'>
      <component :is="formType"></component>
    </section>
  </div>
</template>

<script>
import ProjectForm from '../projects/ProjectForm'
import WorkForm from '../projects/WorkForm'
import Test from '../projects/test'


export default {
  name: "Projects",
  data(){
    return {
      test:'jukun',
      formType:'projectForm'
    }
  },
  components: {
    ProjectForm,
    Test,
    'projectForm':ProjectForm,
    'workForm':WorkForm,
  },
  methods:{
    getProjectForm(){
      this.formType='projectForm';
    },
    getWorkForm(){
      this.formType='workForm';
    }
  }


};
</script>

<style>

</style>
