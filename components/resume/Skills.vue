<template>
  <div >
    <center>
      <h1>Skills</h1>
    </center>
    <div class="skill-main " v-for="stack in stackArray">
      <h2 :id=stack>{{stack}}</h2>
      <SkillCard v-bind:skills="skills[stack]" />
    </div>
  </div>
</template>

<script>
import SkillCard from "../resume/skillCard";
import skills from "@/assets/constants/skills.js";

export default {
  data() {
    return {
      skills: skills,
      stackArray: Object.keys(skills)
    };
  },
  components: {
    SkillCard
  }
};
</script>

<style>

.skill-main {
  margin:0 2em;
  padding: 0 2em;
}
</style>
