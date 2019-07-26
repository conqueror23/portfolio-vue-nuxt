<template>
  <div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      skills: 12
    };
  },
  components: {},
  computed: {
    skillNum: function() {
      return this.skills + 1;
    }
  }
};
</script>

<style>
</style>
