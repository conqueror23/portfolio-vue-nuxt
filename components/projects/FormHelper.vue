<template>
  <form class="form">
    <div class="form-header">
      <slot name="form-header"></slot>
    </div>
    <div class="form-field">
      <slot name="form-field"></slot>
    </div>
    <br />
    <div class="form-control">
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
.form-field {
  display: flex;
  flex-direction: column;
}
</style>
