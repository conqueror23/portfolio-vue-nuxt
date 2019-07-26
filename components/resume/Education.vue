<template>
  <div class="edu">
    <h2>Educations</h2>
    <div class="edu-wrapper" >
      <table>
        <thead>
          <th>University</th>
          <th>Major</th>
          <th>Degree</th>
          <th>Time</th>
        </thead>
        <tr v-bind:key="edu.id" v-for="edu  in education">
          <tbody v-bind:key="term.id" v-for="(term,key) in edu">
            <td v-if="key != 'id'">{{term}}</td>
          </tbody>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import education from "@/assets/constants/education";
export default {
  data() {
    return {
      education
    };
  },
  components: {}
};
</script>

<style>
.edu {
  padding: 2em;
}
.edu-wrapper {
  display: flex;
  flex: 80%;
  flex-direction: row;
  justify-content: left;
  align-content: center;
}
</style>
