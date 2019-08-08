<template>
  <formHelper>
    <div class="form-field" slot="form-field">
      <label>Company Name</label>
      <input type="text" placeholder="companyName" v-model="work.companyName" />
      <label>Title</label>
      <input type="text" placeholder="Title" v-model="work.Title" />
      <label>Type</label>
      <input type="text" placeholder="Type" v-model="work.Type" />
      <label>Time</label>
      <input type="text" placeholder="Time" v-model="work.Time" />
    </div>
    <div slot="form-control">
      <button class="button--green" @click.prevent="updateWork">Submit</button>
    </div>
  </formHelper>
</template>

<script>
import axios from "axios";
import formHelper from "@/components/projects/FormHelper";
export default {
  name: "workForm",
  data() {
    return {
      work: {
        companyName: "",
        Title: "",
        Type: "",
        Time: ""
      },
      response: "",
      submitted: ""
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
          this.$emit("submitted", res);
          this.submitted = "true";
          this.response = res;
        });
    }
  }
};
</script>

<style>
</style>
