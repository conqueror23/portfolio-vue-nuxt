<template>
<div>
  <div class="edu">
    <center>
    <h1>Educations</h1>
    </center>
    <div class="edu-wrapper">
      <table>
        <thead>
          <tr>
          <th> Educations</th>
         
          </tr>
          </thead>
          <tr v-bind:key="edu.id" v-for="edu  in education">
            <th v-bind:key="term.id" v-for="(term,key) in edu">
              <td v-if="key=='id'">{{term+1}}</td>
              <td v-else>{{term}}</td>
           </th>
          </tr>
       </table>
      </div>
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


.edu-wrapper {
  margin:0 2em;
  padding:1em;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-content: center;
  flex-wrap: wrap;
}
.edu-wrapper table{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
}
</style>
