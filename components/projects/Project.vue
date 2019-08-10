<template>
  <div class="project-components">
    <Individuals/>
    <hr>
    <ProjectCard />
    <hr />
    <WorkCard />
    <hr />
    <center>
      <h1 v-if="formType ==='workForm'">Add New Work Experience</h1>
      <h1 v-else>Add New Project Experience</h1>
    </center>
    <!-- cannot read other components anymore ?? no cannot be -->
    <div class="forms">
      <div id="form-helpers">
        <keep-alive>
          <div v-if="!submitted">
            <component :is="formType" @submitted="changeDisplay($event)" v-bind:api="api"></component>
          </div>
          <div v-else>
            <h2>You have submited</h2>
            <p>{{submitData}}</p>
          </div>
        </keep-alive>
      </div>
      <div id="add-btn">
        <button
          v-if="formType == 'workForm'"
          class="button--grey"
          @click="getProjectForm"
        >Add Project Experience</button>
        <button v-else class="button--grey" @click="getWorkForm">Add Work Experience</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectForm from "../projects/project/ProjectForm";
import WorkForm from "../projects/work/WorkForm";
import ProjectCard from "../projects/project/ProjectCard";
import WorkCard from "../projects/work/WorkCard";
import Individuals from '../projects/project/IndividualProject'


export default {
  name: "Projects",
  data() {
    return {
      test: "jukun",
      formType: "projectForm",
      submitted: "",
      submitData: [],
      api: "https://jsonplaceholder.typicode.com/posts"
    };
  },
  components: {
    ProjectCard,
    projectForm: ProjectForm,
    workForm: WorkForm,
    Individuals,
    WorkCard
  },
  methods: {
    getProjectForm() {
      this.formType = "projectForm";
      this.submitted = "";
    },
    getWorkForm() {
      this.formType = "workForm";
      this.submitted = "";
    },
    changeDisplay($event) {
      this.submitted = true;
      this.submitData = $event.data;
    }
  }
};
</script>

<style>
.forms {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
}
#add-btn {
  margin-left: 2em;
  margin-top: 4em;
  float: right;
  display: flex;
  flex-direction: column;
}
#form-helpers {
  display: flex;
  flex-direction: column;
}

</style>
