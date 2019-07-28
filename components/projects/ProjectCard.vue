<template>
  <div class="projectCard-wrapper">
    <center>
      <h1>Project List</h1>
    </center>
    <ProjectPreview v-bind:projects="projectData" @selectProject="selectShow($event)" />
    <div id="project-main">
      <div id="searchbox">
        <label>Datails Search Engine</label>
        <input type="text" placeholder="Search" v-model="searchProject" />
      </div>
      <div id="project-card">
        <div :id='indexArray[index]' class="single-card" v-for="(item, index) in serachResult" :key="index">
          <h2>{{indexArray[index]}}</h2>
          <hr />
          <table v-for="(value, att) in item" :key="att">
            <tr v-if="att!=='url'">
              <th>{{att}}|</th>
              <td>{{value}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/assets/constants/projects";
import ProjectPreview from '@/components/projects/ProjectPreview'
import { smart } from '@babel/template';

export default {
  components: {
    ProjectPreview,
  },
  data() {
    return {
      projectData: projects,
      searchProject: "",
      indexArray: Object.keys(projects),
    };
  },
  computed: {
    serachResult: function() {
      let result = Object.keys(projects).filter(res => {
        return projects[res].detail.match(this.searchProject);
      });
      let searchResult = [];
      result.forEach(element => {
        searchResult.push(projects[element]);
      });
      return searchResult;
    }
  },
  methods:{
    selectShow($event){
      // this.indexArray=$event;
      console.log($event);
      let selectShow = this.projectData[$event];
      // console.log(this.projectData[$event]) //this is the project you want to show
      return selectShow; 
      


      // you got the id that of that project now
      
      // a better version maybe just give brings back the one you selected object
      
      
    }
  }
};
</script>
<style>
#title {
  display: flex;
  justify-content: space-around;
}
#project-card {
  display: flex;
  flex-wrap: wrap;
}
#project-main {
  padding: 0 2em;
}
#searchbox {
  display: flex;
  float: inherit;
  justify-content: space-evenly;
}
.single-card {
  -moz-box-shadow: 10px 10px 5px #000000;
  -webkit-box-shadow: 10px 10px 5px #000000;
  box-shadow: 10px 10px 5px #000000;
  margin: 0.4em 0.4em;
  width: 100%;
}
.single-card:hover {
  font-size: 120%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 200;
}
#project-card > div {
  border: 0.1em solid blue;
}
td {
  overflow: auto;
}
</style>
