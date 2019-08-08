<template>
  <div class="skillCardWrapper">
    <div class="skill-wrapper" v-for="skill in skills">
      <center>
        <h3>{{skill.name}}</h3>
      </center>
      <div class="skill-desc">{{skill.description}}</div>
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
.skill-desc {
  z-index: 2;
  float: inline-end;
  position: absolute;
  background: #7f8c8d;
  color: #ecf0f1;
  width: 15em;
  height: 0em;
  display: none;
  transition: 1s;
}

.skill-wrapper img {
  width: 15em;
  height: 15em;
}

.skill-wrapper:hover .skill-desc {
  height: 15em;
  display: block;
}
</style>
