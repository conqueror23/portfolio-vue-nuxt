<template>
  <div>
    <a href="#" v-scroll-to="'#GMI-F'"> link to GMI-F</a>
    <div class="project-img" 
    v-for="(project,projectIndex) in projects" 
    :key="projectIndex"
    :id="projectIndex"
    @click='selectProject'
    >
          <p>{{projectIndex}}</p>
          <p>{{project.url}}</p>
          <img v-bind:src="project.url" alt="pic not found" v-scroll-to="`#`+projectIndex">

          <label class="project-hint">{{project.name}}</label>          

        </div>

  </div>
</template>

<script>
export default {

  name: "ProjectPreview",

  props: ['projects'],

  data() {
      return {
      }
  },
  components: {},
  methods: { 
    selectProject($event) {
      let selected =$event.srcElement.id;
      this.$emit("selectProject", selected);
    }
  },
  computed:{
      record:function (){
          
      }
  }
};
</script>

<style>
.project-img{
  border:2px solid red;
}
.project-img img{
  border:2px solid green;
}

.project-hint{
  display: none;
}

</style>
