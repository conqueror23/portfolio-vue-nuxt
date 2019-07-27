<template>
  <formHelper>
    <h2 slot="form-header">Add new Work</h2>
    <div class="form-field" slot="form-field">
      <input type="text" placeholder="companyName" v-model="work.companyName" />
      <input type="text" placeholder="Title" v-model="work.Title" />
      <input type="text" placeholder="Type" v-model="work.Type" />
      <input type="text" placeholder="Time" v-model="work.Time" />
    </div>
    <div slot="form-control">
      <button class="button--green" @click.prevent="updateWork">Submit</button>
    </div>
  </formHelper>
</template>

<script>
import axios from "axios";
import formHelper from "../projects/FormHelper";
export default {
  data() {
    return {
      work: {
        companyName: "",
        Title: "",
        Type: "",
        Time: ""
      },
      response:"",
      submitted:'',
    };
  },
  components: {
    formHelper
  },
  methods: {
    updateWork() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.work.companyName,
          body: this.work.Title + this.work.Time
        })
        .then(res => {
          this.$emit('submitted',res);
          this.submitted='true';
          this.response=res;
        });
    }
  }
};
</script>

<style>
</style>
