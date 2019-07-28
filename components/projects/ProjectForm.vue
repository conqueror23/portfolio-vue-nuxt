<template>
  <formHelper>
    <h2 slot="form-header">Add new Projects</h2>
    <div class="form-field" slot="form-field">
      <label >ProjectName:</label>
      <input type="text" placeholder="projectName" v-model="project.Name" />
      <label >Key Techs:</label>
      <input type="text" placeholder="projectTech" v-model="project.Tech" />
      <label>ProjectTime</label>
      <input type="text" placeholder="projectTime" v-model="project.Time" />
      <label>Project Description</label>
      <input type="text" placeholder="projectDescription" v-model="project.Description" />
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
          this.$emit("submitted", res);
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>
