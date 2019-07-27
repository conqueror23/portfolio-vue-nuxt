<template>
  <div class="project-components">
    <Test />
    <ProjectCard />
    <hr>
    <WorkCard />
    <hr>
    <!-- cannot read other components anymore ?? no cannot be -->
    <div class="forms">
      <div id="form-helpers">
        <keep-alive>
          <component :is="formType"></component>
        </keep-alive>
      </div>
      <div id="add-btn">
        <button class="button--grey" @click="getProjectForm">Add Project Form</button>
        <br />
        <button class="button--grey" @click="getWorkForm">Add Work Form</button>
      </div>
    </div>
    

  </div>
</template>

<script>
import ProjectForm from "../projects/ProjectForm";
import WorkForm from "../projects/WorkForm";
import Test from "../projects/test";
import axios from "axios";
import ProjectCard from '../projects/ProjectCard'
import WorkCard from '../projects/WorkCard'

export default {
  name: "Projects",
  data() {
    return {
      test: "jukun",
      formType: "projectForm"
    };
  },
  components: {
    ProjectForm,
    Test,
    projectForm: ProjectForm,
    workForm: WorkForm,
    ProjectCard,
    WorkCard,
  },
  methods: {
    getProjectForm() {
      this.formType = "projectForm";
    },
    getWorkForm() {
      this.formType = "workForm";
    }
  }
};
</script>

<style>
.forms {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
}
#add-btn {
  margin-left: 20em;
  margin-top: 4em;
  float: right;
  display: flex;
  flex-direction: column;
}
#form-helpers {
  display: flex;
  flex-direction: column;
}
h1{
  background: #81ecec;
  color: #636e72;
}
 
</style>
