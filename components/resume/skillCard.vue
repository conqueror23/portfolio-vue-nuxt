<template>
  <div class="skillCardWrapper">
    <div class="skill-wrapper" v-for="skill in skills">
      <center>
        <h3>{{skill.name}}</h3>
      </center>
      <img v-bind:src="skill.url.toString()" alt="Not Found" />
    </div>
  </div>
</template>

<script>
export default {
  name: "skillCard",
  props: ["skills"],
  data() {
    return {};
  }
};
</script>

<style>
.skillCardWrapper {
  display: flex;
  flex-wrap: wrap;
}
.skill-wrapper {
  margin: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  -moz-box-shadow: 13px 13px 20px #000000;
  -webkit-box-shadow: 13px 13px 20px #000000;
  box-shadow: 13px 13px 20px #000000;
}
.skill-wrapper img {
  width: 15em;
  height: 15em;
}
</style>
