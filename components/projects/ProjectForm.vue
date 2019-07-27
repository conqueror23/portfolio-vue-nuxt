<template>
  <formHelper>
    <h2 slot="form-header">Add new Projects </h2>
    <div class="form-field" slot="form-field">
      <input type="text" placeholder="projectName" v-model="project.Name" />
      <input type="text" placeholder="projectTech" v-model="project.Tech" />
      <input type="text" placeholder="projectDescription" v-model="project.Description" />
      <input type="text" placeholder="projectTime" v-model="project.Time" />
    </div>
    <div slot="form-control">
      <button class="button--green" @click.prevent="uploadProject">Submit</button>
    </div>
  </formHelper>
</template>

<script>
import axios from "axios";
import formHelper from "../projects/FormHelper";
export default {
  data() {
    return {
      project: {
        Name: "",
        Tech: "",
        Description: "",
        Time: ""
      }
    };
  },
  components: {
    formHelper
  },
  methods: {
    uploadProject() {
      // using vue-resource to send http post request
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.project.Name,
          body: this.project.Description
        })
        .then(res => {
          console.log(res);
        });
      console.log(this.project.Name);
    }
  }
};
</script>

<style>
</style>
