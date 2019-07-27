<template>
  <div>
    <div id="title">
      <h1>Project List</h1>
      <div id="searchbox">
        <label>Search Keyword</label>
        <input type="text" placeholder="Search" v-model="searchProject" />
      </div>
    </div>

    <div id="project-card">
      <div class="single-card" v-for="(item, index) in serachResult" :key="index">
        <h2>{{index}}</h2>
        <hr />
        <table v-for="(value, att) in item" :key="att">
          <tr>
            <th>{{att}} :</th>
            <td>{{value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../../assets/constants/projects";

export default {
  components: {},
  data() {
    return {
      projectData: projects,
      searchProject: ""
    };
  },
  computed: {
    serachResult: function() {
      let result = Object.keys(projects).filter(res => {
        return projects[res].tech.match(this.searchProject);
      });
      let fin = [];
      result.forEach(element => {
        // element=element.toString();
        // console.log(projects[element]);
        fin.push(projects[element]);
      });
      return fin;

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

.single-card {
  width: 40%;
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
</style>
