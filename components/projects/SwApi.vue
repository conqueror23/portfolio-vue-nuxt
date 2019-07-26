<template>
  <div></div>
</template>

<script>

// there is an issue here how to send data to html
// you got the data just need to pass to your pages or components
export default {
  name: "StartWar-API",
  async asyncData() {
    let { personInfo } = await this.axios.get(`https://swapi.co/api/people/1/`);
    console.log(personInfo);
  },
  methods: {}
};
</script>

<style>
</style>
