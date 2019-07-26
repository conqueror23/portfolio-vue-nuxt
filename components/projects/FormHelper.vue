<template>
  <form class="form">
    <div id="form-header">
      <slot name="form-header"></slot>
    </div>
    <div id="form-field">
      <slot name="form-field"></slot>
    </div>
    <div id="form-control">
      <slot name="form-control"></slot>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit: function() {
      console.log(this.projectName);
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-wrap: wrap;
}
</style>
