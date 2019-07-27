<template>
  <table id="contact">
    <th>
      <center>Wayne</center>
    </th>
    <tr>
      <th>Phone</th>
    </tr>
    <tr>
      <td class="hidden-info">0481222149</td>
    </tr>
    <tr>
      <th>Email</th>
    </tr>
    <tr>
      <td class="hidden-info">
        <a href="mailto:wayneborong@gmail.com">wayneborong@gmail.com</a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "contacts"
};
</script>

<style>
#contact {
  position: fixed;
  top: 30%;
  left: 81%;
  display: flex;
  flex-direction: column;
  border: 0.1em solid blue;
  border-radius: 15%;
  z-index: 3;
  opacity: 80%;
}

#contact:hover .hidden-info {
  display: block;
  left: 60%;
}
.hidden-info {
  display: none;
}
</style>
