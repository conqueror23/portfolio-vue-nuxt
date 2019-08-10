<template>
  <footer>
    <label>Name:</label>
    <span>Bolong Wang</span>
    <label>Phone:</label>
    <span>0481222149</span>
    <label>Email:</label>
    <span>
      <a href="mailto:wayneborong@gmail.com">wayneborong@gmail.com</a>
    </span>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  width: 100%;
  position: relative;
  top: 96%;
  clear: both;
  display: flex;
  background: #636e72;
  align-content: center;
  justify-content: space-evenly;
  font-size: 1em;
  font-weight: bold;
  flex-wrap: wrap;
  color: aliceblue;
}

footer a{
  color: aliceblue;
  text-decoration: none;

}
footer label span {
  display: block;
  /* padding: 2em 2em; */
}
</style>
